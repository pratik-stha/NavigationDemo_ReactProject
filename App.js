import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/Profile';
import EditScreen from './Screens/ProfileEdit';
import {Button} from 'react-native-elements';


export default function App() {

  const Stack = createStackNavigator();

  console.log('hello world');
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: 'blue',
            textAlign: 'center',
            alignSelf: 'center'
          },}} />
    
      <Stack.Screen name="Edit" component={EditScreen} options={{ title:'Edit',headerStyle:{backgroundColor:'yellow'} ,headerTitleStyle:{color:'green',textAlign:'center', alignSelf: 'center'}}}/>
    
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
