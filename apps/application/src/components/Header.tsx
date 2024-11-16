import { ReactNode, createElement } from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
})

export default function Header({
  options: { headerRight, headerLeft },
}: NativeStackHeaderProps | BottomTabHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.right}>
        {headerRight ? createElement(headerRight as () => ReactNode) : null}
      </View>
      {headerLeft && createElement(headerLeft as () => ReactNode)}
    </View>
  )
}
