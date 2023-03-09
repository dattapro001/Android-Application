import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import {
    getAuth, 
    signInWithEmailAndPassword,
  }from 'firebase/auth'

  import { initializeApp } from "firebase/app";
import Registration from './Registration';
import MainScreen from './MainScreen';

  const image = {uri : 'https://img.freepik.com/free-vector/security-concept-illustration_114360-497.jpg?w=740&t=st=1677405363~exp=1677405963~hmac=336ff22f14b638709a251e459418271794c662259bff8d95456e79b3e5959539'}

  const firebaseConfig = {
    apiKey: "AIzaSyA2sI-1M0skKYLN8JPRHH1hWMuBafMDFd8",
    authDomain: "fir-auth-80d83.firebaseapp.com",
    projectId: "fir-auth-80d83",
    storageBucket: "fir-auth-80d83.appspot.com",
    messagingSenderId: "169019440215",
    appId: "1:169019440215:web:b1361b04fbeea01dcbb712"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const Logo = ({navigation}) => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  // useEffect(() =>{
  //  const unsubscribe = auth.onAuthStateChanged(user =>{
  //   if(user) {
  //     //  navigation.navigate('HomeScreen')
  //   }
  //  })

  //  return unsubscribe
  // }, [])

  const LoginValidation = () => {
    signInWithEmailAndPassword(auth, email, password)
         .then(cred => {
           alert
           ('Succesfully Login', cred.user);
           navigation.navigate("Main Screen")
               })
               .catch(error => console.log(error.message)
              )
  }
    return(
        <ImageBackground source={image} style ={styles.images}>
       <View
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <Text>   Email</Text>
      
        <TextInput
          placeholder="mug007@gmail.com"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <Text>  Password</Text>
        <TextInput
          placeholder="Minimun 6 latter"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity     

                       onPress={()=>{
                        LoginValidation();
                      
                       }}
  
            style={styles.button} >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
         
      </View>
      </View>
      </ImageBackground>
  )
    }

    const stack = createNativeStackNavigator()

export default function LoginScreen() {
      return(
    <stack.Navigator>
        <stack.Screen name = 'LoginScreen'component={Logo} options = {{headerShown : true}} />
        <stack.Screen options={{ headerShown: false }} name="FrontScreen" component={MainScreen} />
        <stack.Screen name = 'Registration'component={Registration} options = {{headerShown : false}} />
        <stack.Screen name = 'Main Screen'component={MainScreen} options = {{headerShown : false}} />
    </stack.Navigator>
      )
}

const styles = StyleSheet.create({
  container: {
    height: 320,
    marginTop : 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop:220,
    width: '80%'
  },
  input: {
    
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    margin: -30,
    marginBottom : 100,
    backgroundColor: '#66cdaa',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  images:{
    height: 340,
    weidth : '40%',
    marginBottom:500,
    
  }
})