import React, { Component } from 'react';
import { Button } from 'react-native';


export default class LoginSignup extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Map"
          onPress={() => navigate('Map')}
        />
      );
    }
  }