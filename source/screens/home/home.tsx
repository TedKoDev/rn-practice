import React from 'react'
import { View, Text } from 'react-native'

import { useTypedNavigation } from '@hooks/index'

export default HomeScreen

function HomeScreen() {
  const navigation = useTypedNavigation()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        onPress={() => {
          // navigation.navigate(navigation.APP_ROUTES.SIGNUP)
        }}>
        HomeScreen
      </Text>
    </View>
  )
}
