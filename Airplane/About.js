import { StyleSheet, Text, View,  ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image = {uri : 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmFkNzFlNmVjN2FmNDc3ZDZkZjRiNDgwODEwZTUxNzdlNDY1N2NlMyZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif'}
const Ab = () => {
    
    return(
         <View style ={styles.container}>
            <ImageBackground source={image} style ={styles.images}>
                <View style={styles.options}>
                        <Text style ={styles.txt1}></Text>
                
                        <Text style ={styles.txt1}>Developers:</Text>
                        <Text style ={styles.txt}>Chinmoy Datta Priom</Text>
                        <Text style ={styles.txt}>&</Text>
                        <Text style ={styles.txt}>Arnob Lasker</Text>
                        <Text style ={styles.txt}>CSE Department Of LU</Text>
                         
                 </View>
                 </ImageBackground>
         </View>

    )
}

const stack = createNativeStackNavigator()

export default function About() {
       
       return(
    <stack.Navigator>
         <stack.Screen name ="About Us" component={Ab} options={{headershown : false}} />
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
    justifyContent: 'flex-start',
    alignItems:'center',
    margin:40,
    padding:10
  },
  txt1:{
   fontStyle: 'italic',
     color: 'blue',
    marginTop:100,
    fontSize: 30,
},
  txt:{

       marginTop:10,
       marginBottom:1,
       fontSize: 25,
  },
  images:{
     marginBottom:450,
  }
});