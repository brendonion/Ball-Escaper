import React, { Component, PropTypes } from 'react';
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
      playerX: 50,
      playerY: 50,
      angle: 0,
      move: false,
    }
  }

  static navigationOptions = {
    title: <Image style={ContainerStyles.headerLogoStyle} source={require('./img/logo.png')} />,
    headerStyle: { backgroundColor: '#0060A4' },
    headerTitleStyle: { alignSelf: 'center' },
  }
  
  componentDidMount() {
    let framesPerSecond = 30;
    this.timerID = setInterval(() => {
      this.movePlayer();
    }, 1000/framesPerSecond);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  setAngle(angle, move) {
    this.setState({angle: angle, move: move});
  }

  movePlayer() {
    let angle = Math.ceil(this.state.angle);
    console.log('angle: ', angle);
    let newX = this.state.playerX;
    let newY = this.state.playerY;
    if (this.state.move) {
      if (angle >= -105 && angle <= -75) {
        // UP
        this.setState({playerY: newY -= 3});
      } else if (angle) {
        
      } else if (angle <= 105 && angle >= 75) {
        // DOWN
        this.setState({playerY: newY += 3});
      } else if (angle <= 15 && angle >= -15) {
        // RIGHT
        this.setState({playerX: newX += 3});
      } else if ((angle <= -165 && angle >= -179) || (angle <= 180 && angle >= 165)) {
        // LEFT
        this.setState({playerX: newX -= 3})
      }
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
        <Joystick 
          handleMovement={(angle, move) => this.setAngle(angle, move)}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('Game', () => Game);