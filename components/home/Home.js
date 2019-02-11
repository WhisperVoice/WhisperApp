
import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  Easing
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import HomeStyles from './HomeStyles';
import VoiceMenu from '../voice_menu/VoiceMenu'

const SIZE = 40;

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => resolve(position), e=> reject(e));
  });
};

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      flex: 0,
      region: { 
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  componentWillMount() {
    setTimeout(()=> {
      this.setState({flex: HomeStyles.map})
    }, 500);
  }

  componentDidMount() {
    return getCurrentLocation().then(position => {
      if (position) {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          },
        });
      }
    });
  }

  _onPress() {
    if (this.state.isLoading) retsurn;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      Actions.pop();
    }, 500);
  }

  render() {

    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    return (
      <View style={{flex: 1}}>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={this.state.flex}
            region={this.state.region}
            showsUserLocation={true}
            showsMyLocationButton={true}
          />
        <VoiceMenu> </VoiceMenu>
      </View>
          
    );
  }
}
