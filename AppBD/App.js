/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  YellowBox
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import AppRouter from './src/navigation/index';

export default class App extends Component {
  render() {
    console.ignoredYellowBox = ['Remote debugger'];
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    return (
      <Provider store={store}>
        <AppRouter
        />
      </Provider>
    );
  }
}


