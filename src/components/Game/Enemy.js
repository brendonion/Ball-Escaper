import React from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

const Enemy = (props) => {
  return (
    <View style=
      {{
        position: 'absolute', 
        width: 25, 
        height: 25, 
        borderRadius: 500,
        backgroundColor: '#841584',
        transform: [{translateX: props.enemyX}, {translateY: props.enemyY}]
      }}
    >
    </View>
  )
}

export default Enemy