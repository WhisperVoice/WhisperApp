import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import SlidingPanel from 'react-native-sliding-up-down-panels';
import WhisperListPanelStyles from './WhisperListPanelStyles'
import WhisperCards from '../whisper_cards/WhisperCards'
export default class WhisperListPanel extends Component {
  render() {
    return (
      <View style={WhisperListPanelStyles.container}>
        
        <SlidingPanel
            headerLayoutHeight = {100}
            headerLayout = { () =>
                <View style={WhisperListPanelStyles.headerLayoutStyle}>
                  <Text style={WhisperListPanelStyles.commonTextStyle}>List of Whispers</Text>
                </View>
            }
            slidingPanelLayout = { () =>
                <View style={WhisperListPanelStyles.slidingPanelLayoutStyle}>
                  <WhisperCards></WhisperCards>
                </View>
            }
        />
      </View>
    );
  }
}