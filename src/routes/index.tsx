import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { AppRoutes } from './app.routes';
import { SignIn } from '../screens/SignIn';

export function Routes() {
  async function handleSignInAnonimously() {
    const { user } = await auth().signInAnonymously()
    console.log(user)
  }

  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  )
}