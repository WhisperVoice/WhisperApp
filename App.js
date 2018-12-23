import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';

import Login from './components/login/Login';
import Home from './components/home/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
	      <Stack key="root">
	        <Scene key="loginScreen"
	          component={Login}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="homeScreen"
	          component={Home}
	          animation='fade'
	          hideNavBar={true}
	        />
	      </Stack>
	    </Router>
    );
  }
}
