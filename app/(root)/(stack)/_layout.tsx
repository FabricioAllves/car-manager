import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack
    // screenOptions={{
    //   header: () => <Header />,
    // }}
    >
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="model"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}
