import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
import { Loop, Stage } from 'react-game-kit/native';

import MainButton from '../reusables/MainButton';

import ContainerStyles from '../../../styles/ContainerStyles';

export default class Game extends Component {
  static navigationOptions = {
    title: <Image style={ContainerStyles.headerLogoStyle} source={require('./img/logo.png')} />,
    headerStyle: { backgroundColor: '#0060A4' },
    headerTitleStyle: { alignSelf: 'center' },
  }

  render() {
    return (
      <View style={ContainerStyles.container}>
        <Image source={require('./img/title.png')} />
        <View>
          {/* <Loop>
            <Stage height={400} width={400}>
              // Game specific components go here 
            </Stage>
          </Loop> */}
        </View>

      </View>
    )
  }
}


AppRegistry.registerComponent('Game', () => Game);