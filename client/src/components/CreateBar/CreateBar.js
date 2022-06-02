import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from './CreateBar.module.css'

import { HandleSave } from "./HandleSave/HandleSave";
import { HandleSaveAndAdd } from "./HandleSave/HandleSaveAndAdd";

const CreateBar = () =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        HandleSaveAndAdd(dispatch)
        HandleSave(dispatch)
    },[dispatch])

    return (
        <div className={styles.createBar}>
            <div className={styles.notifySuccess} id='notifySuccess'>
                Thêm mới thành công
            </div>
            <div className={styles.box}>
                <span className={`${styles.createLeft}`} >
                    <span className={styles.tatCaTiemNang} >Thêm Tiềm năng - </span>
                    <span className={styles.mauTieuChuan} >Mẫu tiêu chuẩn</span>
                    <span className={styles.suaBoCuc}title='Tính năng này đang được phát triển'>Sửa bố cục</span>
                </span>
                <span className={styles.createRight}>
                    <button type="button" className={styles.createRightButton} 

                    >

                        <Link to="/" className={styles.cancelButton}>Hủy bỏ</Link >
                    </button>
                    <button type="button" form="createCustomer" className={styles.createRightButton} 
                    id='saveAndAddButton'
                    >
                        <span className={styles.saveAndAddButton}>Lưu và thêm</span>
                    </button>
                    <button type="button" form="createCustomer" className={`${styles.createRightButton} ${styles.saveButton}`}
                        id='saveButton'
                    >
                        Lưu
                    </button>
                    {/* không được đặt thẻ Link bên trong button trên, nếu không add hiệu
                    ứng click 2 nút liền nhau, nút dưới này là giả lajapj  sẽ dẫn tới re-render (hiệu ứng nổi bọt) */}
                    <Link to="/" id='saveDoneAndReturnHome' className={styles.saveButtonDisable}></Link >
                </span>
            </div>
        </div>
    )
}

export default CreateBar