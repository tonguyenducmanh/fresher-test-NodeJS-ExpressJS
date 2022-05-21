import {FETCH_ALL,COUNT, CREATE} from '../constants/actionTypes.js'

export default (customers = [], action) =>{
    switch (action.type){
        case FETCH_ALL:
            return action.payload;
        case COUNT:
            return action.payload;
        default:
            return customers;
    }
}