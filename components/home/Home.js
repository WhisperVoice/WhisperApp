
import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Text
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import arrowImg from '../../assets/images/left-arrow.png';
import HomeStyles from './HomeStyles'

const SIZE = 40;

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  _onPress() {
    if (this.state.isLoading) return;

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
        <MapView
          provider={PROVIDER_GOOGLE}
          style={ HomeStyles.map }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        />
    );
  }
}

