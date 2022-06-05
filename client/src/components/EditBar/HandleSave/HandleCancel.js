import { resetLocation } from '../../../features/location/locationSlice';
import {fetchCustomersList} from '../../../features/customers/customersSlice'


export const HandleCancel = (dispatch,startIndexPagination,limitPagination) =>{
    
 
    const cancelEditButton = document.getElementById('cancelEditButton')
        cancelEditButton.addEventListener('click', () =>{
                    dispatch(resetLocation())
                    dispatch(fetchCustomersList(`?limit=${limitPagination}&startIndex=${startIndexPagination}`))
                    
                })

}