import React from "react";
import { StyleSheet, Text, View,  ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hyperlink from "react-native-hyperlink";

const image = {uri : 'https://get.goautoinsurance.com/assets/images/car-stoplight-scene-white-bg.gif'}
const Car = () => {
    return(
      
        <View style ={styles.container}>
             <ImageBackground source={image} style ={styles.images}>
        <View style={styles.options}>
        <Text style ={styles.txt1} >Book Car Rentals to your desire Location</Text>

               <Text style ={styles.txt2}>CLick this link to Book Car Rentals</Text>

               <Hyperlink linkDefault={true} linkStyle={{color : 'blue' , fontSize:18}}  >
                                       https://www.booking.com/cars
               </Hyperlink>
         </View>
        </ImageBackground>
 </View>

    )

}
const stack = createNativeStackNavigator()

export default function Cars() {
  return(
   <stack.Navigator>
      <stack.Screen name = "Book Rentals" component={Car} options ={{headershown: false}}  />
   </stack.Navigator>
  )
}


const styles = StyleSheet .create({
    container:{
      backgroundColor: 'white',
     flex:1,
     justifyContent:'center',
    },
 
    options:{
     height:200,
     width:300,
     borderRadius:20,
     justifyContent: "flex-start",
     alignItems:'center',
     margin:40,
     padding:10
   },
   txt1:{
    marginTop:200,
    marginLeft:200,
    fontSize:20
   },
   txt2:{
    color : '#ff7f50',
    fontSize:17,
    marginTop:150,
   },

   images:{
    marginBottom:500,
   }
  
 });