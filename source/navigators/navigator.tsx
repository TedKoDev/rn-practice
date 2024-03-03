import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthStackNavigator from '@screens/auth/stack/stack'
import AppTabs from './app-tabs'

export default function Navigator() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
      {/* <AppTabs /> */}
    </NavigationContainer>
  )
}
