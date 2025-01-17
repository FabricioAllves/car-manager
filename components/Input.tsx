import { TextInput } from 'react-native'
import { useController, useFormContext } from 'react-hook-form'
import { ComponentProps } from 'react'

interface FormInputProps extends ComponentProps<typeof TextInput> {
  name: string
}

export function Input({ className, name, ...rest }: FormInputProps) {
  const { control } = useFormContext()
  const { field, fieldState } = useController({
    control,
    name,
  })

  return (
    <TextInput
      className={`bg-shape-secondary text-text-primary h-14 rounded-lg px-4 ${className} ${fieldState.error ? 'border-[1px] border-red-500' : ''}`}
      placeholderTextColor="#71717A"
      value={field.value}
      onChangeText={field.onChange}
      {...rest}
    />
  )
}
