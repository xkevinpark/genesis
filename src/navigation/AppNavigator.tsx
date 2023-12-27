import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '@Screens/Splash';
import Auth from '@Screens/Auth';
import SignIn from '@Screens/Auth/SignIn';
import SignUp from '@Screens/Auth/SignUp';
import ResetPassword from '@Screens/Auth/ResetPassword';

import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name='Splash' component={Splash}/>
      <Stack.Screen name='Auth' component={Auth}/>
      <Stack.Screen name='SignIn' component={SignIn}/>
      <Stack.Screen name='SignUp' component={SignUp}/>
      <Stack.Screen name='ResetPassword' component={ResetPassword}/>

    </Stack.Navigator>
  )
};

export default AppNavigator;
