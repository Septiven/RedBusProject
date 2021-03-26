import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import HomeNavigator from './HomeRouter'
import BookingHistory from './../src/Screens/BookingHistory'
import Profile from '../src/Screens/Profile'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome' 

// Styles
import Color from './../src/Supports/Styles/Color'
import Spacing from './../src/Supports/Styles/Spacing'
import typography from './../src/Supports/Styles/Typography'

const Tab = createBottomTabNavigator()
const MainRouter = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{size: 7, activeTintColor: '#fa1e0e', inactiveTintColor: '#4a47a3' }}
        >
            <Tab.Screen 
                name='Home' component={HomeNavigator}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return(
                            <Icon name='circle' color={color} size={size} />
                        )
                    }
                }} 
            />
            <Tab.Screen 
                name='BookingHistory' component={BookingHistory} 
                options={{tabBarIcon: ({color, size}) => {
                    return(
                        <Icon name='credit-card' color={color} size={size} />
                    )
                }}}
            />
            <Tab.Screen 
                name='Profile' component={Profile} 
                options={{tabBarIcon: ({color, size}) => {
                    return(
                        <Icon name='user' color={color} size={size} />
                    )
                }}}
            />
        </Tab.Navigator>
    )
}

export default MainRouter