import React, { Component } from 'react';
import { Card } from 'react-native-elements'
import {
    Text,
    View
} from 'react-native';
import { StyleSheet } from "react-native"

export default class WhisperCard extends Component {

    render() {
        return (
            <Card containerStyle={styles.card} title={this.props.title}>
                <View>
                    <Text>{this.props.title}</Text>
                </View>
            </Card>
        )
    }
}

const styles = {
    card: {
        width: 1000
    }
};