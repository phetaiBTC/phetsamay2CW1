import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log("click");
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pinimg.com/736x/d0/18/8d/d0188d1799fc36f3ee3b9607e0f502f5.jpg" }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.text}>Mr Phetsamay Phothor 2cw1</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Click here!</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.containerScro}>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
        <Text style={styles.text}>Hello world</Text>
      </ScrollView>


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
  text: {
    fontSize: 25,
    color: "blue",
    textAlign:"center"
  },
  containerScro:{
    backgroundColor:"red", 
    width:200,
    justifyContent:"center",
    

  }
});
