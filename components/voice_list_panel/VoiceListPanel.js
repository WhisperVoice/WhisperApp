import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

import SlidingPanel from 'react-native-sliding-up-down-panels';
import WhisperAPIService from 'app/services/whisperapi.service';
import WhisperCard from '../shared_components/WhisperCard';


export default class VoiceListPanel extends Component {
  getListOfWhispers() {
    return WhisperAPIService.getWhispers();
  }

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
                  {
                    this.getListOfWhispers().map((whisper) => {
                      return <WhisperCard
                        title={whisper.title}
                        audio={whisper.audio}
                        listens={whisper.listens}
                        duration={whisper.duration}
                        location={whisper.location}
                      ></WhisperCard>
                    })
                  }
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