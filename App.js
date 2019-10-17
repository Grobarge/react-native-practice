import React, { Component } from 'react';

import Map from './Components/Map';
import Main from './Components/Main';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: Main},
  Map: { screen: Map },
});

const App = createAppContainer(MainNavigator);

export default App;


