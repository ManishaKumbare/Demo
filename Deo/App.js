import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
//import Routes from "./Routes";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';
import Login from "./Login";
import Signup from './Signup';
import HomePage from "./HomePage"


export default function App() {
  const Stack=createStackNavigator();
  return (
 <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name='Login' component={Login}/>
     <Stack.Screen name='Signup' component={Signup}/>
     <Stack.Screen name="HomePage" component={HomePage}/>
   </Stack.Navigator>
 </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
