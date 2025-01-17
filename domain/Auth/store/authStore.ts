import { create } from 'zustand'
import { User } from '../authTypes'
import { authService } from '../authService'
import {
  getLocalStorageUser,
  removeLocalStorageUser,
  setLocalStorageUser,
} from '@/utils/local-storage/user'
import { router } from 'expo-router'

interface AuthStore {
  isSignedIn: boolean
  user: User | null
  isLoading: boolean
  loadStorageData: () => Promise<void>
  signIn: (credentials: { user: string; password: string }) => Promise<void>
  signOut: () => Promise<void>
}

export const useAuthStore = create<AuthStore>((set) => ({
  isSignedIn: false,
  user: null,
  isLoading: true,

  loadStorageData: async () => {
    try {
      const user = await getLocalStorageUser()
      if (user) {
        set({ user, isSignedIn: true })
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error)
    } finally {
      set({ isLoading: false })
    }
  },

  signIn: async ({ user, password }) => {
    try {
      const response = await authService.signIn(user, password)
      await setLocalStorageUser(response.user)
      set({ user: response.user, isSignedIn: true })
    } catch (error) {
      set({ user: null, isSignedIn: false })
      throw error
    }
  },

  signOut: async () => {
    await removeLocalStorageUser()
    set({ user: null, isSignedIn: false })
    router.replace('/(auth)/login')
  },
}))
