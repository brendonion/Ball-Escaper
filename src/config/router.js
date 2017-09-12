import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../components/Home/Home';
import Credits from '../components/Credits/Credits';

export const Routes = StackNavigator({
  Home: {
    screen: Home
  },
  Credits: {
    screen: Credits
  },
});