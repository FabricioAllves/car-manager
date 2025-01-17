import { useAuthStore } from '@/domain'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from './Avatar'

export function Header() {
  const { signOut, user } = useAuthStore()

  return (
    <View className="bg-shape-primary px-6 py-6">
      <View className="flex-row items-center gap-3">
        <Avatar name={user?.name ?? 'Usuário'} />
        <View className="flex-1">
          <Text className="text-white">Olá,</Text>
          <Text className="font-bold text-white">
            {user?.name ?? 'Usuário'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={signOut}
          hitSlop={10}
          className="size-10 items-center justify-center rounded-md"
        >
          <Ionicons name="log-out" size={24} color="#fed300" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
