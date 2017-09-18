import React from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

const Player = (props) => {
  return (
    <View style=
      {{
        position: 'absolute', 
        width: 25, 
        height: 25, 
        borderRadius: 500,
        backgroundColor: '#97efdf',
        top: props.playerX,
        left: props.playerY,
      }}
    >
    </View>
  )
}

export default Player