
//import * as React from 'react';
import React, {useState} from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity  } from 'react-native';

import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
      const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
 return(
   <View style={styles.container} >
   <Image style={styles.image} source={require('./assets/snack-icon.png')}/>
      <View style = {styles.inputView}>
        <TextInput style={styles.TextInput} placeholder="email" placeholderTextColor="#003f5c" secureTextEntry={true} onChangeText={(email)=> setEmail(email)}/>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput} placeholder="password" placeholderTextColor="#003f5c" secureTextEntry={true} onChangeText={(password)=> setPassword(password)}/>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
  image:{
    marginBottom:40
  },
  inputView: {
   backgroundColor: "#FFC0CB",
   borderRadius: 30,
   width: "70%",
   height: 45,
   marginBottom: 20,
   alignItems: "center",
 },
 
 TextInput: {
   height: 50,
   flex: 1,
   padding: 10,
   marginLeft: 20,
 },
 forgot_button: {
  height: 30,
  marginBottom: 30,
},
loginBtn:
 {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#FF1493",
 }
})