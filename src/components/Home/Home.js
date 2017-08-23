import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
import MainButton from '../reusables/MainButton';

import HomeStyles from '../../../styles/HomeStyles';

export default class Home extends Component {
  render() {
    return (
      <View style={HomeStyles.container}>
        <Text style={HomeStyles.text}>Brendan Walker's</Text>
        <Image style={HomeStyles.title} source={require('./img/title.png')} />
        <Image style={HomeStyles.logo} source={require('./img/logo.png')} />
        <MainButton text={'START'} />
        <MainButton text={'Credits'} />
      </View>
    );
  }
}


AppRegistry.registerComponent('Home', () => Home);
