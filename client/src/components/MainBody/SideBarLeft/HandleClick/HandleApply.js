import styles from '../SideBarLeft.module.css'
export const HandleApply = () =>{
    const filterActionApply = document.getElementsByClassName(styles.filterActionApply)

    const filterActionApplyEvent = (e)=>{
        if(!e.target.classList.contains(styles.filterActionApplyDisabled)){
            e.target.style.display = 'none'
            e.target.parentElement.children[2].style.display = 'block'
        }
    }
    filterActionApply[0].addEventListener('click', filterActionApplyEvent)
    
    return()=>{
        filterActionApply[0].removeEventListener('click', filterActionApplyEvent)
    }
}