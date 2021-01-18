import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Alert   } from 'react-native';
import Logo from "./Logo";
import Array from './Helper'


export default class Login extends Component{
  constructor(){
    super()
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state={
      Email:"",
      counter:0,
      EmailValidate:true,
      Password:"",
      PasswordValidate:true
    }
  }
  componentDidMount(){
    this.forceUpdateHandler()
  }
  forceUpdateHandler(){
    this.forceUpdate();
  };
  onCheck(){
    for(var i=0;i<Array.length;i++){
      if(Array[i].Email==this.state.Email&& Array[i].Password==this.state.Password){
        this.props.navigation.navigate("HomePage")
      }else{
        alert('Please check once Email and Password');
        
      }
    }

  }
  validate(text,type){
    console.log("type",type)
 var email=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
 
  
   if(type=='Email'){

     if(email.test(text)){
     this.setState({Email:text,EmailValidate:true})
     }else{
       this.setState({EmailValidate:false})
     }
   }else if(type=='Password'){
    if(text.length>4){
      this.setState({Password:text,PasswordValidate:true})
    }else{
    this.setState({PasswordValidate:false})
    }
   }
 }
    render(){
  return (
   
    <View style={styles.container}>
   <Logo/>
<View>
 
<Text style={{color:'black',fontSize:16,paddingLeft:20}}>Enter the Email</Text>
<TextInput style={[styles.InputBox,!this.state.EmailValidate?styles.error:null]}
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder='Email'
      onChangeText={(text)=>this.validate(text,'Email')}
      placeholderTextColor='#ffffff'/>
      <Text style={{color:'black',fontSize:16,paddingLeft:20}}>Enter the Password</Text>
       <TextInput style={[styles.InputBox,!this.state.PasswordValidate?styles.error:null]}
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder='Password'
      maxLength={10}
      onChangeText={(text)=>this.validate(text,'Password')}
      secureTextEntry={true}
      placeholderTextColor='#ffffff'/>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() =>this.onCheck()}>Login</Text>
      </TouchableOpacity>
</View>
   <View style={styles.signUpTextCont}>
     <Text style={styles.signUpText}>Don't have a account yet ?</Text>
       <Text style={styles.signupButton} onPress={()=>this.props.navigation.navigate('Signup')}>Signup</Text>
   </View>
    </View>
    
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpTextCont:{
      flex:1,
      //alignItems:'center',
      justifyContent:'center',
      marginVertical:16,
      flexDirection:'row',
      marginBottom:10
  },
  signUpText:{
    color:'rgba(255,255,2550.6)',
    fontSize:16
  },
  signupButton:{
      color:'#ffffff',
      fonSize:16,
      fontWeight:'500',
      alignItems:'center'
  },
  InputBox:{
    widh:300,
    height:50,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:10
},
error:{
  borderColor:'red',
  borderWidth:3
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
    
}

 
});
