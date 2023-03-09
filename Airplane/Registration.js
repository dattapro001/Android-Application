import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {
    getAuth, 
    createUserWithEmailAndPassword,
  }from 'firebase/auth'
  import {collection, addDoc , getFirestore,query, where , onSnapshot } from 'firebase/firestore'

  
import { initializeApp } from "firebase/app";
import LoginScreen from './LoginScreen';

const image = { uri : 'https://img.freepik.com/free-vector/list-concept-illustration_114360-1320.jpg?w=740&t=st=1677406406~exp=1677407006~hmac=e080a38f27b038b0850e0cf6954b266735c668a293a4528f36cb739257fdcb27'}
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
const auth = getAuth(app);
const Db = getFirestore();
const collRef = collection(Db , 'profile');


 export default function Registration({navigation}){
const [AccountDetails,setAccountDetails]= useState([]);

const Regi=()=>{
  const [txt1 , setText1] = useState('');
  const [txt2 , setText2] = useState('');
  const [txt3 , setText3] = useState('');
  const [txt4 , setText4] = useState('');
  const [txt5 , setText5] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const RQuiery = query(collRef, where ('Email' , '==' , email ) 
        )
       

  const addo = () =>{
    RegiValidation();
    addDoc(collRef,{
      Email : email,
      password : password,
      UserName : txt1,
      FristName : txt2,
      LastName : txt3,
      DateOfBirth : txt4,
      PassPortNumber : txt5,   
     })
   .then(()=>{
   })
  }
  
  const Rsanp =()=>{
    onSnapshot(RQuiery,(snapshot)=>{
      snapshot.docs.forEach((doc)=>{
      setAccountDetails(oldArray=>[...oldArray, doc.data()]);
      })
      console.log(AccountDetails);
})
      
  }
  
  const RegiValidation = () => {  
  
    createUserWithEmailAndPassword(auth, email, password)
         .then(cred => { 
          addo();
           alert('Succesfully Register.Now Login with email and password', cred.user);
           navigation.navigate('LoginScreen');
               })
               .catch(error => console.log(error.message)
              )
  }
    const ALLREGEX =()=>{

    const UNameregEX = /^[ a-z A-Z 0-9 ]{2,12}$/;
    if(UNameregEX.test(txt1)){
     console.log('Valid name');
    }
   else if(!UNameregEX.test(txt1) && txt1 != ""){
      alert("Invalid Name ");
   }
    const FNameregEX = /^[a-z A-Z]{2,12}$/;
    if(FNameregEX.test(txt2)){
      console.log('Valid Date of Birth');
    }
   else if(!FNameregEX.test(txt2) && txt2 != ""){
      alert("Invalid Date Of Birth ");
   }

    const LNameregEX = /^[a-z A-Z]{2,12}$/;
    if(LNameregEX.test(txt3)){
      console.log('Valid Password');
    }
   else if(!LNameregEX.test(txt3) && txt3 != ""){
      alert("Invalid PassPort Number ");
   }

    const DOBregEX = /^[0-9/-]{2,30}$/;
    if(DOBregEX.test(txt4)){
      console.log('Valid Date Of Birth');
    }
   else if(!DOBregEX.test(txt4) && txt4 != ""){
      alert("Invalid Date Of Birth ");
   }
  
    const PassregEX = /^[0-9-/]{2,20}$/;
    if(PassregEX.test(txt5)){
      console.log('Valid password');
    }
   else if(!PassregEX.test(txt5) && txt5 != ""){
      alert("Invalid password ");
   }

    const EmailregEX = /^[a-zA-Z0-9]+@[a-z]+.[a-z]{2,12}$/;
    if(EmailregEX.test(email)){
      console.log('Valid Email');
    }
   else if(!EmailregEX.test(email) && email != ""){
      alert("Invalid email ");
   }
  
}
    return(
        <ImageBackground source={image} style ={styles.images}>
       <View
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <Text> username</Text>
      
        <TextInput 
          placeholder="Mugdho Datta"
          onChangeText={(val) => setText1(val)} 
          style={styles.input}  
        />

        <Text> First Name </Text>
        <TextInput 
        placeholder="Chinmoy"
        onChangeText={(val) => setText2(val)} 
        style={styles.input}
         />

        <Text> Last Name </Text>
        <TextInput 
        placeholder="Datta"
        onChangeText={(val) => setText3(val)} 
        style={styles.input}
         />

        <Text> Date of Birth </Text>
        <TextInput 
        placeholder="02-01-2000"
        onChangeText={(val) => setText4(val)} 
        style={styles.input}
         />

        <Text> Passport Number </Text>
        <TextInput 
        placeholder="00316-00281"
        onChangeText={(val) => setText5(val)} 
        style={styles.input}
         />

       <Text>   Email</Text>
       <TextInput
        placeholder="mug007@gmail.com"
        value={email}
        onChangeText={email => setEmail(email)}
        style={styles.input}
      />
        <Text>  Password</Text>
        <TextInput
          placeholder="Minimun 6 latter"
          value={password}
          onChangeText={password => setPassword(password)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity  
          onPress = {()=>{
        Rsanp();
        // LoginScreen();
         RegiValidation();
         ALLREGEX();
         
         }}
         style={styles.button} >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>
    
  )
        }



    const stack = createNativeStackNavigator()
      return(
    <stack.Navigator>
        <stack.Screen name = 'Registration'component={Regi} options = {{headerShown : true}} />
        <stack.Screen name = 'Login' component={LoginScreen} options = {{headerShown : false}} />

    </stack.Navigator>
      )
}
 

const styles = StyleSheet.create({
  container: {
    height: 330,
    marginTop : 230,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 200,
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom :2,
    margin:1,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  button: {
    margin: 20,
    marginBottom : 10,
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  images:{
    height: 260,
    weidth : '40%',
    marginBottom:500,
  },
})