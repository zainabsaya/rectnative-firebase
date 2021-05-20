import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'
import Register from './signup'
import Dashboard from './Dashbord';
import Update from './Update';

const Stack = createStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashbord">
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="Dashbord" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="Update" component={Update} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Main;