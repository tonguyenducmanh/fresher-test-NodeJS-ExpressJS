import styles from './Customers.module.css'

import { changeHistory } from '../../../../../features/history/historySlice'

export const HandleShowHistory = (dispatch,history) =>{

    const customerEdits = document.getElementsByClassName(styles.trId)
    const showHistoryEvent = (k)=>{
        dispatch(changeHistory(history))
    }
    for(let k = 0 ; k < customerEdits.length; k++){
        customerEdits[k].addEventListener('click',showHistoryEvent(k))
    }
    return()=>{
        for(let k = 0 ; k < customerEdits.length; k++){
            customerEdits[k].removeEventListener('click',showHistoryEvent(k))
        }
    }
}