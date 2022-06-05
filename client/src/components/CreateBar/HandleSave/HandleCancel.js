import { resetLocation } from '../../../features/location/locationSlice';
import {fetchCustomersList} from '../../../features/customers/customersSlice'


export const HandleCancel = (dispatch,startIndexPagination,limitPagination) =>{

    const cancelCreateButton = document.getElementById('cancelCreateButton')
        cancelCreateButton.addEventListener('click', () =>{
                    dispatch(resetLocation())
                    dispatch(fetchCustomersList(`?limit=${limitPagination}&startIndex=${startIndexPagination}`))
                    
                })

}