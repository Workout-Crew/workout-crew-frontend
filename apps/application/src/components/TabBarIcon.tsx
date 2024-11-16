import { FC, createElement } from 'react'
import { Text } from 'react-native'
import { SvgProps } from 'react-native-svg'
import CommunityIcon from '../assets/community.svg'
import CommunityFillIcon from '../assets/community_fill.svg'
import HomeIcon from '../assets/home.svg'
import HomeFillIcon from '../assets/home_fill.svg'
import RecordIcon from '../assets/record.svg'
import RecordFillIcon from '../assets/record_fill.svg'
import TargetIcon from '../assets/target.svg'
import TargetFillIcon from '../assets/target_fill.svg'
import { HomeTabScreens } from '../routes/HomeTab'

type HomeTabScreenType = (typeof HomeTabScreens)[keyof typeof HomeTabScreens]

interface Props {
  focused: boolean
  type: HomeTabScreenType
}

const ICON: Record<HomeTabScreenType, (focused: boolean) => FC<SvgProps>> = {
  Home: focused => (focused ? HomeFillIcon : HomeIcon),
  Record: focused => (focused ? RecordFillIcon : RecordIcon),
  Target: focused => (focused ? TargetFillIcon : TargetIcon),
  Community: focused => (focused ? CommunityFillIcon : CommunityIcon),
}

export default function TabBarIcon({ focused, type }: Props) {
  return (
    <Text>{createElement(ICON[type](focused), { width: 32, height: 32 })}</Text>
  )
}
