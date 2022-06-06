import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from './CreateBar.module.css'

import { HandleCancel } from "./HandleSave/HandleCancel";
import { HandleSave } from "./HandleSave/HandleSave";
import { HandleSaveAndAdd } from "./HandleSave/HandleSaveAndAdd";


const CreateBar = () =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        HandleCancel(dispatch)
        HandleSaveAndAdd(dispatch)
        //2 trường hợp kia cần useselector để lấy limit và startindex
        // sau đó tự động load lại danh sách mới, còn
        // ông này là thêm thủ công lần nữa nên chưa cần vội
        HandleSave(dispatch)
    },[dispatch])

    return (
        <div className={styles.createBar}>
            <div className={styles.notifySuccess} id='notifySuccess'>
                Thêm mới thành công
            </div>
            <div className={styles.notifyNotEnough} id='notifyNotEnough'>
                Hãy điền đủ các mục có màu đỏ
            </div>
            <div className={styles.box}>
                <span className={`${styles.createLeft}`} >
                    <span className={styles.tatCaTiemNang} >Thêm Tiềm năng - </span>
                    <span className={styles.mauTieuChuan} >Mẫu tiêu chuẩn</span>
                    <span className={styles.suaBoCuc}title='Tính năng này đang được phát triển'>Sửa bố cục</span>
                </span>
                <span className={styles.createRight}>
                    <button type="button" className={styles.createRightButton} 
                        id='cancelCreateButton'
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