import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Logo from '../assets/logo.svg'
import Header from '../components/Header'
import HeaderMenu from '../components/HeaderMenu'
import TabBarIcon from '../components/TabBarIcon'
import TabBarLabel from '../components/TabBarLabel'
import CommunityScreen from '../screens/Community'
import GoalScreen from '../screens/Goal'
import HomeScreen from '../screens/Home'
import RecordScreen from '../screens/Record'
import { useAuthStore } from '../store/auth'

export const HomeTabScreens = {
  HOME: 'Home',
  RECORD: 'Record',
  GOAL: 'Goal',
  COMMUNITY: 'Community',
} as const

export type HomeTabParamList = {
  [HomeTabScreens.HOME]: undefined
  [HomeTabScreens.RECORD]: undefined
  [HomeTabScreens.GOAL]: undefined
  [HomeTabScreens.COMMUNITY]: undefined
}

const Tab = createBottomTabNavigator<HomeTabParamList>()

export default function HomeTab() {
  const handleLogout = useAuthStore(store => store.handleLogout)

  return (
    <Tab.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        headerLeft: () => <Logo width={97} height={28} />,
        headerRight: () => (
          <HeaderMenu>
            <HeaderMenu.MenuItem type="logout" onPress={handleLogout} />
          </HeaderMenu>
        ),
        tabBarStyle: { height: 64 },
        tabBarItemStyle: { height: 64, paddingVertical: 8 },
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
        name={HomeTabScreens.GOAL}
        component={GoalScreen}
        options={{
          tabBarLabel: props => <TabBarLabel {...props}>내 목표</TabBarLabel>,
          tabBarIcon: props => (
            <TabBarIcon {...props} type={HomeTabScreens.GOAL} />
          ),
        }}
      />
      <Tab.Screen
        name={HomeTabScreens.COMMUNITY}
        component={CommunityScreen}
        options={{
          tabBarLabel: props => <TabBarLabel {...props}>커뮤니티</TabBarLabel>,
          tabBarIcon: props => (
            <TabBarIcon {...props} type={HomeTabScreens.COMMUNITY} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
