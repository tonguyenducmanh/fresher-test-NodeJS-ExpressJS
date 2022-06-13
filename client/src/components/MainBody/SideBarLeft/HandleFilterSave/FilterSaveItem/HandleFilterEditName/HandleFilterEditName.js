import styles from '../../../UpdateBox/UpdateBox.module.css'

export const HandleFilterEditName = (e) =>{
    const editFilter = document.getElementsByClassName(styles.editFilter)

    const filterID = e.target.parentElement.children[2].textContent
    e.target.parentElement.style.display = 'none'
    editFilter[0].classList.remove(styles.hiddenEditFilter)
    editFilter[0].children[0].children[1].children[2].innerHTML = filterID
}