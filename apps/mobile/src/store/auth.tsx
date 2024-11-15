import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

export const useAuthStore = create<{ token: string | null }>(set => ({
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
