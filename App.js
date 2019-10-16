
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
        >
          <MapView.Marker
            coordinate={{
              latitude: 40.317521,
              longitude: -112.004766
            }}
            title={"Our Home"}
          />
          <MapView.Marker
            coordinate={{
              latitude: 40.573786,
              longitude: -111.907039
            }}
            title={"Paul Mitchell"}
            description={"Work"}
          />
        </MapView>

      </View>
    );
  }
}


