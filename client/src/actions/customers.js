import { FETCH_ALL, COUNT, CREATE } from '../constants/actionTypes.js'

import * as api from '../api/index.js'

export const getCustomers = () => async (dispatch) => {
    try {
        const {data} = await api.fetchCustomers()

        dispatch({type: FETCH_ALL, payload: data})
    } catch (error){
        console.log(error.message)
    }
}

export const countCustomer = () => async (dispatch) => {
    try {
        const {data} = await api.countCustomer()

        dispatch({type: COUNT, payload: data})
    } catch (error){
        console.log(error.message)
    }
}