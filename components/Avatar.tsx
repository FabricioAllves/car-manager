import { View, Text } from 'react-native'

interface AvatarProps {
  name: string
}

export function Avatar({ name }: AvatarProps) {
  function getInitials(name: string) {
    const names = name.split(' ')
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase()
    }
    return names[0][0].toUpperCase()
  }

  return (
    <View className="size-10 items-center justify-center rounded-md bg-zinc-900">
      <Text className="text-sm font-bold text-[#fed300]">
        {getInitials(name)}
      </Text>
    </View>
  )
}
