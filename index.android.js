import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Home from './src/components/Home/Home';

export default class index extends Component {
  render() {
    return (
      <View style={styles.index}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  index: {
    height: '100%',
    backgroundColor: '#0078cd',
    elevation: 10,
  }
});

AppRegistry.registerComponent('myapp', () => index);
