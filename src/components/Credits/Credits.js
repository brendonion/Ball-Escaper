import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

import ContainerStyles from '../../../styles/ContainerStyles';

export default class Credits extends Component {
  static navigationOptions = {
    title: <Image style={ContainerStyles.headerLogoStyle} source={require('./img/logo.png')} />,
    headerStyle: { backgroundColor: '#0060A4' },
    headerTitleStyle: { alignSelf: 'center' },
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
