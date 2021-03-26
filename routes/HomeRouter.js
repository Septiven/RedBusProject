import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Home from './../src/Screens/Home'
import ShuttleLists from './../src/Screens/ShuttleLists'
import ShuttleDetail from './../src/Screens/ShuttleDetail'

const Stack = createStackNavigator()

const HomeStackNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ShuttleLists' component={ShuttleLists} />
            <Stack.Screen name='ShuttleDetail' component={ShuttleDetail} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigation