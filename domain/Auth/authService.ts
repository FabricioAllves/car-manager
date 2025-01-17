import { authApi } from './AuthApi'
import { AuthCredentials } from './authTypes'

const signIn = async (
  user: string,
  password: string,
): Promise<AuthCredentials> => {
  try {
    const authCredentialsAPI = await authApi.signIn(user, password)
    return authCredentialsAPI
  } catch (error) {
    throw new Error('email ou senha inválidos')
  }
}

export const authService = {
  signIn,
}
