import {
    GET_USER,
    USER_ERROR
} from '../types'

export default (state, action) => {
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            } 
            case USER_ERROR:
                return {
                     ...state,
                     error: action.payload
                }  
           
        default: 
            return state;
    }
}