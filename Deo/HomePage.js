import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,ImageBackground,Alert } from 'react-native';
import Logo from "./Logo";
const image = { uri: "https://reactjs.org/logo-og.png" };
import Array from './Helper'
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default class HomePage extends Component{
 
  
    render(){
  return (
    <View style={styles.container}>
   <ImageBackground source={image} style={styles.image}>
    <View>
        <Text style={{color:'white',fontSize:20,marginLeft:10}}>Welcome To Our Home Page</Text>
        <View style={{color:'white',fontSize:16,marginLeft:5}}>
            <Text syle={{color:'white',fontSize:10}}>Our Login Users are :</Text>
    {Array.map((item, i) =>{
                            return(
                                <option key={i}>
                                {item.Email}  {item.Password}
                                </option>
                            )
                        }
    )
                    }
                    </View>
                     <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() =>this.props.navigation.navigate('Login')}>Login Again</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
  );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      button:{
        backgroundColor:'#1c313a',
        width:230,
        height:50,
        borderRadius:25,
        marginVertical:10,
        paddingVertical:13
     },
     buttonText:{
         fontSize:16,
         marginLeft:90,
         fontWeight:'30',
         color:'white',
         
     },
      text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
      }  


 
});
