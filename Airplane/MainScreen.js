import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import HomeTab from './HomeTab';
import MoreScreen from './MoreScreen';
import SearchScreen from './SearchScreen';
import {Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import FrontScreen from './FrontScreen';
import { initializeApp } from "firebase/app";

import {collection, addDoc , getFirestore,query, where , onSnapshot } from 'firebase/firestore'
import {
  getAuth, 
  createUserWithEmailAndPassword,
}from 'firebase/auth'
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
const Queiry =auth.currentUser?.email
const IconSize = 60;
const IconColor = '#006a4e' ;
  
const Account= ({navigation}) => {
    return (
      <View style={styles.container}>
          {/* <AntDesign name ='user' size={IconSize} color={IconColor}/> */}
        <Text style={styles.txt2}>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={()=>{navigation.navigate(FrontScreen)}}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    )
  }
  //   <View sytle ={ styles.colum}>
  //     <View style={styles.Icons}>
  //     <AntDesign name ='user' size={IconSize} color={IconColor}/>
  //     <Text style={styles.txt}> Email</Text>
  //     <Text style={styles.txt2}>{navigation.getParam('Email')}</Text>
  //     </View>
  //     <View style={styles.Icons}>
  //     <Feather name = 'gift'  size={IconSize} color={IconColor}/>
  //     <Text style={styles.txt}>Date Of birth</Text>
  //     <Text style={styles.txt2}>{}</Text>
  //     </View>
  //     <View style={styles.Icons}>
  //     <Entypo name = 'news'  size={IconSize} color={IconColor}/>
  //     <Text style={styles.txt}>PassPort Number</Text>
  //     <Text style={styles.txt2}>{}</Text>
  //     </View>
  //     <View style={styles.Icons}>
  //     <Entypo name = 'hour-glass'  size={IconSize} color={IconColor}/>
  //     <Text style={styles.txt}>User Name</Text>
  //     <Text style={styles.txt2}>{}</Text>
  //     </View>
    
  //   <TouchableOpacity
  //   onPress={()=>{navigation.replace('FrontScreen')}}
  //    style={styles.button}>
  //              <Text style={styles.buttontxt}>LogOut</Text>
  //   </TouchableOpacity>
  //   </View>
  // );

const Main=()=> {
  const tab=createBottomTabNavigator();
  return (
      <tab.Navigator
      //initialRouteName='Home'
      screenOptions={() => ({
        tabBarHideOnKeyboard:'true',
        tabBarIconStyle:{size:10},
        tabBarLabelStyle:{fontSize:12},
        tabBarStyle:{ height:55, paddingBottom:5, paddingTop:5},
        tabBarActiveTintColor: '#006a4e',
        tabBarInactiveTintColor: 'gray',
      headerStyle:{backgroundColor:'white'},
      headerTitleStyle:{color:'#006a4e', fontSize:32}
       })}
      >
       <tab.Screen 
       name="Home" 
       component={HomeTab}//HomeScreen
       options={{
        headerTitle:'Home',
        tabBarIcon:({focused,color,size})=>{
          if(focused)
          {
            size=28;
          }
          return <Ionicons name="home" color={color} size={size}/>
        }}}
          />
       <tab.Screen 
       name="Search" 
       component={SearchScreen}//SearchScreen
       options={{
        headerShown:false,
        //headerTitle:"Search Flights",
        tabBarIcon:({focused,color,size})=>{
          if(focused)
          {
            size=28;
          }
          return <Ionicons name="search" color={color} size={size}/>
           },
          }
        }
          />
          <tab.Screen 
       name="Profile" 
       component={Account} 
       options={{
        headerTitle:"My Account",
          tabBarIcon:({focused,color,size})=>{
            if(focused)
            {
              size=30;
            }
            else
              size=28
            return <MaterialIcons name="account-circle" size={size} color={color} />
       }}}/>
       <tab.Screen 
       name="More" 
       component={MoreScreen} 
       options={{
        headerShown:false,
        tabBarIcon:({focused,color,size})=>{
          if(focused)
          {
            size=28;
          }
          return <FontAwesome name="bars" size={size} color={color} />
       }}}
          />
      </tab.Navigator>
  );
}
      const stack =createNativeStackNavigator()
      export default function MainScreen(){
  return(
    <stack.Navigator>
      <stack.Screen name = 'MainScreen' component={Main} options={{headerShown:false}} />
      <stack.Screen name = 'Account' component={Account} options={{headerShown:false}} />
      <stack.Screen name = 'FrontScreen' component={FrontScreen} options={{headerShown:false}} />
    </stack.Navigator>
  )
  }  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colum:{
    width: 300,
    justifyContent: 'center',
  flexDirection: 'column',
  
  },
  Icons:{
    width:200,
    alignItems:'center',
   marginLeft: -40,
    marginTop:30,
    
  },
  txt:{
    fontWeight:'bold',
  },
  txt2:{
         width:500,
          marginTop:-40,
          marginLeft: 300,
          fontWeight:'bold',
          fontSize:20
  },
  button:{
    marginTop:90,
    marginLeft:15,
    backgroundColor:'red',
    borderRadius:20,
    width: 150,
    height: 40
  },
  buttontxt:{
    fontWeight:'bold',
    marginLeft:35,
    fontSize:25
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
    marginLeft:25
  },

});
