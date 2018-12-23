import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';
import Logo from '../shared_components/Logo';
import SignupSection from '../Signup/SignupSection';
import ButtonSubmit from '../shared_components/ButtonSubmit';
import LoginStyles from './LoginStyles';

export default class Login extends Component {
    render() {
        return (
            <View style={LoginStyles.container}>
                <Logo />
                <LoginForm />
                <ButtonSubmit />
                <SignupSection />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        width: 400,
        height: 100,
        padding: 20
    },
    text: {
        fontSize: 18,
        color: '#ffffff'
    }
});
