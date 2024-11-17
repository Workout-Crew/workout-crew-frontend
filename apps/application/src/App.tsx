import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './routes/AppStack'
import AuthStack from './routes/AuthStack'
import { navigationRef } from './routes/types'
import { useAuthStore } from './store/auth'

async function loadToken() {
  const token = await AsyncStorage.getItem('token')

  if (token) useAuthStore.setState({ token })

  setTimeout(() => BootSplash.hide({ fade: true }), 1500)
}

export default function App() {
  const token = useAuthStore(store => store.token)

  useEffect(() => {
    loadToken()
  }, [token])

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          {token ? <AppStack /> : <AuthStack />}
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
