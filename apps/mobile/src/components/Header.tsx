import { createElement } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

const createContainerStyle = ({ top }: { top: number }) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 64 + top,
      paddingTop: top,
      paddingHorizontal: 16,
      backgroundColor: '#ffffff',
    },
  })

const styles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
})

export default function Header({
  options: { headerRight, headerLeft },
}: NativeStackHeaderProps | BottomTabHeaderProps) {
  const { top } = useSafeAreaInsets()

  return (
    <View style={createContainerStyle({ top }).container}>
      <View style={styles.right}>
        {headerRight ? createElement(headerRight) : null}
      </View>
      {headerLeft && createElement(headerLeft)}
    </View>
  )
}
