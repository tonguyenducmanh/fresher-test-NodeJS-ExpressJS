import styles from '../FilterSaveItem.module.css'

export const HandleFilterItemOpenMenu = () =>{
    const filterSaveItemMenu = document.getElementsByClassName(styles.filterSaveItemMenu)
    const filterSaveItemMenuTool = document.getElementsByClassName(styles.filterSaveItemMenuTool)

    const filterSaveItemMenuEvent = (i) =>{
        return()=>{
            if(filterSaveItemMenuTool[i].style.display !== 'flex'){
                filterSaveItemMenuTool[i].style.display = 'flex'
            }else{
                filterSaveItemMenuTool[i].style.display = 'none'
            }
        }
    }

    for(let i = 0 ; i < filterSaveItemMenu.length ; i++){
        filterSaveItemMenu[i].addEventListener('click', filterSaveItemMenuEvent(i))
    }

    return()=>{
        for(let i = 0 ; i < filterSaveItemMenu.length ; i++){
            filterSaveItemMenu[i].removeEventListener('click', filterSaveItemMenuEvent(i))
        }
    }

}