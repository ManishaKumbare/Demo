import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Logo extends Component{
    render(){
  return (
    <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> 
    <Text style={styles.logoText}>Welcome to my app</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoText:{
      marginVertical:15,
    fontSize:30,
    color:'rgba(255,255,255,0.7)',
},
tinyLogo: {
  width: 70,
  height: 70,
  marginLeft:100,
  alignItems:'center'
}
});
