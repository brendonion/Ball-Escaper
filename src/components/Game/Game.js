import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
import { Loop, Stage } from 'react-game-kit/native';
import { Dial } from 'react-native-dial'; 

import MainButton from '../reusables/MainButton';
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
    switch (angle) {
      case (Math.ceil(angle) % 45 == 0):
        return 'UP';
        break;
      case (Math.ceil(angle) % 90 == 0):
        return 'UP-RIGHT';
        break;
      case (Math.ceil(angle) % 135 == 0):
        return 'RIGHT';
        break;
      case (Math.ceil(angle) % 180 == 0): 
        return 'DOWN-RIGHT';
        break;
    }
  }

  // handle redraw here or something
  handleMovement(angle) {
    this.movePlayer(angle);
    let newX = this.state.playerX;
    let newY = this.state.playerY;
    console.log(a);
    console.log('playerX: ', this.state.playerX);
    console.log('playerY: ', this.state.playerY);
    switch (angle) {
      case (angle == 0 || a % 360 == 0): 
        newX = 0;
        newY = 0;
        this.setState({playerX: newX, playerY: newY});
        break;
      case (angle >= 10):
        newX = 0;
        newY = 0;
        this.setState({playerX: 10, playerY: 10});

        break;
      default:
        return;
    }
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
        <Dial 
          initialAngle={45}
          initialRadius={0}
          radiusMax={10}
          radiusMin={0}
          wrapperStyle={{backgroundColor: '#0060A4'}}
          onValueChange={(angle) => this.handleMovement(angle)} 
        />
      </View>
    )
  }
}

// {/* responderStyle={styles.responderStyle}
//           wrapperStyle={styles.wheelWrapper} */}

AppRegistry.registerComponent('Game', () => Game);