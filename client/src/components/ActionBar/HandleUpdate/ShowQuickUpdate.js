
import styles from '../ActionBar.module.css'
import stylesTwo from '../../MainBody/BodyTable/Table/Customers/Customers.module.css'

export const ShowQuickUpdate = () =>{
   
    const tdIds =  document.getElementsByClassName(stylesTwo.tdId)
    const checkedButton =  document.getElementsByClassName(stylesTwo.iconButtonCustomers)
    const notifyUpdateWarning = document.getElementById('notifyUpdateWarning')
    let checkCount = 0
    for( let i = 0 ; i < tdIds.length ; i ++){
        if(checkedButton[i].classList.contains(stylesTwo.iconHeadingChecked)){
            checkCount++
        }
    }
    if(checkCount> 1){
        //thông báo rằng người dùng chỉ có thể sửa 1 tiềm năng 1 lúc
        notifyUpdateWarning.classList.add(styles.notifyUpdateWarningAni)
        notifyUpdateWarning.addEventListener("transitionend", ()=>{
            notifyUpdateWarning.classList.remove(styles.notifyUpdateWarningAni)
        });
    } else{
        //hiện bảng sửa nhanh
        const updateBox = document.getElementById('updateBox')
        updateBox.classList.remove(styles.hiddenUpdateBox)
    }
}