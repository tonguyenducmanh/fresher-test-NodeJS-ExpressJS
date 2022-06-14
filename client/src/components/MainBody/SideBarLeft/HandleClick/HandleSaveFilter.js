import styles from '../SideBarLeft.module.css'
import stylesTwo from '../SaveFilterBox/SaveFilterBox.module.css'

export const HandleSaveFilter = () =>{
    const filterActionSave = document.getElementsByClassName(styles.filterActionSave)
    const editFilter = document.getElementsByClassName(stylesTwo.editFilter)

    const filterActionSaveEvent = (e)=>{
            e.target.style.display = 'none'
            e.target.parentElement.children[1].style.display = 'block'
            editFilter[0].classList.remove(stylesTwo.hiddenEditFilter)
        }
    filterActionSave[0].addEventListener('click', filterActionSaveEvent)
    
    return()=>{
        filterActionSave[0].removeEventListener('click', filterActionSaveEvent)
    }
}