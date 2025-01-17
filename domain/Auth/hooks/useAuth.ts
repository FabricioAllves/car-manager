import { router } from 'expo-router'
import { Alert } from 'react-native'
import { useAuthStore } from '../store/authStore'
import { LoginData } from '@/utils/validations/loginSchema'

export const useAuth = () => {
  const signIn = useAuthStore((state) => state.signIn)

  async function handleLogin(data: LoginData) {
    if (!data.user || !data.password) return

    try {
      await signIn({ user: data.user, password: data.password })
      router.replace('/(root)/(stack)/home')
    } catch (error: any) {
      Alert.alert('Ops :/', error.message)
    }
  }

  return {
    handleLogin,
  }
}
