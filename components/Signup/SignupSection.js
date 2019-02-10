import React, {Component} from 'react';
import {StyleSheet, 
        View, 
        Text
} from 'react-native';
import SignupSectionStyles from './SignupSectionStyles'

export default class SignupSection extends Component {
    render() {
      return (
        <View style={SignupSectionStyles.container}>
          <Text style={SignupSectionStyles.text}>Create Account</Text>
          <Text style={SignupSectionStyles.text}>Forgot Password?</Text>
        </View>
      );
    }
}