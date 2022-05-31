import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { createCustomer } from "../../features/customers/customersSlice";
import { useDispatch } from "react-redux";

import styles from './CreateBar.module.css'

const CreateBar = () =>{
    const dispatch = useDispatch()

    const HandleSave = () =>{
        const anhValue =  document.getElementById('anhValue').files[0]
        let data ={
            '_id':'123',
        };

        dispatch(createCustomer(data))
    }

    return (
        <div className={styles.createBar}>
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
                        onClick={HandleSave}
                    >
                        <span className={styles.saveAndAddButton}>Lưu và thêm</span>
                    </button>
                    <button type="submit" form="createCustomer" className={styles.createRightButton}
                    
                    >
                        <Link to="/" className={styles.saveButton}>Lưu</Link >
                    </button>
                </span>
            </div>
        </div>
    )
}

export default CreateBar