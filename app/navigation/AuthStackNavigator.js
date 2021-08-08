import React from 'react';
import LoginScreen from "../screen/Login/LoginScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
        initialRouteName="Login"
    >
        <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
        />
    </AuthStack.Navigator>
  );
}
