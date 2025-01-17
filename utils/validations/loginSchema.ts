import { z } from 'zod'

export const loginSchema = z.object({
  user: z.string().min(1, { message: 'Campo obrigatório!' }),
  password: z.string().min(1, { message: 'Campo obrigatório!' }),
})

export type LoginData = z.infer<typeof loginSchema>
