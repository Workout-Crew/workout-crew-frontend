import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

interface AuthStoreType {
  token: string | null
  handleLogin: (token: string) => void
  handleLogout: () => void
}

export const useAuthStore = create<AuthStoreType>(set => ({
  token: null,
  handleLogin: (token: string) => {
    set({ token })
    AsyncStorage.setItem('token', token)
  },
  handleLogout: () => {
    set({ token: null })
    AsyncStorage.removeItem('token')
  },
}))
