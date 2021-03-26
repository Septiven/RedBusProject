import { act } from "react-test-renderer"

let initialState = {
    shuttleList: null,
    errorList: null,
    shuttleDetail: null,
    errorShuttleDetail: null,
    seatBooked: null
}

const shuttlesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATA_LISTS_SUCCESS':
            return { shuttleList: action.payload, error: null }
        case 'GET_DATA_LISTS_FAILED':
            return {shuttleList: null, errorList: action.payload}
        case 'GET_DATA_DETAIL_SUCCESS':
            return { ...state, shuttleDetail: action.payload, error: null }
        case 'GET_DATA_DETAIL_FAILED':
            return { shuttleDetail: null, errorShuttleDetail: action.payload }
        case 'GET_SEAT_BOOKED':
            return { ...state, seatBooked: action.payload }
        default:
            return state
    }
}

export default shuttlesReducer