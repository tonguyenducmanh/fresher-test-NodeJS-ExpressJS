import styles from '../HandleSearch.module.css'


export const HandleSearchIconClick = ()=>{
    const filterBox = document.getElementsByClassName(styles.filterBox)
    const iconSearch = document.getElementsByClassName(styles.iconSearch)
    const filterInputSearchBox = document.getElementsByClassName(styles.filterInputSearchBox)
    const filterCancelSearch = document.getElementsByClassName(styles.filterCancelSearch)

    const iconSearchEvent = ()=>{
        filterBox[0].style.display = 'none'
        iconSearch[0].style.display = 'none'
        filterInputSearchBox[0].style.display = 'block'
        filterInputSearchBox[0].children[0].focus()
        filterCancelSearch[0].style.display = 'block'
    }

    iconSearch[0].addEventListener('click', iconSearchEvent)

    return()=>{
        iconSearch[0].removeEventListener('click', iconSearchEvent)
    }
}