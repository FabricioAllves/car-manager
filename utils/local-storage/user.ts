import { User } from '@/domain/Auth/authTypes'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const setLocalStorageUser = async (user: User) => {
  try {
    const jsonValue = JSON.stringify(user)
    await AsyncStorage.setItem('@credentials', jsonValue)
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const getLocalStorageUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@credentials')
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const removeLocalStorageUser = async () => {
  try {
    await AsyncStorage.removeItem('@credentials')
  } catch (e) {
    console.error(e)
    throw e
  }
}
