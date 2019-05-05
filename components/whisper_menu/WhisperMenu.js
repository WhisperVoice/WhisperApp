import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View
  } from 'react-native';
import WhisperListPanel from '../whisper_list_panel/WhisperListPanel'

export default class WhisperMenu extends Component {
    _onPress() {
        if (this.state.isLoading) return;
    
        this.setState({isLoading: true});
        Animated.timing(this.buttonAnimated, {
          toValue: 1,
          duration: 100,
          easing: Easing.linear,
        }).start();
    }

    render() {
        return (
            <View >
                <WhisperListPanel></WhisperListPanel>
            </View>
        );
    }
}
