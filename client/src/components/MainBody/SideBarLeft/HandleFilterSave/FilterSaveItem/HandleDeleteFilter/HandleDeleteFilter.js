import { deleteFilters } from '../../../../../../features/filters/filtersSlice'
import { fetchFiltersList } from '../../../../../../features/filters/filtersSlice'
export const HandleDeleteFilter = (dispatch,e) =>{
                const filterID = e.target.parentElement.children[2].textContent
                dispatch(deleteFilters(`?deleteArray=${filterID}`))
                dispatch(fetchFiltersList())
}