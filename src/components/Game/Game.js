import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
import { Loop, Stage } from 'react-game-kit/native';

import MainButton from '../reusables/MainButton';
import Joystick from '../reusables/Joystick';
import Player from './Player';

import ContainerStyles from '../../../styles/ContainerStyles';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerX: '50%',
      playerY: '50%',
    }
  }

  static navigationOptions = {
    title: <Image style={ContainerStyles.headerLogoStyle} source={require('./img/logo.png')} />,
    headerStyle: { backgroundColor: '#0060A4' },
    headerTitleStyle: { alignSelf: 'center' },
  }

  //handle movement here
  movePlayer(angle) {
  //   switch (angle) {
  //     case (angle > ??):
  //       return 'UP';
  //       break;
  //   }
  }

  // handle redraw here or something
  draw(angle) {
    this.movePlayer(angle);
    let newX = this.state.playerX;
    let newY = this.state.playerY;
  }

  render() {
    return (
      <View style={ContainerStyles.container}>
        <Image source={require('./img/title.png')} />
        <View style={ContainerStyles.game}>
          <Player 
            playerX={this.state.playerX}
            playerY={this.state.playerY}
          />
        </View>
        <Joystick />
      </View>
    )
  }
}

AppRegistry.registerComponent('Game', () => Game);