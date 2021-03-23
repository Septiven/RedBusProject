import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Login from './../src/Screens/Login'
import Register from './../src/Screens/Register'

const Stack = createStackNavigator()
const RegisterRouter = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}

export default RegisterRouter