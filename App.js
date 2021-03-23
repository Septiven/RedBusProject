/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useEffect} from 'react';

// Stack
import RegisterRouter from './routes/RegisterRouter'
import MainRouter from './routes/MainRouter'

// Navigation
import { NavigationContainer } from '@react-navigation/native'

// Redux
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {onSaveAsyncStroage} from './src/Redux/Actions/UserAction'


 
const App = ({user, onSaveAsyncStroage}) => {

  useEffect(() => {
    getAsyncStorageData()
  }, [])

  const getAsyncStorageData = () => {
    AsyncStorage.getItem('@id')
    .then((result) => {
      onSaveAsyncStroage(result)
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
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

