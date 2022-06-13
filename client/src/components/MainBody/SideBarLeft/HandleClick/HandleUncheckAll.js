import styles from '../SideBarLeft.module.css'

import { clearCustomerFilter } from '../../../../features/customers/customersSlice'

export const HandleUncheckAll = (dispatch) =>{
    const filterSelect = document.getElementsByClassName(styles.filterSelect)
    const filterActionCancel = document.getElementsByClassName(styles.filterActionCancel)

    const filterActionCancelEvent = ()=>{
        //giả lập ấn toàn bộ nút check và nút delete input value
        for (let i = 0; i < filterSelect.length; i++) {
                if(filterSelect[i].children[0].classList.contains(styles.filterItemChecked)){
                    filterSelect[i].children[0].click()
                    filterSelect[i].children[3].click()
                }
        }

        // disable nút áp dụng
        filterActionCancel[0].parentElement.children[1].classList.add(styles.filterActionApplyDisabled)

        //khi ẩn thanh áp dụng thì phải cho nút chọn áp dụng hiện lên mặc định, nút
        // lưu filter phải ẩn đi
        if(filterActionCancel[0].parentElement.children[1].style.display='none'){
            filterActionCancel[0].parentElement.children[1].style.display='block'
        }
        if(filterActionCancel[0].parentElement.children[2].style.display='block'){
            filterActionCancel[0].parentElement.children[2].style.display='none'
        }

        dispatch(clearCustomerFilter())
    }

    filterActionCancel[0].addEventListener('click', filterActionCancelEvent)

    return()=>{
        filterActionCancel[0].removeEventListener('click', filterActionCancelEvent)
    }
}