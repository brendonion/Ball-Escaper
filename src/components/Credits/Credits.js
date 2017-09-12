import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableNativeFeedback } from 'react-native';
import MainButton from '../reusables/MainButton';

import ContainerStyles from '../../../styles/ContainerStyles';

export default class Credits extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: '#0060A4' },
  }

  handleView(view) {
    this.props.navigation.navigate(view);
  }

  render() {
    return (
      <View style={ContainerStyles.container}>
        <Text style={ContainerStyles.text}>Made by Brendan Walker</Text>
      </View>
    )
  }
}


AppRegistry.registerComponent('Credits', () => Credits);
