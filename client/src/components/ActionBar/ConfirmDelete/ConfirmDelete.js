import React, {useEffect} from "react";
import { useDispatch} from 'react-redux'
import styles from './ConfirmDelete.module.css'

import { DeleteEvent } from "./DeleteEvent";


const ConfirmDelete = () => {
    const dispatch = useDispatch()

    useEffect(() =>{
        const cancelButton = document.getElementById('cancelButton')
        const cancelButtonTwo = document.getElementById('cancelButtonTwo')
        const contanier = document.getElementsByClassName(styles.container)
        const deleteBox = document.getElementsByClassName(styles.deleteBox)
        //xử lý sự kiện bấm ra ngoài vùng được chọn và bấm hủy thì sẽ hủy tính năng
        //xóa
        const documentEvent = (event) => {
            //kiểm tra sự kiện có không đã, nếu không có tức là đang ở trang khác
            const cancelButtonEvent = () =>{
                contanier[0].classList.add(styles.hiddenBox)
            }
            const cancelButtonTwoEvent = () =>{
                contanier[0].classList.add(styles.hiddenBox)
            }
            if(deleteBox[0]){
                if (deleteBox[0].contains(event.target)) {
                    cancelButton.addEventListener('click',cancelButtonEvent )
                    
                    cancelButtonTwo.addEventListener('click',cancelButtonTwoEvent)
                    return()=>{
                        cancelButton.removeEventListener('click',cancelButtonEvent )
                    
                    cancelButtonTwo.removeEventListener('click',cancelButtonTwoEvent)
                    }
                } else {
                    contanier[0].classList.add(styles.hiddenBox)
                }
              }
            }
        document.addEventListener("mousedown", documentEvent
            );
        return()=>{
            document.removeEventListener("mousedown", documentEvent
            );
        }
    },[])
    
    return(
        <span className={`${styles.container} ${styles.hiddenBox}`}>
            <span className={styles.deleteBox}>
                <span className={styles.deleteNotify}>Bạn có chắc muốn xóa Tiềm năng này không?</span>
                <span className={styles.deleteCancel} id='cancelButton'>Hủy bỏ</span>
                <span className={styles.deleteYes} id='deleteButtonFinal'
                    onClick={()=> DeleteEvent(dispatch)}
                >Đồng ý</span>
                <span className={`${styles.icon} ${styles.deleteCancelButton}`} id='cancelButtonTwo'></span>
            </span>
        </span>
    )
}

export default ConfirmDelete