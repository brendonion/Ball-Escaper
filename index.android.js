import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import App from './src/components/App';

export default class index extends Component {
  render() {
    return (
      <App style={index} />
    )
  }
}

AppRegistry.registerComponent('myapp', () => index);
