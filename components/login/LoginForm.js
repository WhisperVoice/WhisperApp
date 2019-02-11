import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';

import UserInput from '../shared_components/UserInput';
import LoginStyles from './LoginStyles'
import usernameImg from '../../assets/images/username.png';
import passwordImg from '../../assets/images/password.png';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showPass: true,
          press: false,
        };
        this.showPass = this.showPass.bind(this);
      }
      showPass() {
        this.state.press === false
          ? this.setState({showPass: false, press: true})
          : this.setState({showPass: true, press: false});
      }

      render() {
        return (
          <KeyboardAvoidingView behavior="padding" style={LoginStyles.container}>
            <UserInput
              source={usernameImg}
              placeholder="Username"
              autoCapitalize={'none'}
              returnKeyType={'done'}
              autoCorrect={false}
            />
            <UserInput
              source={passwordImg}
              secureTextEntry={this.state.showPass}
              placeholder="Password"
              returnKeyType={'done'}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          </KeyboardAvoidingView>
        );
      }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
