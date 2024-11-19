import { ReactNode, createElement } from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import HeaderMenu from './HeaderMenu'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    position: 'absolute',
    top: 0,
    left: '25%',
    right: '25%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
})

export default function Header({
  options: { title, headerLeft, headerRight },
}: NativeStackHeaderProps | BottomTabHeaderProps) {
  return (
    <View style={styles.container}>
      {headerLeft && createElement(headerLeft as () => ReactNode)}

      {title && (
        <View style={styles.title}>
          <HeaderMenu.Title>{title}</HeaderMenu.Title>
        </View>
      )}

      <View style={styles.right}>
        {headerRight ? createElement(headerRight as () => ReactNode) : null}
      </View>
    </View>
  )
}
