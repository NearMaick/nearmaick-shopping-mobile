import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { AppRoutes } from './app.routes';
import { SignIn } from '../screens/SignIn';

export function Routes() {
  const [user, setUser] = useState<{ uid: string } | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userInfo => {
      console.log(userInfo)
      setUser(userInfo)
    })

    return subscriber
  }, [])

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}