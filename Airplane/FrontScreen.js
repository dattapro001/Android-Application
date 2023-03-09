import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, Text, TouchableOpacity, View , Image } from 'react-native'
import LoginScreen from './LoginScreen';
import Registration from './Registration';
import MainScreen from './MainScreen';

const txt =' Welcome TO BD Airways Book your Flight In Easiest Way.Login If you already have an account else Register?'
const Homo = ({navigation}) => {
   
    return(
       
       <View style={styles.container} >
               <Image source ={require ('./assets/logo.jpg')} style ={styles.image} /> 
               <Text style={styles.welcome}>{txt}</Text>
      <View style={styles.Allbutton}>
      
        <TouchableOpacity
                       
                       onPress={()=>{navigation.navigate('Login Screen')}}
  
            style={styles.button} >
              
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    
        <TouchableOpacity
                            onPress={()=>{navigation.navigate('Regist ration')}} 

          style={[styles.button, styles.buttonOutline]} >
            
          <Text style={styles.buttonOutlineText}>Register</Text>  
          

        </TouchableOpacity>
    
      </View>
      
      </View>
    
    
  )
    }

    const stack = createNativeStackNavigator()

export default function FrontScreen() {
      return(
    <stack.Navigator>
        <stack.Screen name = 'Front Screen' component={Homo} options = {{headerShown : false}} />
        <stack.Screen name = 'Login Screen' component={LoginScreen} options = {{headerShown : false}} />
        <stack.Screen name = 'Regist ration' component={Registration} options = {{headerShown : false}} />
        <stack.Screen name = 'MainScreen' component={MainScreen} options = {{headerShown : false}} />
    </stack.Navigator>
      )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    
    width:400,
    marginTop:100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  Allbutton: {
    
    marginBottom:80,
    width: 250,
    marginTop: -290,
  },
  button: {
    marginLeft:5,
    marginBottom: 240,
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: -230,
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
  image:{
    marginBottom:330,
    width:450,
    height:420,
    marginRight:120,
    marginLeft:140
  },
  welcome:{
    margin:-10,
    marginLeft:10,
    marginBottom:30,
    fontSize: 14,
    width: 300
     
  }
  
})