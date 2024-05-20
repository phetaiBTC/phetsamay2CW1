import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pinimg.com/736x/d0/18/8d/d0188d1799fc36f3ee3b9607e0f502f5.jpg" }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{color:"red",fontSize:20}}>Mr Phetsamay Phothor 2cw1</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
