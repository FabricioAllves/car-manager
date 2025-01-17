import { View, Text, TouchableOpacity } from 'react-native'
import { Input } from '@/components/Input'
import { useAuth } from '@/domain/Auth/hooks/useAuth'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginData, loginSchema } from '@/utils/validations/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Login() {
  const { handleLogin } = useAuth()

  const filterForm = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      user: '',
      password: '',
    },
  })
  const { handleSubmit } = filterForm

  return (
    <View className="bg-background flex-1 px-8">
      <View className="flex-1 items-center justify-center">
        <Text className="text-text-primary mb-16 text-3xl font-bold">
          Manager Cars
        </Text>
        <FormProvider {...filterForm}>
          <Input
            name="user"
            placeholder="User"
            keyboardType="default"
            autoCapitalize="none"
            className="mb-4 w-full"
          />

          <Input
            name="password"
            placeholder="Password"
            secureTextEntry
            className="mb-8 w-full"
          />

          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-primary h-14 w-full items-center justify-center rounded-lg"
            onPress={handleSubmit(handleLogin)}
          >
            <Text className="text-text-primary text-lg font-bold">Sign in</Text>
          </TouchableOpacity>
        </FormProvider>
      </View>
    </View>
  )
}
