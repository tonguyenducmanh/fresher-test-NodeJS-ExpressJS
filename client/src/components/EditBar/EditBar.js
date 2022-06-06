import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from './EditBar.module.css'

import { HandleCancel } from "./HandleSave/HandleCancel";
import { HandleSave } from "./HandleSave/HandleSave";
import { HandleSaveAndAdd } from "./HandleSave/HandleSaveAndAdd";


const EditBar = () =>{
    const editCustomer = useSelector(state => state.tempCustomer.editCustomer)
    const anhCu = editCustomer.anh


    const dispatch = useDispatch()

    useEffect(()=>{
        HandleCancel(dispatch)
        // HandleSaveAndAdd(dispatch)
        //2 trường hợp kia cần useselector để lấy limit và startindex
        // sau đó tự động load lại danh sách mới, còn
        // ông này là thêm thủ công lần nữa nên chưa cần vội
        HandleSave(dispatch,anhCu)
    },[dispatch])

    return (
        <div className={styles.createBar}>
            <div className={styles.notifySuccess} id='notifyEditSuccess'>
                Sửa tiềm năng thành công
            </div>
            <div className={styles.notifyNotEnough} id='notifyEditNotEnough'>
                Hãy điền đủ các mục có màu đỏ
            </div>
            <div className={styles.box}>
                <span className={`${styles.createLeft}`} >
                    <span className={styles.tatCaTiemNang} >Sửa Tiềm năng  </span>
                    <span className={styles.suaBoCuc}title='Tính năng này đang được phát triển'>Sửa bố cục</span>
                </span>
                <span className={styles.createRight}>
                    <button type="button" className={styles.createRightButton} 
                        id='cancelEditButton'
                    >

                        <Link to="/" className={styles.cancelButton}>Hủy bỏ</Link >
                    </button>
                    {/* <button type="button" form="EditCustomer" className={styles.createRightButton} 
                    id='editAndAddButton'
                    >
                        <span className={styles.saveAndAddButton}>Lưu và thêm</span>
                    </button> */}
                    <button type="button" form="EditCustomer" className={`${styles.createRightButton} ${styles.saveButton}`}
                        id='editButton'
                    >
                        Lưu
                    </button>
                    {/* không được đặt thẻ Link bên trong button trên, nếu không add hiệu
                    ứng click 2 nút liền nhau, nút dưới này là giả lajapj  sẽ dẫn tới re-render (hiệu ứng nổi bọt) */}
                    <Link to="/" id='editDoneAndReturnHome' className={styles.saveButtonDisable}></Link >
                </span>
            </div>
        </div>
    )
}

export default EditBar