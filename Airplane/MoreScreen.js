import { TouchableOpacity,ScrollView,StyleSheet, Text, Linking, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  
import { FontAwesome5 } from '@expo/vector-icons';
import News from './News';
import Privacy from './Privacy';
import Terms from './Terms';
import Contact from './Contact';
import About from './About';
import Hotel from './Hotel';
import Cars from './Cars';
import Flight from './Flight';
const IconSize=63;
const IconColor="#006a4e"

  const MainScreen=({navigation})=>{

    
    return(
      <View style={styles.container}>
      <ScrollView>
      <View style={styles.column}>
          <View>
          <TouchableOpacity
           onPress={()=>{
            
            Linking.openURL('https://www.flightglobal.com/news')}}
           // navigation.navigate(News)}}
          >
          <View style={styles.options}>
          <Entypo name="newsletter" size={IconSize} color={IconColor} />
              <Text>News & Alerts</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{navigation.navigate(Cars)}}
          >
          <View style={styles.options}>
          <FontAwesome5 name="car" size={IconSize} color={IconColor} />
              <Text>Car Rentals</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{navigation.navigate(Privacy)}}
          >
          <View style={styles.options}>
           <Ionicons name="reader-outline" size={IconSize} color={IconColor} />
              <Text>Privacy Policy</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{navigation.navigate(Terms)}}
          >
          <View style={styles.options}>
          <Entypo name="book" size={IconSize} color={IconColor} />
              <Text style={{}}>Terms & Conditions</Text>
          </View>
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity
          onPress={() => {navigation.navigate(Flight)}}
          >
          <View style={styles.options}>
          <Entypo name="aircraft-take-off" size={IconSize} color={IconColor} />
              <Text>Flight Status</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{navigation.navigate(Hotel)}}
          >
          <View style={styles.options}>
          <MaterialIcons name="hotel" size={IconSize} color={IconColor} />
              <Text>Book Hotel</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{navigation.navigate(Contact)}}
          >
          <View style={styles.options}>
          <Entypo name="phone" size={IconSize} color={IconColor} />
              <Text>Contact Us</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{navigation.navigate(About)}}
          >
          <View style={styles.options}>
          <Entypo name="user" size={IconSize} color={IconColor} />
              <Text>About Us</Text>
          </View>
          </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
  </View>
    )
  }
 
  const stack =createNativeStackNavigator();

  export default function MoreScreen() {
  return (
    <stack.Navigator>
         <stack.Screen name="More Screen" component={MainScreen} options={{headerShown: false}}/>
         <stack.Screen name ="News" component={News} options={{headerShown : false}} />
         <stack.Screen name ="Privacy" component={Privacy} options={{headerShown:false}} />
         <stack.Screen name ="Terms" component={Terms} options={{headerShown:false}} />
         <stack.Screen name ="Contact" component={Contact} options={{headerShown : false}} />
         <stack.Screen name ="About" component={About} options={{headerShown : false}} />
         <stack.Screen name ="Hotel" component={Hotel} options={{headerShown : false}} />
         <stack.Screen name ="Cars" component={Cars} options={{headerShown : false}} />
         <stack.Screen name ="Flight" component={Flight} options={{headerShown : false}} />
          
    </stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
  },
  column:{
    marginTop:75,
    marginTop: 130,
    flexDirection:'row',
    justifyContent:'center',
  },
  options:{
    height:110,
    width:130,
    borderRadius:20,
    backgroundColor:'white',
    justifyContent:'flex-end',
    alignItems:'center',
    margin:10,
    padding:10
  },
});