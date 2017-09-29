import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

import MainButton from '../reusables/MainButton';
import Joystick from '../reusables/Joystick';
import Player from './Player';
import Enemy from './Enemy';

import ContainerStyles from '../../../styles/ContainerStyles';

let enemyLocations = {
  enemyX0: Math.floor(Math.random() * 300),
  enemyY0: Math.floor(Math.random() * 300),
}

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerX: 140,
      playerY: 140,
      enemyX0: Math.floor(Math.random() * 300),
      enemyY0: Math.floor(Math.random() * 300),
      angle: 0,
      move: false,
      direction: '',
      seconds: 1,
      enemies: [],
      gameOver: false,
    }
  }

  static navigationOptions = {
    title: <Image style={ContainerStyles.headerLogoStyle} source={require('./img/logo.png')} />,
    headerStyle: { backgroundColor: '#0060A4' },
    headerTitleStyle: { alignSelf: 'center' },
  }
  
  componentDidMount() {
    let enemyArray = [<Enemy enemyX={this.state.enemyX0} enemyY={this.state.enemyY0} key={0} />];
    this.setState({enemies: enemyArray});
    let framesPerSecond = 30;
    this.timerID = setInterval(() => {
      this.movePlayer();
      this.handleLimit();
      this.moveEnemy();
    }, 1000 / framesPerSecond);
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
    let enemies = this.state.enemies;
    this.setState({seconds: seconds += 1});
    if (this.state.seconds % 15 == 0) {
      let newEnemyX = Math.floor(Math.random() * 300);
      let newEnemyY = Math.floor(Math.random() * 300);
      let newXKey = `enemyX${enemies.length}`;
      let newYKey = `enemyY${enemies.length}`;
      enemies.push(<Enemy enemyX={newEnemyX} enemyY={newEnemyY} key={enemies.length}/>);
      this.setState({enemies: enemies, [newXKey]: newEnemyX, [newYKey]: newEnemyY});
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
    let speed = 3;
    let enemies = this.state.enemies;
    let newEnemies = [];
    let playerX = this.state.playerX;
    let playerY = this.state.playerY;
    let enemyX;
    let enemyY;
    let dx;
    let dy;
    let length;
    for (var i = 0; i < enemies.length; i++) {
      enemyX = this.state[`enemyX${i}`];
      enemyY = this.state[`enemyY${i}`];
      dx = playerX - enemyX;
      dy = playerY - enemyY;
      length = Math.sqrt(dx * dx + dy * dy);
      if (length) { dx /= length; dy /= length; }
      this.setState({[`enemyX${i}`]: enemyX += dx * speed, [`enemyY${i}`]: enemyY += dy * speed});
      newEnemies.push(<Enemy enemyX={enemyX} enemyY={enemyY} key={i} />);
      if (length <= 3) {
        this.handleGameOver();
      }
    }
    this.setState({enemies: newEnemies});
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
  
  handleGameOver() {
    clearInterval(this.timerID);
    clearInterval(this.secondsID);
    this.setState({gameOver: true});
  }

  handleReset() {
    let enemyX0 = Math.floor(Math.random() * 300);
    let enemyY0 = Math.floor(Math.random() * 300);
    this.setState({
      seconds: 1, 
      enemyX0: enemyX0,
      enemyY0: enemyY0,
      enemies: [<Enemy enemyX={enemyX0} enemyY={enemyY0} key={0} />], 
      playerX: 140,
      playerY: 140,
      gameOver: false
    });
    let framesPerSecond = 30;
    this.timerID = setInterval(() => {
      this.movePlayer();
      this.handleLimit();
      this.moveEnemy();
    }, 1000 / framesPerSecond);
    this.secondsID = setInterval(() => {
      this.count();
    }, 1000);
  }
  
  render() {
    return (
      <View style={ContainerStyles.container}>
        <Image source={require('./img/title.png')} />
        <Text style={ContainerStyles.countdown}>{this.state.seconds}</Text>
        {!this.state.gameOver 
        ?
        <View style={ContainerStyles.game}>
          <Player 
            playerX={this.state.playerX}
            playerY={this.state.playerY}
          />
          {this.state.enemies}
        </View>
        :
        <View style={ContainerStyles.gameOverContainer}>
          <Text style={ContainerStyles.largeText}>GAME OVER</Text>
          <Text>You lasted {this.state.seconds} seconds</Text>
        </View>
        }
        {this.state.gameOver &&
          <View>
            <Text style={ContainerStyles.playAgain}>Play Again?</Text>
            <MainButton text={'START'} onPress={() => this.handleReset()} />
          </View>
        } 
        <Joystick 
          handleMovement={(angle, move) => this.setAngle(angle, move)}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('Game', () => Game);