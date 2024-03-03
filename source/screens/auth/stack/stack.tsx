import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AUTH_ROUTES from './routes'
import LoginScreen from '../login-screen'
import SignupScreen from '../signup-screen'

type AuthStackParamList = {
  [AUTH_ROUTES.LOGIN]: undefined
  [AUTH_ROUTES.SIGNUP]: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AUTH_ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={AUTH_ROUTES.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  )
}
