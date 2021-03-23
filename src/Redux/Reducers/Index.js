import {combineReducers} from 'redux'

// Reducers
import userReducer from './UserReducer'
import filterReducer from './FilterReducer'

const allReducer = combineReducers(
    {
        user: userReducer,
        filter: filterReducer
    }
)

export default allReducer