import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { ConnectPage } from '../screens/ConnectPage';
import { Connect } from '../schemas/Models';


const Stack = createNativeStackNavigator();

export function AppStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='ConnectPage' component={ConnectPage} />
        </Stack.Navigator>
    )
}