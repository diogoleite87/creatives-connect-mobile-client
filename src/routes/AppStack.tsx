import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ConnectPage } from "../screens/ConnectPage"
import { Profile } from "../screens/Profile"
import { Settings } from "../screens/Settings"
import { Showcase } from "../screens/teste"

const Stack = createNativeStackNavigator()

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Showcase} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ConnectPage" component={ConnectPage} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}
