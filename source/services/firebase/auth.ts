import auth from '@react-native-firebase/auth'

export const signin = async (email: string, password: string) => {
  try {
    const user = await auth().signInWithEmailAndPassword(email, password)
    return user
  } catch (error) {
    return error
  }
}

export const signup = async (email: string, password: string) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password)
    return user
  } catch (error) {
    return error
  }
}
