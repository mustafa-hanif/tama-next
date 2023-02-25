import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { ProviderCreate } from '../../features/user/provider-create'

const Stack = createNativeStackNavigator<{
  home: undefined
  'create-provider': undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="create-provider"
        component={ProviderCreate}
        options={{
          title: 'Home Service Provider',
        }}
      />
    </Stack.Navigator>
  )
}
