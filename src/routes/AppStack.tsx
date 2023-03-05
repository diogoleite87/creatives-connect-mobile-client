import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { ConnectPage } from '../screens/ConnectPage';
import { Settings } from '../screens/Settings';
import { NewCommentPage } from '../screens/NewCommentPage';
import { NewConnectPage } from '../screens/NewConnectPage';

const Stack = createNativeStackNavigator();

export function AppStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='ConnectPage' component={ConnectPage} />
            <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='NewCommentPage' component={NewCommentPage} />
            <Stack.Screen name='NewConnectPage' component={NewConnectPage} />
        </Stack.Navigator>
    )
}