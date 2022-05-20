import {INCREMENT_COUNT,DECREMENT_COUNT,RESET_COUNT} from "./actionType"

export const incCount = (payload) => {
    return {
        type: INCREMENT_COUNT,
        payload,
    }
} 

export const decCount = (payload) => {
    return {
        type: DECREMENT_COUNT,
        payload,
    }
} 

export const resetCount = (payload) => {
    return {
        type: RESET_COUNT,
        payload,
    }
} 