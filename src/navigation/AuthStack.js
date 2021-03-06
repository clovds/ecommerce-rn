import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RegisterScreen} from '../screen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
