import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Logo from '../assets/logo.svg'
import Header from '../components/Header'
import HeaderMenu from '../components/HeaderMenu'
import TabBarIcon from '../components/TabBarIcon'
import TabBarLabel from '../components/TabBarLabel'
import CommunityScreen from '../screens/Community'
import HomeScreen from '../screens/Home'
import RecordScreen from '../screens/Record'
import TargetScreen from '../screens/Target'
import { Screens } from './types'

export const HomeTabScreens = {
  HOME: 'Home',
  RECORD: 'Record',
  TARGET: 'Target',
  COMMUNITY: 'Community',
} as const

export type HomeTabParamList = {
  [HomeTabScreens.HOME]: undefined
  [HomeTabScreens.RECORD]: undefined
  [HomeTabScreens.TARGET]: undefined
  [HomeTabScreens.COMMUNITY]: undefined
}

const Tab = createBottomTabNavigator<HomeTabParamList>()

export default function HomeTab() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        headerRight: () => <Logo width={112} height={20} />,
        headerLeft: () => (
          <HeaderMenu>
            {({ navigate }) => (
              <HeaderMenu.MenuItem
                type="setting"
                onPress={() => navigate(Screens.SETTING)}
              />
            )}
          </HeaderMenu>
        ),
        tabBarStyle: { height: bottom + 64 },
        tabBarItemStyle: { paddingVertical: 9 },
      }}
    >
      <Tab.Screen
        name={HomeTabScreens.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: props => <TabBarLabel {...props}>홈</TabBarLabel>,
          tabBarIcon: props => (
            <TabBarIcon {...props} type={HomeTabScreens.HOME} />
          ),
        }}
      />
      <Tab.Screen
        name={HomeTabScreens.RECORD}
        component={RecordScreen}
        options={{
          tabBarLabel: props => <TabBarLabel {...props}>운동 기록</TabBarLabel>,
          tabBarIcon: props => (
            <TabBarIcon {...props} type={HomeTabScreens.RECORD} />
          ),
        }}
      />
      <Tab.Screen
        name={HomeTabScreens.TARGET}
        component={TargetScreen}
        options={{
          tabBarLabel: props => <TabBarLabel {...props}>내 목표</TabBarLabel>,
          tabBarIcon: props => (
            <TabBarIcon {...props} type={HomeTabScreens.TARGET} />
          ),
        }}
      />
      <Tab.Screen
        name={HomeTabScreens.TARGET}
        component={CommunityScreen}
        options={{
          tabBarLabel: props => <TabBarLabel {...props}>커뮤니티</TabBarLabel>,
          tabBarIcon: props => (
            <TabBarIcon {...props} type={HomeTabScreens.TARGET} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
