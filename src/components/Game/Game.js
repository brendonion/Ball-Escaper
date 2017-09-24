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
      playerX: 140,
      playerY: 140,
      angle: 0,
      move: false,
      direction: '',
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
    let speed = 5;
    let newX = this.state.playerX;
    let newY = this.state.playerY;
    this.handleLimit();
    if (this.state.move) {
      if (angle >= -112.5 && angle < -67.5) {
        this.setState({playerY: newY -= speed, direction: 'UP'});
      } else if (angle >= -67.5 && angle < -22.5) {
        this.setState({playerX: newX += speed, playerY: newY -= speed, direction: 'DOWN'});
      } else if (angle >= -157.5 && angle < -112.5) {
        this.setState({playerX: newX -= speed, playerY: newY -= speed, direction: 'UP LEFT'});
      } else if (angle >= 67.5 && angle < 112.5) {
        this.setState({playerY: newY += speed, direction: 'DOWN'});
      } else if (angle >= 22.5 && angle < 67.5) {
        this.setState({playerX: newX += speed, playerY: newY += speed, direction: 'DOWN RIGHT'});
      } else if (angle >= 112.5 && angle < 157.5) {
        this.setState({playerX: newX -= speed, playerY: newY += speed, direction: 'DOWN LEFT'});
      } else if (angle >= -22.5 && angle < 22.5) {
        this.setState({playerX: newX += speed, direction: 'RIGHT'});
      } else if ((angle >= 157.5 && angle < 180) || (angle >= -180 && angle < -157.5)) {
        this.setState({playerX: newX -= speed, direction: 'LEFT'});
      }
    }
  }

  handleLimit() {
    let newX = this.state.playerX;
    let newY = this.state.playerY;
    if (newY >= 290) {
      this.setState({playerY: newY -= 15, move: false});
    } else if (newY <= 0) {
      this.setState({playerY: newY += 5, move: false});
    } else if (newX >= 290) {
      this.setState({playerX: newX -= 15, move: false});
    } else if (newX <= 0) {
      this.setState({playerX: newX += 5, move: false});
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