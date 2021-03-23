let initialState = {
    id: '',
    error: '',
    loading: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            return {...state, loading: true}
        case 'REGISTER_SUCCESS':
            return {id: action.payload, error: '', loading: null}
        case 'REGISTER_FAILED':
            return {...state, error: action.payload, loading: null}
        case 'LOGIN_SUCCESS':
            return {id:action.payload, error: '', loading: null} 
        case 'LOGIN_FAILED':
            return {...state, error: action.payload, loading: null} 
        case 'LOGOUT_SUCCESS':
            return {id: '', error: '', loading: null}
        default: 
        return state
    }
}

export default userReducer