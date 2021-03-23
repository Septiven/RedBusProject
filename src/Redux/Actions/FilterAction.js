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