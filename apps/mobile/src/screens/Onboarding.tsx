import { Text, TouchableOpacity, View } from 'react-native'
import { ScreenProps, Screens } from '../routes/types'

export default function Onboarding({ navigation }: ScreenProps<'Onboarding'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ margin: 10 }}>Onboarding</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.reset({ index: 0, routes: [{ name: Screens.ROOT }] })
        }
      >
        <Text>Go</Text>
      </TouchableOpacity>
    </View>
  )
}
