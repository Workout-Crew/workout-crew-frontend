import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './routes/AppStack'
import AuthStack from './routes/AuthStack'
import { navigationRef } from './routes/types'
import { useAuthStore } from './store/auth'

const SPLASH_SHOW_TIME = 1000

export default function App() {
  const token = useAuthStore(store => store.token)

  useEffect(() => {
    setTimeout(() => BootSplash.hide({ fade: true }), SPLASH_SHOW_TIME)
  }, [])

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
