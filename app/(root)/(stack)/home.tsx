import { CardBrand } from '@/components/CardBrand'
import { useBrand } from '@/domain'
import { View } from 'react-native'
import { Screen } from '@/components/Screen'
import { FlashList } from '@shopify/flash-list'
import { Search } from '@/components/Search'

export default function Home() {
  const { filteredBrands, setSearchText, searchText } = useBrand()

  return (
    <Screen title="Home" isHome>
      <Search text={searchText} onChangeText={setSearchText} />
      <FlashList
        data={filteredBrands}
        renderItem={({ item }) => (
          <View className="flex-1 p-2">
            <CardBrand brand={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={120}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </Screen>
  )
}
