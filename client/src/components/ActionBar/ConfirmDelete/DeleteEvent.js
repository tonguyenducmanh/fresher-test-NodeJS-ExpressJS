import { deleteCustomers
} from '../../../features/customers/customersSlice'
import styles from './ConfirmDelete.module.css'
import stylesTwo from '../../MainBody/BodyTable/Table/Customers/Customers.module.css'
import stylesThree from '../../ActionBar/ActionBar.module.css'
import stylesFour from '../../MainBody/BodyTable/Table/Table.module.css'


export const DeleteEvent = (dispatch) =>{
    const tdIds =  document.getElementsByClassName(stylesTwo.tdId)
    const iconCheckAll = document.getElementById('iconCheckAll')
    const checkedButton =  document.getElementsByClassName(stylesTwo.iconButtonCustomers)
    const container = document.getElementsByClassName(styles.container)
    const actionBarOne = document.getElementById('actionBarOne')
    const actionBarTwo = document.getElementById('actionBarTwo')
    const notifySuccess = document.getElementById('notifySuccess')
    const refreshButton = document.getElementsByClassName(stylesThree.actionLeftRefreshButton)[0]
    
    container[0].classList.add(styles.hiddenBox)
    iconCheckAll.classList.remove(stylesFour.iconHeadingChecked)
    iconCheckAll.classList.add(stylesFour.iconHeading)
    actionBarOne.classList.remove(stylesThree.hiddenComponent)
    actionBarTwo.classList.add(stylesThree.hiddenComponent)
    let idsString = []
    for( let i = 0 ; i < tdIds.length ; i ++){
        if(checkedButton[i].classList.contains(stylesTwo.iconHeadingChecked)){
            idsString = idsString.concat(tdIds[i].textContent)
            checkedButton[i].classList.remove(stylesTwo.iconHeadingChecked)
            checkedButton[i].classList.remove(stylesTwo.iconButtonCustomersChecked)
            checkedButton[i].classList.add(stylesTwo.iconHeading)
            checkedButton[i].parentElement.classList.remove(stylesTwo.itemChecked)
        }
    }
        idsString = idsString.join(',')
    dispatch(deleteCustomers(`?deleteArray=${idsString}`))
    refreshButton.click()
    
    const notifySuccessEvent = ()=>{
        notifySuccess.classList.remove(stylesThree.notifySuccessAni)
    }
    notifySuccess.classList.add(stylesThree.notifySuccessAni)
    notifySuccess.addEventListener("transitionend", notifySuccessEvent);
    return()=>{
        notifySuccess.removeEventListener("transitionend", notifySuccessEvent);
    }
}