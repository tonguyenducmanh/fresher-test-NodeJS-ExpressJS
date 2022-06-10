import  React, { useEffect } from 'react'
import styles from './HandleFilterSave.module.css'

import { HandleSearchIconClick } from './HandleFilterSaveOpen/HandleFilterSaveOpen'

export const HandleFilterSave = ()=>{
    
    useEffect(()=>{
        HandleSearchIconClick()
    },[])

    return(
        <div className={styles.filterSaveContainer}>
            <div className={`${styles.filterSave} ${styles.icon} ${styles.filterSaveOpen}`}>Bộ lọc đã lưu</div>
            <div className={styles.filterSaveList}>
                <span className={styles.filterSaveItem}>
                    <span className={styles.filterSaveItemTitle}>
                        Bộ lọc nè
                    </span>
                    <span className={styles.filterSaveItemMenu}>
                        <span className={styles.filterSaveItemChangeName}>Đổi tên</span>
                        <span className={styles.filterSaveItemDelete}>Xóa</span>
                    </span>
                </span>
            </div>
        </div>

    )
}