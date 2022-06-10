import styles from '../HandleSearch.module.css'
import stylesTwo from '../../SideBarLeft.module.css'

export const HandleInputTyping = ()=>{
    const filterInputSearch = document.getElementsByClassName(styles.filterInputSearch)
    const filterItem =  document.getElementsByClassName(stylesTwo.filterItem)
    const filterInputSearchEvent = (e)=>{
        let inputValue = e.target.value.toUpperCase()
        for(let k = 0 ; k< filterItem.length; k++){
            if(filterItem[k].textContent.toUpperCase().indexOf(inputValue)>-1){
                filterItem[k].parentElement.style.display = 'block'
            } else{
                filterItem[k].parentElement.style.display = 'none'
            }
        }
    }

    ['input', 'focus'].forEach(evt =>
        filterInputSearch[0].addEventListener(evt, filterInputSearchEvent)
        )

    return()=>{
        ['input', 'focus'].forEach(evt =>
            filterInputSearch[0].removeEventListener(evt, filterInputSearchEvent))
    }
}