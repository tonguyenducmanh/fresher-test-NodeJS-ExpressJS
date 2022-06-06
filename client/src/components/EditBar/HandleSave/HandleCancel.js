import { resetLocation } from '../../../features/location/locationSlice';


export const HandleCancel = (dispatch) =>{
    
 
    const cancelEditButton = document.getElementById('cancelEditButton')
        cancelEditButton.addEventListener('click', () =>{
                    dispatch(resetLocation())
                    
                })

}