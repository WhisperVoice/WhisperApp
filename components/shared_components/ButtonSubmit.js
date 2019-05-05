import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Alert,
  View,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import spinner from '../../assets/images/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
const MARGIN_BOTTOM = 20;

export default class ButtonSubmit extends Component {
    constructor() {
        super();
    
        this.state = {
          isLoading: false,
        };
    
        this.buttonAnimated = new Animated.Value(0);
        this.growAnimated = new Animated.Value(0);
        this._onPress = this._onPress.bind(this);
      }

      _onPress() {
        if (this.state.isLoading) return;
    
        this.setState({isLoading: true});
        Animated.timing(this.buttonAnimated, {
          toValue: 1,
          duration: 200,
          easing: Easing.linear,
        }).start();
        
        let instance = axios.create({
          baseURL: 'https://localhost:8080',
          timeout: 1000,
          headers: {'X-Custom-Header': 'foobar'}
        });

        axios.post('http://192.168.86.36:8080/login', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }).then((resp) => {
          console.log(resp);
        })
    
        setTimeout(() => {
          Actions.homeScreen();
          this.setState({isLoading: false});
          this.buttonAnimated.setValue(0);
          this.growAnimated.setValue(0);
        }, 2300);
      }

      render() {
        const changeWidth = this.buttonAnimated.interpolate({
          inputRange: [0, 1],
          outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
        });
        const changeScale = this.growAnimated.interpolate({
          inputRange: [0, 1],
          outputRange: [1, MARGIN],
        });
    
        return (
          <View style={styles.container}>
            <Animated.View style={{width: changeWidth}}>
              <TouchableOpacity
                style={styles.button}
                onPress={this._onPress}
                activeOpacity={1}>
                {this.state.isLoading ? (
                  <Image source={spinner} style={styles.image} />
                ) : (
                  <Text style={styles.text}>LOGIN</Text>
                )}
              </TouchableOpacity>
              <Animated.View
                style={[styles.circle, {transform: [{scale: changeScale}]}]}
              />
            </Animated.View>
          </View>
        );
      }     
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E84361',
      height: MARGIN,
      borderRadius: 20,
      zIndex: 100,
      marginBottom: -MARGIN_BOTTOM,
    },
    circle: {
      height: MARGIN,
      width: MARGIN,
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 100,
      alignSelf: 'center',
      zIndex: 99,
      backgroundColor: '#000000',
    },
    text: {
      color: 'white',
      backgroundColor: 'transparent',
    },
    image: {
      width: 24,
      height: 24,
    },
  });
