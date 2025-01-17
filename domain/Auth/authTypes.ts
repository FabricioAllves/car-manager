export interface User {
  id: number
  name: string
  token: string
}

export interface AuthCredentials {
  token: string
  user: User
}
