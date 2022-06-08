import { resetLocation } from '../../../features/location/locationSlice';


export const HandleCancel = (dispatch) =>{
    const cancelCreateButton = document.getElementById('cancelCreateButton')
    const cancelCreateButtonEvent = () =>{
        dispatch(resetLocation())
        
    }
        cancelCreateButton.addEventListener('click',cancelCreateButtonEvent )
    return()=>{
        cancelCreateButton.removeEventListener('click',cancelCreateButtonEvent )

    }
}