import { ReactNode, createElement } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {
  NavigationProp,
  NavigationState,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import ArrowBackIcon from '../assets/arrow_back.svg'
import CloseIcon from '../assets/close.svg'
import LogoutIcon from '../assets/logout.svg'

const MENU_ICON = {
  logout: LogoutIcon,
  close: CloseIcon,
  prev: ArrowBackIcon,
} as const

interface HeaderMenuProps {
  children:
    | ReactNode
    | ((
        navigation: Omit<NavigationProp<ParamListBase>, 'getState'> & {
          getState(): NavigationState | undefined
        },
      ) => ReactNode)
}

interface MenuItemProps {
  type: keyof typeof MENU_ICON
  onPress: () => void
}

interface TitleProps {
  children: ReactNode
}

export default function HeaderMenu({ children }: HeaderMenuProps) {
  const navigation = useNavigation()

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      {typeof children === 'function' ? children(navigation) : children}
    </View>
  )
}

HeaderMenu.Title = function Title({ children }: TitleProps) {
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 24,
        letterSpacing: -0.5,
        color: '#151517',
      }}
    >
      {children}
    </Text>
  )
}

HeaderMenu.MenuItem = function MenuItem({ type, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      {createElement(MENU_ICON[type], { width: 32, height: 32 })}
    </TouchableOpacity>
  )
}
