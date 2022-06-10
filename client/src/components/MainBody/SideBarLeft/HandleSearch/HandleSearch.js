import React, {useEffect}  from "react";

import styles from './HandleSearch.module.css'
import { HandleSearchIconClick } from "./HandleEvent/HandleSearchIconClick";
import { HandleCancelButtonClick } from "./HandleEvent/HandleCancelButtonClick";
import { HandleInputTyping } from "./HandleEvent/HandleInputTyping";

export const HandleSearch = () =>{
    
    useEffect(()=>{
        HandleSearchIconClick()
        HandleCancelButtonClick()
        HandleInputTyping()
    },[])
    
    return(
        <div className={styles.filterBoxContainer}>
            <span className={`${styles.filterBox}`}>Lọc tiềm năng theo</span>
            <span className={`${styles.icon} ${styles.iconSearch}`}></span>
            <span className={styles.filterInputSearchBox}>
                <input className={styles.filterInputSearch} placeholder='Tìm kiếm' autoComplete='off' />
            </span>
            <span className={styles.filterCancelSearch}>Hủy</span>
        </div>
    )
}