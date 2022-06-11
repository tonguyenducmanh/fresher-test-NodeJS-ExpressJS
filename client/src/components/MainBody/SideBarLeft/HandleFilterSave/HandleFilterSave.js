import  React, { useEffect } from 'react'
import styles from './HandleFilterSave.module.css'

import { HandleSearchIconClick } from './HandleFilterSaveOpen/HandleFilterSaveOpen'
import { FilterSaveItem } from './FilterSaveItem/FilterSaveItem'

export const HandleFilterSave = ()=>{
    
    useEffect(()=>{
        HandleSearchIconClick()
    },[])

    return(
        <div className={styles.filterSaveContainer}>
            <div className={`${styles.filterSave} ${styles.icon} ${styles.filterSaveOpen}`}>Bộ lọc đã lưu</div>
            <div className={styles.filterSaveList}>
                <FilterSaveItem/>
            </div>
        </div>

    )
}