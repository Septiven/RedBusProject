const initialState = {
    departure: null,
    arrival: null, 
    date: null, 
    seat: null
}

function filterReducer(state = initialState, action){
    switch(action.type){
        case 'ON_SET_DEPARTURE':
            return {...state, departure: action.payload}
        case 'ON_SET_ARRIVAL':
            return {...state, arrival: action.payload}
        default:
            return state
    }
}

export default filterReducer