import { StyleSheet, Text, View,  ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image = {uri : 'https://www.ozoneinfomedia.com/wp-content/uploads/2019/08/contact-Us.gif'}
const image2 = { uri : 'https://media.tenor.com/kKmvIr30vQYAAAAi/stars-changing-colors.gif'}
const Conta = () => {
    
    return(
         <View style ={styles.container}>
           <ImageBackground source={image} style ={styles.images}>
           
                <View style={styles.options}>
                <ImageBackground source={image2} style ={styles.images1}>
                        <Text style ={styles.txt1}></Text>
                        <Text style ={styles.txt1}>Call: 301311</Text>

                        <Text style ={styles.txt1}>Reservation: reservation@bdair.com</Text>
                        <Text style ={styles.txt1}>General Query: info@bdair.com</Text>

                        <Text style ={styles.txt1}>+8801758506585</Text>
                        <Text style ={styles.txt1}>+8801745606773</Text>
                        </ImageBackground>
                </View>
                   </ImageBackground>              
         </View>



    )
}

const stack = createNativeStackNavigator()

export default function Contact() {
       
       return(
    <stack.Navigator>
         <stack.Screen name ="Contact Us" component={Conta} options={{headershown : false}} />
    </stack.Navigator>
       );
}
const styles = StyleSheet .create({
   container:{
      backgroundColor:'white',
   
    flex:1,
    justifyContent:'center',
   },

   options:{
    height:200,
    width:300,
    
    justifyContent: 'flex-start',
    alignItems:'center',
    margin:40,
    padding:10
  },
  txt1:{
     
   marginLeft:70,
    marginTop:10,
    fontSize: 20,
},
  images:{
     marginBottom:460,
     
  },
  images1:{
     marginTop:170,
     
  }
});