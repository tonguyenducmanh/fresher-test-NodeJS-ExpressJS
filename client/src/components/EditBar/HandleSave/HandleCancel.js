import { resetLocation } from '../../../features/location/locationSlice';


export const HandleCancel = (dispatch) =>{
    
 
    const cancelEditButton = document.getElementById('cancelEditButton')
    const cancelEditButtonEvent = () =>{
        dispatch(resetLocation())
        
    }
        cancelEditButton.addEventListener('click',cancelEditButtonEvent )

    return()=>{
        cancelEditButton.removeEventListener('click',cancelEditButtonEvent )
        
    }
}