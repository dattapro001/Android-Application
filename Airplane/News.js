import { StyleSheet, Text, View,  ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hyperlink from "react-native-hyperlink";
const Newss = ' write text here'

const image = {uri : 'https://get.goautoinsurance.com/assets/images/car-stoplight-scene-white-bg.gif'}
const NewsText = () => {
    
    return(
      <View style ={styles.container}>
      <ImageBackground source={image} style ={styles.images}>
 <View style={styles.options}>
 

        <Text style ={styles.txt2}>CLick this link to See Our and other Airlines News and Alerts</Text>

        <Hyperlink linkDefault={true} linkStyle={{color : 'blue' , fontSize:18}}  >
        https://www.flightglobal.com/news
        </Hyperlink>
  </View>
 </ImageBackground>
</View>
    )
}

const stack = createNativeStackNavigator()

export default function News() {
       
       return(
    <stack.Navigator>
         <stack.Screen name ="News & Alerts" component={NewsText} options={{headershowm : false}} />
    </stack.Navigator>
       );
}

const styles = StyleSheet .create({
   container:{
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
   fontSize:20
  },
  txt2:{
   color : '#ff7f50',
   fontSize:17,
   marginTop:100,
  },

  images:{
   marginBottom:500,
  }
 
});