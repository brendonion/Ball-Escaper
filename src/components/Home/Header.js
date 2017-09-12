import React from 'react';
import { View, Image } from 'react-native';
import ContainerStyles from '../../../styles/ContainerStyles';

const Header = (props) => {
  return (
    <View style={ContainerStyles.headerContainer}>
      <Image style={ContainerStyles.headerTitleStyle} source={require('./img/title.png')} />
      <Image style={ContainerStyles.headerLogoStyle} source={require('./img/logo.png')} />
    </View>
  )
}

export default Header
