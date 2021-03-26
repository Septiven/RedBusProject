export const onSetDeparture = (input) => {
    return{
        type: 'ON_SET_DEPARTURE',
        payload: input
    }
}

export const onSetArrival = (input) => {
    return{
        type: 'ON_SET_ARRIVAL',
        payload: input
    }
}

export const onSetTotalSeat = (input) => {
    return{
        type: 'ON_SET_TOTAL_SEAT',
        payload: input
    }
}

export const onSetDate = (input) => {
    return{
        type: 'ON_SET_DATE',
        payload: input
    }
}
