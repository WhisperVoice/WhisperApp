import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View
  } from 'react-native';
import VoiceListPanel from '../voice_list_panel/VoiceListPanel'

export default class VoiceMenu extends Component {
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
                <VoiceListPanel></VoiceListPanel>
            </View>
        );
    }
}
