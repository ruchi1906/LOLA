import React, {Component} from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Login from './components/InitialScreen/Login';
import Register from './components/InitialScreen/Register';
import ForgotPassword from './components/InitialScreen/ForgotPassword';

export default class Main extends Component {

  render() {
    return <Stack/>
  }
}

const Stack = StackNavigator({
  Login: {
    screen: Login,
    title: Login,
    navigationOptions: {
      header: null
    }
  },

  Register: {
    screen: Register,
    title: Register,
    navigationOptions: {
      header: null
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    title: ForgotPassword,
    navigationOptions: {
      header: null
    }
  }
}, {initialRouteName: 'Login'});
