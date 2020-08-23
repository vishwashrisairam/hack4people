import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import React,{useState} from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Login from '../screens/Login';
import Register from '../screens/Register';

import { AuthParamList } from '../types';


export default function AuthNavigator() {
  const colorScheme = useColorScheme();
  const AuthStack = createStackNavigator<AuthParamList>();
  
  const [isLoginScreen,setIsLoginScreen] = useState(false);

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: 'Login' }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerTitle: 'Register' }}
      />
    </AuthStack.Navigator>
  );
}
