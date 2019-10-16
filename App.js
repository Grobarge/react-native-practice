import React, { Component } from 'react';

import Map from './Components/Map';
import LoginSignup from './Components/Login-Signup';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: { screen: LoginSignup },
  Map: { screen: Map },
});

const App = createAppContainer(MainNavigator);

export default App;


