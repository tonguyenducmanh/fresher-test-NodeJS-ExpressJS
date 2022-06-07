import stylesTwo from '../MainBody/BodyTable/Table/Customers/Customers.module.css'
import stylesThree from '../ActionBar/ActionBar.module.css'
import styles from '../MainBody/BodyTable/Table/Table.module.css'
//mỗi style này là cách gọi tiền tố class riêng dựa theo từng
//component khác nhau
export const UndoSelected = () =>{
    const actionBarOne = document.getElementById('actionBarOne')
    const actionBarTwo = document.getElementById('actionBarTwo')
    const checkAllButton = document.getElementById('iconCheckAll')
    const listCheckButton = document.getElementsByClassName(stylesTwo.iconButtonCustomers)
    const iconChecks = document.getElementsByClassName(stylesTwo.iconHeadingChecked)
    const undoSelect = document.getElementById('undoSelected')
    
        undoSelect.addEventListener('click', function(){
            for (let i = 0; i < listCheckButton.length; i++) {
                listCheckButton[i].classList.add(stylesTwo.iconHeading);
                listCheckButton[i].classList.remove(stylesTwo.iconHeadingChecked);
                listCheckButton[i].parentElement.classList.remove(stylesTwo.itemChecked)
            }

            if(iconChecks.length === 0){
            actionBarOne.classList.remove(stylesThree.hiddenComponent)  
            actionBarTwo.classList.add(stylesThree.hiddenComponent)
            checkAllButton.classList.remove(styles.iconHeadingChecked)
            checkAllButton.classList.add(styles.iconHeading)
            }     
        })
            
}