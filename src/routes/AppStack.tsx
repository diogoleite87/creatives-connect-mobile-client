import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export function AppStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>

        </Stack.Navigator>
    )
}