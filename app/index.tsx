import { Redirect } from 'expo-router'
import { useAuthStore } from '@/domain/Auth/store/authStore'
import { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'

export default function Index() {
  const { isSignedIn, isLoading, loadStorageData } = useAuthStore()

  useEffect(() => {
    loadStorageData()
  }, [])

  if (isLoading) {
    return (
      <View className="bg-background flex-1 items-center justify-center">
        <ActivityIndicator color="#00B37E" />
      </View>
    )
  }

  if (isSignedIn) {
    return <Redirect href="/(root)/(stack)/home" />
  }

  return <Redirect href="/(auth)/login" />
}
