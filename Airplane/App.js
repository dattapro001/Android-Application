import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontScreen from './FrontScreen';
import MainScreen from './MainScreen';
import HomeTab from './HomeTab';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
              
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{ headerShown: true }} name="LoginScreen" component={LoginScreen} /> */}
        <Stack.Screen options={{ headerShown: false }} name="FrontScreen" component={FrontScreen} />
        {/* <Stack.Screen options={{ headerShown: false }} name="FrontScreen" component={MainScreen} /> */}
      
      </Stack.Navigator>
    </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
