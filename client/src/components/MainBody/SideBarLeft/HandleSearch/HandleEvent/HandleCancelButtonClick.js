import styles from '../HandleSearch.module.css'
import stylesTwo from '../../SideBarLeft.module.css'


export const HandleCancelButtonClick = ()=>{
    const filterBox = document.getElementsByClassName(styles.filterBox)
    const iconSearch = document.getElementsByClassName(styles.iconSearch)
    const filterInputSearchBox = document.getElementsByClassName(styles.filterInputSearchBox)
    const filterCancelSearch = document.getElementsByClassName(styles.filterCancelSearch)
    const filterItem = document.getElementsByClassName(stylesTwo.filterItem)

    const filterCancelSearchEvent = ()=>{
        filterBox[0].style.display = 'block'
        iconSearch[0].style.display = 'block'
        filterInputSearchBox[0].style.display = 'none'
        filterCancelSearch[0].style.display = 'none'
        for( let k = 0 ; k< filterItem.length ; k++){
            filterItem[k].parentElement.style.display = 'block'
        }
    }

    filterCancelSearch[0].addEventListener('click', filterCancelSearchEvent)

    return()=>{
        filterCancelSearch[0].removeEventListener('click', filterCancelSearchEvent)
    }
}