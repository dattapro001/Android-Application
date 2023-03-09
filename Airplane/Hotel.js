import React from "react";
import {  StyleSheet, Text, View,  ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hyperlink from "react-native-hyperlink";

const image = {uri : 'https://cdn.dribbble.com/users/924650/screenshots/2456994/media/ef20389828ef92b11a80b19b2f424c6a.gif'}
const Link = () => {
    return(
      
        <View style ={styles.container}>
          <ImageBackground source={image} style ={styles.images}>

        <View style={styles.options}>
               <Text style ={styles.txt1}></Text>

               <Text style ={styles.txt2}>Book hotel in Sylhet City:</Text>
               <Hyperlink linkDefault={true} linkStyle={{color : 'blue' , fontSize:18 ,}} style = {styles.link1} >
                              https://www.booking.com/city/bd/sylhet
               </Hyperlink> 

        
                <Text style ={styles.txt2}>Book hotel in Dhaka City:</Text>
               <Hyperlink linkDefault={true} linkStyle={{color : 'blue' , fontSize:18}} style = {styles.link1} >
                              https://www.booking.com/city/bd/dhaka
               </Hyperlink>


               <Text style ={styles.txt2}>Book hotel in Chittagong City:</Text>
               <Hyperlink linkDefault={true} linkStyle={{color : 'blue' , fontSize:18}} style = {styles.link1} >
                              https://www.booking.com/city/bd/chittagong
               </Hyperlink>  

                <Text style ={styles.txt2}>Book hotel in Gobal anywhere:</Text>
               <Hyperlink linkDefault={true} linkStyle={{color : 'blue' , fontSize:18}} style = {styles.link1} >
                              https://www.booking.com
               </Hyperlink>  
         </View>
               </ImageBackground>
 </View>

    )

}
const stack = createNativeStackNavigator()

export default function Hotel() {
  return(
   <stack.Navigator>
      <stack.Screen name = "Book Hotel" component={Link} options ={{headershown: false}} />
   </stack.Navigator>
  )
}
const styles = StyleSheet .create({
    container:{
     flex:1,
     justifyContent:'center',
    },
 
    options:{
     height:300,
     width:350,
     borderRadius:20,
     justifyContent: 'flex-start',
     alignItems:'center',
     marginTop:20,
     padding:10
   },
   txt1:{
   marginTop:300,
    marginRight:600,
    fontSize:20
   },
   txt2:{
    marginLeft:50,
    color : '#ff7f50',
    fontSize:17,
    marginTop:35,
   },
   images:{
    marginBottom:460
   },
   link1:{
      marginLeft:25,
   }
  
 });