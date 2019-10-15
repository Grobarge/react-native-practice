// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';

// import Map from './Map';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });



// export default class App extends Component {
//   render() {
//     return (
//       <Map />
//       // <View style={styles.container}>
//       //   <Text style={styles.welcome}>Welcome to Gaje's First React Native App</Text>
//       //   <Text style={styles.instructions}>This hopefully will be pretty cool</Text>
//       //   {/* <Text style={styles.instructions}>To get started, edit App.js</Text>
//       //   <Text style={styles.instructions}>{instructions}</Text> */}
//       // </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          apikey={GOOGLE_MAPS_API_KEY}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 10 }}
          initialRegion={{
            latitude: 40.3916,
            longitude: -111.8508,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}