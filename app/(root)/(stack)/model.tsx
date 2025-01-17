import { CardModel } from '@/components/CardModel'
import { Screen } from '@/components/Screen'
import { Search } from '@/components/Search'
import { useModel } from '@/domain'
import { FlashList } from '@shopify/flash-list'
import { View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function Model() {
  const { brandId } = useLocalSearchParams<{ brandId: string }>()
  const { filteredModels, searchText, setSearchText } = useModel(brandId)

  return (
    <Screen title="Modelos">
      <Search text={searchText} onChangeText={setSearchText} />
      <FlashList
        data={filteredModels}
        renderItem={({ item }) => <CardModel brand={item} />}
        estimatedItemSize={70}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-2" />}
      />
    </Screen>
  )
}
