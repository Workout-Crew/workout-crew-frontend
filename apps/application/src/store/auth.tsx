import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

export interface UserType {
  nickname: string | null
  sex: 'MALE' | 'FEMALE' | null
  age: number | null
  height: number | null
  weight: number | null
  goal: 'GAIN_MUSCLE' | 'LOSE_BODY_FAT' | null
}

interface AuthStoreType extends UserType {
  token: string | null
  handleLogin: (token: string) => void
  handleSetUser: (user: Partial<UserType>) => void
  handleLogout: () => void
}

export const useAuthStore = create<AuthStoreType>(set => ({
  token: null,
  nickname: null,
  sex: null,
  age: null,
  height: null,
  weight: null,
  goal: null,
  handleLogin: (token: string) => {
    set({ token })
    AsyncStorage.setItem('token', token)
  },
  handleSetUser: (user: Partial<UserType>) => {
    set(user)
  },
  handleLogout: () => {
    set({
      token: null,
      nickname: null,
      sex: null,
      age: null,
      height: null,
      weight: null,
      goal: null,
    })
    AsyncStorage.removeItem('token')
  },
}))
