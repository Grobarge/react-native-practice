import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Main extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Sign in with Facebook
          </Text>
        
      </View>
    );
  }
}












  //   static navigationOptions = {
  //     title: 'Welcome',
  //   };
  //   render() {
  //     const {navigate} = this.props.navigation;
      
  //     return (
  //       <View >  
       
  //        <Button
  //         title="Go to Map"
  //         onPress={() => navigate('Map')}
  //         />
  //       </View>
        
  //     );
  //   }
  // }

