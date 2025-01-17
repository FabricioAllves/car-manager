import { Ionicons } from '@expo/vector-icons'
import { View, TextInput, TouchableWithoutFeedback } from 'react-native'
import { useRef } from 'react'

type SearchProps = {
  text: string
  onChangeText: (text: string) => void
}

export function Search({ text, onChangeText }: SearchProps) {
  const inputRef = useRef<TextInput>(null)

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
      <View className="mb-6 mt-6 h-16 flex-row items-center rounded-lg bg-zinc-800 px-4">
        <Ionicons name="search" size={24} color="#00B37E" />
        <TextInput
          ref={inputRef}
          value={text}
          onChangeText={onChangeText}
          placeholder="Buscar marca..."
          placeholderTextColor="#71717A"
          className="ml-2 flex-1 text-zinc-100"
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
