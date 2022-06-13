import styles from '../FilterSaveItem.module.css'

import { deleteFilters } from '../../../../../../features/filters/filtersSlice'
import { fetchFiltersList } from '../../../../../../features/filters/filtersSlice'
export const HandleDeleteFilter = (dispatch) =>{
    const filterSaveItemDelete = document.getElementsByClassName(styles.filterSaveItemDelete)
    const filterSaveItemDeleteEvent = (e) =>{
            console.log('hihih')
            const filterID = e.target.parentElement.children[2].textContent
            dispatch(deleteFilters(`?deleteArray=${filterID}`))
            dispatch(fetchFiltersList())
    }

    for(let i = 0 ; i < filterSaveItemDelete.length ; i++){
        filterSaveItemDelete[i].addEventListener('click', filterSaveItemDeleteEvent)
    }

    return()=>{
        for(let i = 0 ; i < filterSaveItemDelete.length ; i++){
            filterSaveItemDelete[i].removeEventListener('click', filterSaveItemDeleteEvent)
        }
    }

}