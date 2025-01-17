import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { DefaultResponse } from '@/types/model-brand'

type CardModelProps = TouchableOpacityProps & {
  brand: DefaultResponse
}

export function CardModel({ brand, ...rest }: CardModelProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-shape-primary flex-row gap-4 rounded-md p-5"
      {...rest}
    >
      <View className="bg-shape-secondary size-[46px] items-center justify-center rounded-md">
        <Ionicons name="car-sport" size={24} color="#00B37E" />
      </View>
      <Text className="flex-1 font-bold text-white">{brand.name}</Text>
    </TouchableOpacity>
  )
}
