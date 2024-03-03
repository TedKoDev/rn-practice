import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStackNavigator from '@screens/home/stack/stack'

enum TAB_ROUTES {
  HOME_TAB = 'home-tab',
}

type TabParams = {
  // home routes
  [TAB_ROUTES.HOME_TAB]: undefined
  // settings routes
}

const Tab = createBottomTabNavigator<TabParams>()

export default AppTabs

function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TAB_ROUTES.HOME_TAB} component={HomeStackNavigator} />
    </Tab.Navigator>
  )
}
