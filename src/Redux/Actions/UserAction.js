import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {urlAPI} from './../../Supports/Constant/urlAPI'

export const onUserRegister = (inputEmail, inputPassword) => {
    return(dispatch) => {
        
        Axios.get(urlAPI + `/users?email=${inputEmail}`)
        .then((res) => {
            if(res.data.length === 1){
                dispatch(
                    {
                        type: 'REGISTER_FAILED',
                        payload: 'Email Sudah Terdaftar'
                    }
                )
            }else{
                Axios.post(urlAPI + '/users', {email: inputEmail, password: inputPassword})
                .then((response) => {
                    AsyncStorage.setItem('@id', (response.data.id).toString())
                    .then((resAsyncStorage) => {
                        dispatch(
                            {
                                type: 'REGISTER_SUCCESS',
                                payload: response.data.id
                            }
                        )
                    })
                    .catch((errAsyncStorage) => {
                        console.log(errAsyncStorage)
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const onSaveAsyncStroage = (id) => {
    return(dispatch) => {
        dispatch(
            {
                type: 'REGISTER_SUCCESS',
                payload: id
            }
        )
    }
}

export const onUserLogout = () => {
    return(dispatch) => {
        AsyncStorage.removeItem('@id')
        .then((res) => {
            dispatch(
                {
                    type: 'LOGOUT_SUCCESS',
                }
            )
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

//LOGIN
export const onUserLogin = (inputEmail, inputPassword) => {
    return(dispatch) => {
        
        Axios.get(urlAPI + `/users?email=${inputEmail}&password=${inputPassword}`)
        .then((res) => {
            if(res.data.length === 1){
                console.log(res.data[0].id)
                AsyncStorage.setItem('@id', (res.data[0].id).toString())
                .then((responseAsync) => {
                    dispatch(
                        {
                            type: 'LOGIN_SUCCESS',
                            payload: res.data[0].id
                        }
                    )
                })
                .catch((errorAsync) => {
                    dispatch(
                        {
                            type: 'LOGIN_FAILED',
                            payload: 'Error Async'
                        }
                    )
                })
            }else{
                dispatch(
                    {
                        type: 'LOGIN_FAILED',
                        payload: 'Akun tidak ditemukan'
                    }
                )
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}