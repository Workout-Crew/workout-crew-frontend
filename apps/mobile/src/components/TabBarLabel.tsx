import { ReactNode } from 'react'
import { Text } from 'react-native'

type Props = {
  focused: boolean
  children: ReactNode
}

export default function TabBarLabel({ focused, children }: Props) {
  return (
    <Text style={{ fontSize: 10, fontWeight: focused ? 700 : 400 }}>
      {children}
    </Text>
  )
}
