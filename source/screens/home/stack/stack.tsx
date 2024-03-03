import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HOME_ROUTES from './routes'
import HomeScreen from '../home'

const Stack = createNativeStackNavigator()

export default HomeStackNavigator

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME_ROUTES.HOME} component={HomeScreen} />
    </Stack.Navigator>
  )
}
