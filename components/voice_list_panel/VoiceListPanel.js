import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

import SlidingPanel from 'react-native-sliding-up-down-panels';


export default class VoiceListPanel extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <SlidingPanel
            headerLayoutHeight = {100}
            headerLayout = { () =>
                <View style={styles.headerLayoutStyle}>
                  <Text style={styles.commonTextStyle}>List of Whispers</Text>
                </View>
            }
            slidingPanelLayout = { () =>
                <View style={styles.slidingPanelLayoutStyle}>
                  <Text style={styles.commonTextStyle}>TODO: Scroll View</Text>
                </View>
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyViewStyle: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  headerLayoutStyle: {
    width, 
    height: 100, 
    backgroundColor: '#E84361', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  slidingPanelLayoutStyle: {
    width, 
    height, 
    backgroundColor: '#000000', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  commonTextStyle: {
    color: 'white', 
    fontSize: 18,
  },
});