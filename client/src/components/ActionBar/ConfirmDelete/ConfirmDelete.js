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