import {HIGH_TO_LOW,INCREMENT_COUNT,DECREMENT_COUNT,RESET_COUNT,FETCH_DATA,FETCH_DATA_REQ} from "./actionTypes"


export const incCount = (payload) =>{
    return{
        type: INCREMENT_COUNT,
        payload,
    }    
}

export const decCount = (payload) =>{
    return{
        type: DECREMENT_COUNT,
        payload,
    }    
}


export const resetCount = (payload) =>{
    return{
        type: RESET_COUNT,
        payload,
    }    
}

export const fetchData = (payload) =>{
    return{
        type: FETCH_DATA,
        payload,
    }    
}

export const fetchDataReq = (payload) =>{
    console.log("req", payload)
    return{
        type: FETCH_DATA_REQ,
        loading: payload,
    }    
}
export const HighToLow = (payload) =>{
    console.log("HighTolOW", payload)
    return{
        type: HIGH_TO_LOW,
        payload,
    }    
}