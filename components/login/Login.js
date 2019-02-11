import React, { Component } from 'react';
import { View } from 'react-native';
import LoginForm from './LoginForm';
import Logo from '../shared_components/Logo';
import ButtonSignup from '../shared_components/ButtonSignup';
import ButtonSubmit from '../shared_components/ButtonSubmit';
import LoginStyles from './LoginStyles';

export default class Login extends Component {
    render() {
        return (
            <View style={LoginStyles.container}>
                <Logo />
                <LoginForm />
                <ButtonSubmit />
                <ButtonSignup />
            </View>
        );
    }
}


