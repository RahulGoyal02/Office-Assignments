import {INCREMENT_COUNT, DECREMENT_COUNT,RESET_COUNT} from './actionType'
const init = {
    count: 0
}
export const reducer = (state= init,{type,payload}) => {
switch (type) {
    case INCREMENT_COUNT:
        return {
            ...state,
          count: state.count + payload,
          alert: "",
        }

    case DECREMENT_COUNT:
    if(state.count > 0){
        return {
            ...state,
            count: state.count - payload
        }  
    }else{
        return{
            ...state,
            count: 0,
            alert : "Zero Hero",
        }
        
    }  
    case RESET_COUNT:
       return {
           ...state,
           count : 10
       }     
    
    default:
       return {
           ...state
       }
    }
}