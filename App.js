/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useEffect,useState} from 'react';

// Stack
import RegisterRouter from './routes/RegisterRouter'
import MainRouter from './routes/MainRouter'

// Navigation
import { NavigationContainer } from '@react-navigation/native'

// Redux
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {onSaveAsyncStroage} from './src/Redux/Actions/UserAction'

// Splash Screen
import Splash from './src/Screens/Splash'
 
const App = ({user, onSaveAsyncStroage}) => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    getAsyncStorageData()
  }, [])

  const getAsyncStorageData = () => {
    AsyncStorage.getItem('@id')
    .then((result) => {
      onSaveAsyncStroage(result)
      console.log(result)
      setIsLogin(true)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  if(isLogin === false){
    return(
      <Splash />
    )
  }

  return(
    <NavigationContainer>
      {
        user.id?
          <MainRouter />
        :
          <RegisterRouter />
       }
    </NavigationContainer>
  )
}

const mapDispatchToProps = {
  onSaveAsyncStroage
}

const mapStateProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(mapStateProps, mapDispatchToProps)(App)

