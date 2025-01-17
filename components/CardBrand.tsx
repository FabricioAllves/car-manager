import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { DefaultResponse } from '@/types/model-brand'
import { router } from 'expo-router'

type CardBrandProps = TouchableOpacityProps & {
  brand: DefaultResponse
}

export function CardBrand({ brand, ...rest }: CardBrandProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: '/model',
          params: { brandId: brand.id },
        })
      }}
      activeOpacity={0.7}
      className="bg-shape-primary gap-4 rounded-md p-5"
      {...rest}
    >
      <View className="bg-shape-secondary size-[46px] items-center justify-center rounded-md">
        <Ionicons name="car-sport" size={24} color="#00B37E" />
      </View>
      <Text className="font-bold text-white">{brand.name}</Text>
    </TouchableOpacity>
  )
}
