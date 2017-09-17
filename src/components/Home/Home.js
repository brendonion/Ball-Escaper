import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';

import MainButton from '../reusables/MainButton';

import ContainerStyles from '../../../styles/ContainerStyles';

export default class Home extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: '#0060A4' },
  }

  handleView(view) {
    this.props.navigation.navigate(view);
  }

  render() {
    return (
      <View style={ContainerStyles.container}>
        <Text style={ContainerStyles.text}>Brendan Walker's</Text>
        <Image style={ContainerStyles.title} source={require('./img/title.png')} />
        <Image style={ContainerStyles.logo} source={require('./img/logo.png')} />
        <MainButton text={'START'} onPress={() => this.handleView('Game')} />
        <MainButton text={'Credits'} onPress={() => this.handleView('Credits')} />
      </View>
    )
  }
}


AppRegistry.registerComponent('Home', () => Home);
