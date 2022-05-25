import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from './CreateBar.module.css'

const CreateBar = () =>{
    return (
        <div className={styles.createBar}>
            <div className={styles.box}>
                <span className={`${styles.createLeft}`} >
                    <span className={styles.tatCaTiemNang} >Tất cả tiềm năng - </span>
                    <span className={styles.mauTieuChuan} >Mẫu tiêu chuẩn</span>
                    <span className={styles.suaBoCuc}title='Tính năng này đang được phát triển'>Sửa bố cục</span>
                </span>
                <span className={styles.createRight}>
                    <span className={styles.cancelButton} >
                        <Link to="/" className={styles.cancelButtonChild}>Hủy bỏ</Link >
                        </span>
                    <span className={styles.saveAndCreate} >
                        <Link to="/" className={styles.saveAndCreateChild}><span>Lưu và thêm</span></Link >
                    </span>
                    <span className={styles.saveButton}>
                        <Link to="/" className={styles.saveButtonChild}><span>Lưu</span></Link >
                    </span>
                </span>
            </div>
        </div>
    )
}

export default CreateBar