import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
import { Loop, Stage } from 'react-game-kit/native';

import MainButton from '../reusables/MainButton';
import Joystick from '../reusables/Joystick';
import Player from './Player';
import Enemy from './Enemy';

import ContainerStyles from '../../../styles/ContainerStyles';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerX: 140,
      playerY: 140,
      enemyX: Math.floor(Math.random() * 300),
      enemyY: Math.floor(Math.random() * 300),
      angle: 0,
      move: false,
      direction: '',
      seconds: 1,
      enemies: 1,
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
      this.handleLimit();
      this.moveEnemy();
    }, 1000/framesPerSecond);
    this.secondsID = setInterval(() => {
      this.count();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.secondsID);
  }

  count() {
    let seconds = this.state.seconds;
    let enemyAmount = this.state.enemies;
    this.setState({seconds: seconds += 1});
    if (this.state.seconds % 15 == 0) {
      this.setState({enemies: enemyAmount += 1});
    }
  }

  setAngle(angle, move) {
    this.setState({angle: angle, move: move});
  }

  movePlayer() {
    let angle = Math.ceil(this.state.angle);
    let speed = 5;
    let newX = this.state.playerX;
    let newY = this.state.playerY;
    if (this.state.move) {
      if (angle >= -112.5 && angle < -67.5) {
        this.setState({playerY: newY -= speed, direction: 'UP'});
      } else if (angle >= -67.5 && angle < -22.5) {
        this.setState({playerX: newX += speed, playerY: newY -= speed, direction: 'UP RIGHT'});
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

  moveEnemy() {
    let speed = 5;
    let playerX = this.state.playerX;
    let playerY = this.state.playerY;
    let enemyX = this.state.enemyX;
    let enemyY = this.state.enemyY;
    let dx = playerX - enemyX;
    let dy = playerY - enemyY;
    let length = Math.sqrt(dx * dx + dy * dy);
    if (length) {
      dx /= length;
      dy /= length;
    }
    this.setState({enemyX: enemyX += dx * 3, enemyY: enemyY += dy * 3});
  }

  handleLimit() {
    let newX = this.state.playerX;
    let newY = this.state.playerY;
    if (newY >= 290) {
      this.setState({playerY: newY -= 5, move: false});
    } else if (newY <= 0) {
      this.setState({playerY: newY += 5, move: false});
    } else if (newX >= 290) {
      this.setState({playerX: newX -= 5, move: false});
    } else if (newX <= 0) {
      this.setState({playerX: newX += 5, move: false});
    }
  }

  render() {
    return (
      <View style={ContainerStyles.container}>
        <Image source={require('./img/title.png')} />
        <Text style={ContainerStyles.countdown}>{this.state.seconds}</Text>
        <View style={ContainerStyles.game}>
          <Player 
            playerX={this.state.playerX}
            playerY={this.state.playerY}
          />
          <Enemy
            enemyX={this.state.enemyX}
            enemyY={this.state.enemyY}
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