import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';

import SignInScreen from './screens/SignInScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginSceen';
import Map from './screens/Map';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);


function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false
    }
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require('./assets/bg.jpg')]);


    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <AppNavigator />
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  SignInScreen: SignInScreen,
  Map: Map

});

const AppNavigator = createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

