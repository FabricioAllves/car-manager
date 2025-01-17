import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Header } from './Header'

type ScreenProps = {
  children: React.ReactNode
  title: string
  rightIcon?: React.ReactNode
  isHome?: boolean
}

export function Screen({
  children,
  title,
  isHome = false,
  rightIcon,
}: ScreenProps) {
  const { top } = useSafeAreaInsets()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="bg-shape-primary flex-1" style={{ paddingTop: top }}>
        {isHome ? (
          <Header />
        ) : (
          <View className="bg-shape-primary flex-row items-center justify-between px-6 py-5">
            <View className="w-10">
              <TouchableOpacity onPress={() => router.back()} hitSlop={10}>
                <Ionicons name="arrow-back" size={24} color="#00B37E" />
              </TouchableOpacity>
            </View>
            <Text className="self-center text-[20px] font-bold text-[#C4C4C4]">
              {title}
            </Text>
            <View className="w-10">
              {rightIcon && (
                <TouchableOpacity onPress={() => router.back()} hitSlop={10}>
                  <Ionicons name="arrow-back" size={24} color="#00B37E" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        <View className="flex-1 bg-[#202024] px-6">{children}</View>
      </View>
    </TouchableWithoutFeedback>
  )
}
