import { useEffect } from 'react'
import styles from './FilterSaveItem.module.css'

import { HandleFilterItemOpenMenu } from './HandleFilterItemOpenMenu/HandleFilterItemOpenMenu'

export const FilterSaveItem = () =>{
    useEffect(()=>{
        HandleFilterItemOpenMenu()
    },[])
    return(
        <span className={styles.filterSaveItem}>
            <span className={styles.filterSaveItemTitle}>
                Hihi
            </span>
            <span className={`${styles.icon} ${styles.filterSaveItemMenu}`}>
            </span>
            <span className={styles.filterSaveItemMenuTool}>
                <span className={`${styles.icon} ${styles.filterSaveItemChangeName}`}>Đổi tên</span>
                <span className={`${styles.icon} ${styles.filterSaveItemDelete}`}>Xóa</span>
            </span>
        </span>
    )
}