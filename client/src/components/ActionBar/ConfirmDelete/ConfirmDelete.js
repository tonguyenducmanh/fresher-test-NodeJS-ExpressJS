import React, {useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux'
import { deleteCustomers,fetchCustomersList,fetchCustomersCount
 } from '../../../features/customers/customersSlice'
import styles from './ConfirmDelete.module.css'
import stylesTwo from '../../MainBody/BodyTable/Table/Customers/Customers.module.css'
import stylesThree from '../../ActionBar/ActionBar.module.css'
import stylesFour from '../../MainBody/BodyTable/Table/Table.module.css'



const ConfirmDelete = () => {
    const dispatch = useDispatch()

    const startIndexPagination = useSelector(state => state.pagination.startIndex)
    const limitPagination = useSelector(state => state.pagination.limit)
    const deleteCount = useSelector(state=> state.delete.deleteCustomers)

    useEffect(() =>{
        const cancelButton = document.getElementById('cancelButton')
        const cancelButtonTwo = document.getElementById('cancelButtonTwo')
        const contanier = document.getElementsByClassName(styles.container)
        const deleteBox = document.getElementsByClassName(styles.deleteBox)
        //xử lý sự kiện bấm ra ngoài vùng được chọn và bấm hủy thì sẽ hủy tính năng
        //xóa
        document.addEventListener("mousedown", (event) => {
            //kiểm tra sự kiện có không đã, nếu không có tức là đang ở trang khác
            if(deleteBox[0]){
                if (deleteBox[0].contains(event.target)) {
                    cancelButton.addEventListener('click', function(){
                        contanier[0].classList.add(styles.hiddenBox)
                    })
                    
                    cancelButtonTwo.addEventListener('click', function(){
                        contanier[0].classList.add(styles.hiddenBox)
                    })
                } else {
                    contanier[0].classList.add(styles.hiddenBox)
                }
              }
            }
            );
    },[])
    
    useEffect(()=>{
        const tdIds =  document.getElementsByClassName(stylesTwo.tdId)
        const deleteButtonFinal = document.getElementById('deleteButtonFinal')
        const iconCheckAll = document.getElementById('iconCheckAll')
        const checkedButton =  document.getElementsByClassName('hihi')
        const container = document.getElementsByClassName(styles.container)
        const actionBarOne = document.getElementById('actionBarOne')
        const actionBarTwo = document.getElementById('actionBarTwo')
        const notifySuccess = document.getElementById('notifySuccess')

        deleteButtonFinal.addEventListener('click', function(){
            container[0].classList.add(styles.hiddenBox)
            iconCheckAll.classList.remove(stylesFour.iconHeadingChecked)
            iconCheckAll.classList.add(stylesFour.iconHeading)
            actionBarOne.classList.remove(stylesThree.hiddenComponent)
            actionBarTwo.classList.add(stylesThree.hiddenComponent)
            let idsString = []
            for( var i = 0 ; i < tdIds.length ; i ++){
                if(checkedButton[i].classList.contains(stylesTwo.iconHeadingChecked)){
                    idsString = idsString.concat(tdIds[i].textContent)
                }
            }
                idsString = idsString.join(',')
            dispatch(deleteCustomers(`?deleteArray=${idsString}`))
            dispatch(fetchCustomersList(`?limit=${limitPagination}&startIndex=${startIndexPagination}`))
            dispatch(fetchCustomersCount())

            notifySuccess.classList.add(stylesThree.notifySuccessAni)
            notifySuccess.addEventListener("transitionend", ()=>{
                notifySuccess.classList.remove(stylesThree.notifySuccessAni)
            });
        })
    },[deleteCount])
    return(
        <span className={`${styles.container} ${styles.hiddenBox}`}>
            <span className={styles.deleteBox}>
                <span className={styles.deleteNotify}>Bạn có chắc muốn xóa Tiềm năng này không?</span>
                <span className={styles.deleteCancel} id='cancelButton'>Hủy bỏ</span>
                <span className={styles.deleteYes} id='deleteButtonFinal'>Đồng ý</span>
                <span className={`${styles.icon} ${styles.deleteCancelButton}`} id='cancelButtonTwo'></span>
            </span>
        </span>
    )
}

export default ConfirmDelete