import { apiAuth } from '@/api'
import { AuthCredentials } from './authTypes'

const signIn = async (
  user: string,
  password: string,
): Promise<AuthCredentials> => {
  const response = await apiAuth.post<AuthCredentials>('/signIn', {
    user,
    password,
  })
  return response.data
}

export const authApi = {
  signIn,
}
