import styles from '../SideBarLeft.module.css'
export const HandleSaveFilter = () =>{
    const filterActionSave = document.getElementsByClassName(styles.filterActionSave)

    const filterActionSaveEvent = (e)=>{
            e.target.style.display = 'none'
            e.target.parentElement.children[1].style.display = 'block'
        }
    filterActionSave[0].addEventListener('click', filterActionSaveEvent)
    
    return()=>{
        filterActionSave[0].removeEventListener('click', filterActionSaveEvent)
    }
}