import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../components/Home/Home';
import Game from '../components/Game/Game';
import Credits from '../components/Credits/Credits';

export const Routes = StackNavigator({
  Home: {
    screen: Home
  },
  Game: {
    screen: Game
  },
  Credits: {
    screen: Credits
  },
});