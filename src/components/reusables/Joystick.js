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
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
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
    console.log('x', this.state.pan.x._value);
    console.log('y', this.state.pan.y._value);
  }

  render() {
    let translateX = this.state.pan.x;
    let translateY = this.state.pan.y;
    let scale = this.state.scale;
    let imageStyle = {transform: [{translateX}, {translateY}, {rotate: '0deg'}, {scale}]};
    return (
      <View style={JoystickStyles.container}>
        <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
          <View style={JoystickStyles.stick} onTouchMove={() => this.handleControl()} />
        </Animated.View>
      </View>
    )
  }
}

export default Joystick