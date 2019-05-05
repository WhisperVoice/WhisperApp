import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {
    Text,
    View
  } from 'react-native';
export default class WhisperCards extends Component {
  render() {
    return (

        <View>
            <Card>
                <CardTitle><Text>Special Title Treatment</Text></CardTitle>
                <CardText><Text>With supporting text below as a natural lead-in to additional content.</Text></CardText>
                <Button><Text>Go somewhere</Text></Button>
            </Card>
        </View>

         
   );
    }
  }
