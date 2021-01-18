import React from 'react'
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Array from './Helper'

export default class SignUp extends React.Component {
  constructor(){
    super()
    this.state={
      username:"",
      usernameValidate:true,
      Email:"",
      emailValidate:true,
      Password:"",
      PasswordValidate:true,
      phone_number:"",
      phone_validate:true

    }
  }
 
  validate(text,type){
   
 var alpha=/^[a-zA-Z]+$/
 var phone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
// var password= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
 var email=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

 if(type=='username'){
   if(alpha.test(text)){
     this.setState({username:text,usernameValidate:true})
   }else{
     this.setState({usernameValidate:false})
   }
 }
  else if(type=='email'){
   if(email.test(text)){
     this.setState({email:text,emailValidate:true})
   }else{
     this.setState({emailValidate:false})
   }
     
   }else if(type=='Password'){
    if(text.length>4){
      this.setState({Password:text,PasswordValidate:true})
    }else{
    this.setState({PasswordValidate:false})
    }
   }else if(type=='phone_number'){
    if(phone.test(text)){
      this.setState({phone_number:text,phone_validate:true})
    }else{
      this.setState({phone_validate:false})
    }
   }

 }
  signUp =  () => {
    const { username, Password, email, phone_number } = this.state
  
      // here place your signup logic
      const obj = {'Email':this.state.email, 'Password':this.state.Password};
      Array.push(obj)
      this.props.navigation.navigate("HomePage")
    
  
  }
 
  render() {
    return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
       <Text style={{color:'black',fontSize:16,textAlign:'center'}}>Enter the username</Text>
        <TextInput
          style={[styles.InputBox,!this.state.usernameValidate?styles.error:null]}
          placeholder='Username'
          autoCapitalize="none"
          maxLength={30}
          placeholderTextColor='white'
          onChangeText={text => this.validate(text,'username')}
        />
        <Text style={{color:'black',fontSize:16,textAlign:'center'}}>Enter the Email</Text>
        <TextInput
          style={[styles.InputBox,!this.state.emailValidate?styles.error1:null]}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={text => this.validate(text,'email')}
        />
         <Text style={{color:'black',fontSize:16,textAlign:'center'}}>Enter the password</Text>
           <TextInput
          style={[styles.InputBox,!this.state.PasswordValidate?styles.error2:null]}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          maxLength={10}
          placeholderTextColor='white'
          onChangeText={text => this.validate(text,'Password')}
        />
         <Text style={{color:'black',fontSize:16,textAlign:'center'}}>Enter the Phone number</Text>
        <TextInput
          style={[styles.InputBox,!this.state.phone_validate?styles.error3:null]}
          placeholder='Phone Number'
          maxLength={10}
          placeholderTextColor='white'
          keyboardType="phone-pad"
          onChangeText={text => this.validate(text,'phone_number')}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
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
  error1:{
    borderColor:'red',
    borderWidth:3
  },
  error2:{
    borderColor:'red',
    borderWidth:3
  },
  error3:{
    borderColor:'red',
    borderWidth:3
  },
  container: {
    flex: 1,
    backgroundColor:'#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
