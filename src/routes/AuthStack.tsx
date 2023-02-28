import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export function AuthStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>

        </Stack.Navigator>
    )
}