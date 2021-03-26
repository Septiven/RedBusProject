import {combineReducers} from 'redux'

// Reducers
import userReducer from './UserReducer'
import filterReducer from './FilterReducer'
import shuttlesReducer from './ShuttlesReducer'

const allReducer = combineReducers(
    {
        user: userReducer,
        filter: filterReducer,
        shuttles: shuttlesReducer
    }
)

export default allReducer