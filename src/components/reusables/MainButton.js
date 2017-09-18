import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';

import ButtonStyles from '../../../styles/ButtonStyles';

const MainButton = (props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => props.onPress(props.view)}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View style={ButtonStyles.mainButton}>
        <Text style={ButtonStyles.text}>{props.text}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

export default MainButton
