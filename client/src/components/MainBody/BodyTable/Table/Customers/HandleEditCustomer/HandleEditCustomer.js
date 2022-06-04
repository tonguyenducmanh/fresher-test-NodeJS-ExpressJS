import styles from '../Customers.module.css'


import { addTempCustomer } from '../../../../../../features/customers/customersSlice'

export const HandleEditCustomer = (dispatch,customers) =>{

    const customerEdits = document.getElementsByClassName(styles.trId)
    const checkButtons = document.getElementsByClassName(styles.iconHeading)
    const tdLinks = document.getElementsByClassName(styles.tdLink)
    for(let k = 0 ; k < customerEdits.length; k++){
        customerEdits[k].addEventListener('dblclick',(event)=>{
            if(!checkButtons[k].contains(event.target)){
                tdLinks[k].children[0].click()
                console.log(customers[k])
                dispatch(addTempCustomer(customers[k]))
            }
        })
    }
}