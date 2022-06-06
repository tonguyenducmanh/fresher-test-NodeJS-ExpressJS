import { resetLocation } from '../../../features/location/locationSlice';


export const HandleCancel = (dispatch) =>{

    const cancelCreateButton = document.getElementById('cancelCreateButton')
        cancelCreateButton.addEventListener('click', () =>{
                    dispatch(resetLocation())
                    
                })

}