import styles from './SideBarLeft.module.css'
export const HandleCheck = () =>{
    const filterItem = document.getElementsByClassName(styles.filterItem)
    const filterItemEvent = (e)=>{
        if(e.target.classList.contains(styles.filterItem)){
            e.target.classList.remove(styles.filterItem)
            e.target.classList.add(styles.filterItemChecked)
            e.target.parentElement.children[1].style.display = 'block'
            e.target.parentElement.children[2].style.display = 'block'
        }else{
            e.target.classList.remove(styles.filterItemChecked)
            e.target.classList.add(styles.filterItem)
            e.target.parentElement.children[1].style.display = 'none'
            e.target.parentElement.children[2].style.display = 'none'
        }
    }

    for (let i = 0; i < filterItem.length; i++) {
        filterItem[i].addEventListener('click',filterItemEvent)
    }
    return()=>{
        for (let i = 0; i < filterItem.length; i++) {
            filterItem[i].removeEventListener('click',filterItemEvent)
        } 
    }
}