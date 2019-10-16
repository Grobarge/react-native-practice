import React, { Component } from 'react';

import Map from './Components/Map';
import LoginScreen from './Components/LoginScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: { screen: LoginScreen },
  Map: { screen: Map },
});

const App = createAppContainer(MainNavigator);

export default App;


