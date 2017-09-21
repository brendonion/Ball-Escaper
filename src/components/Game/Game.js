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
    let speed = 3;
    let newX = this.state.playerX;
    let newY = this.state.playerY;
    if (this.state.move) {
      if (angle >= -112.5 && angle < -67.5) {
        // UP
        this.setState({playerY: newY -= speed});
      } else if (angle >= -67.5 && angle < -22.5) {
        // UP RIGHT
        this.setState({playerX: newX += speed, playerY: newY -= speed});
      } else if (angle >= -157.5 && angle < -112.5) {
        // UP LEFT
        this.setState({playerX: newX -= speed, playerY: newY -= speed});
      } else if (angle >= 67.5 && angle < 112.5) {
        // DOWN
        this.setState({playerY: newY += speed});
      } else if (angle >= 22.5 && angle < 67.5) {
        // DOWN RIGHT
        this.setState({playerX: newX += speed, playerY: newY += speed});
      } else if (angle >= 112.5 && angle < 157.5) {
        // DOWN LEFT
        this.setState({playerX: newX -= speed, playerY: newY += speed});
      } else if (angle >= -22.5 && angle < 22.5) {
        // RIGHT
        this.setState({playerX: newX += speed});
      } else if ((angle >= 157.5 && angle < 180) || (angle >= -180 && angle < -157.5)) {
        // LEFT
        this.setState({playerX: newX -= speed});
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