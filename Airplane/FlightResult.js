import { Text, View,StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const FResult =  ({navigation}) => {

    return (
      <View style={styles.ko}>
         <Text style={styles.ko}>{navigation.getParam('FlightNumber')}</Text> 
      </View>
    )
  }

  const stack = createNativeStackNavigator()

export default function FlightResult (){

   return(
    <stack.Navigator>
      <stack.Screen name = "Flight" component={FResult} options ={{headerShown: false}} />
     </stack.Navigator>  

   )
}
const styles = StyleSheet.create({
  ko:{
    width:500,
 marginTop:70,
 marginLeft: 570,
 fontWeight:'bold',
 fontSize:20
},


})
