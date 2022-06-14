import styles from './UpdateBox.module.css'
import qs from 'qs'
import { editFilter } from '../../../../features/filters/filtersSlice'
import { fetchFiltersList } from '../../../../features/filters/filtersSlice'

export const HandleSaveFilter = (dispatch, e) =>{
        if(!e.target.classList.contains(styles.editYesDisabled)){
            const filterId = e.target.parentElement.parentElement.children[1].children[2]
            const filterNewName = e.target.parentElement.parentElement.children[1].children[1]
            const  _id = filterId.textContent
            const name = filterNewName.value
            let data = qs.stringify({
                'id': _id,
                'newName': name 
              });
            dispatch(editFilter(data))
            dispatch(fetchFiltersList())
            e.target.parentElement.parentElement.parentElement.classList.add(styles.hiddenEditFilter)
        }
}