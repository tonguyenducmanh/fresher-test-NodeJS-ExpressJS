import styles from './Table.module.css'
import stylesTwo from '../../BodyTable/Table/Customers/Customers.module.css'
import stylesThree from '../../../ActionBar/ActionBar.module.css'
//mỗi style này là cách gọi tiền tố class riêng dựa theo từng
//component khác nhau
export const HandleCheckAll = () =>{
    const checkAllButton = document.getElementById('iconCheckAll')
    const actionBarOne = document.getElementById('actionBarOne')
    const actionBarTwo = document.getElementById('actionBarTwo')
    const countCheck = document.getElementById('countCheck')
    const listCheckButton = document.getElementsByClassName('hihi')
    const iconChecks = document.getElementsByClassName(stylesTwo.iconHeadingChecked)

    checkAllButton.addEventListener('click', function(){
        if (checkAllButton.classList.contains(styles.iconHeadingChecked)) {
            checkAllButton.classList.add(styles.iconHeading);
            checkAllButton.classList.remove(styles.iconHeadingChecked);
            for (var i = 0; i < listCheckButton.length; i++) {
                    listCheckButton[i].classList.add(stylesTwo.iconHeading);
                    listCheckButton[i].classList.remove(stylesTwo.iconHeadingChecked);
                    listCheckButton[i].parentElement.classList.remove(stylesTwo.itemChecked)
                }
        }
        else if(checkAllButton.classList.contains(styles.iconHeading)) {
            checkAllButton.classList.add(styles.iconHeadingChecked);
            checkAllButton.classList.remove(styles.iconHeading);
            for (var i = 0; i < listCheckButton.length; i++) {
                listCheckButton[i].classList.remove(stylesTwo.iconHeading);
                listCheckButton[i].classList.add(stylesTwo.iconHeadingChecked);
                listCheckButton[i].parentElement.classList.add(stylesTwo.itemChecked)
            }
                //hiện menu chỉnh sửa nhanh
                actionBarOne.classList.add(stylesThree.hiddenComponent)}
                actionBarTwo.classList.remove(stylesThree.hiddenComponent)
                if(iconChecks.length == 0){
                    actionBarOne.classList.remove(stylesThree.hiddenComponent)  
                    actionBarTwo.classList.add(stylesThree.hiddenComponent)
                
            
        }
        countCheck.innerHTML = `Đã chọn ${iconChecks.length}`

    })
}