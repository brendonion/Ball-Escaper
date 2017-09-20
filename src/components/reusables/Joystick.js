import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  PanResponder, 
  Animated,
} from 'react-native';

import JoystickStyles from '../../../styles/JoystickStyles';

class Joystick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
  
      onPanResponderGrant: (e, gestureState) => {
        let x = this.state.pan.x._value;
        let y = this.state.pan.y._value;
        this.state.pan.setOffset({x: x, y: y});
        this.state.pan.setValue({x: 0, y: 0});
        Animated.spring(
          this.state.scale,
          { toValue: 1.1, friction: 3 }
        ).start();
      },
  
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
  
      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        this.state.pan.setValue({x: 0, y: 0});
        Animated.spring(
          this.state.scale,
          { toValue: 1, friction: 3 }
        ).start();
      }
    });
  }

  handleControl() {
    let x = this.state.pan.x._value;
    let y = this.state.pan.y._value;
    let r = 50;
    let angle = Math.atan2(y, x);
    let xx = r * Math.cos(angle);
    let yy = r * Math.sin(angle);
    if ((x * x + y * y) >= r * r) {
      this.state.pan.setValue({x: xx, y: yy});
    }
    let degrees = angle * 180 / Math.PI;
    this.props.handleMovement(degrees, true);
  }

  render() {
    let translateX = this.state.pan.x;
    let translateY = this.state.pan.y;
    let scale = this.state.scale;
    let imageStyle = {transform: [{translateX}, {translateY}, {rotate: '0deg'}, {scale}]};
    return (
      <View style={JoystickStyles.container}>
        <View style={JoystickStyles.joystickContainer}></View>
        <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
          <View 
            style={JoystickStyles.stick} 
            onTouchMove={() => this.handleControl()} 
            onTouchEnd={() => this.props.handleMovement(0, false)}
          />
        </Animated.View>
      </View>
    )
  }
}

export default Joystick