import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthStackNavigator from '@screens/auth/stack/stack'

export default function Navigator() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  )
}
