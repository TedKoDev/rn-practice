import React from 'react'
import { View, Text, Button } from 'react-native'

import { signup } from '@source/services/firebase/auth'

export default SignupScreen

function SignupScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>SignupScreen</Text>
      <Button
        title="Signup"
        onPress={() => {
          console.log('Signup')
          signup('test@test.test', 'password')
        }}
      />
    </View>
  )
}
