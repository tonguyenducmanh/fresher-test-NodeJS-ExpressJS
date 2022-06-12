import { useEffect } from 'react'
import styles from './FilterSaveItem.module.css'

import { HandleFilterItemOpenMenu } from './HandleFilterItemOpenMenu/HandleFilterItemOpenMenu'

export const FilterSaveItem = () =>{
    useEffect(()=>{
        HandleFilterItemOpenMenu()
    },[])
    //ẩn menu nhỏ khi ấn ra ngoài
    useEffect(()=>{
        const filterSaveItemMenuTool = document.getElementsByClassName(styles.filterSaveItemMenuTool)
        const mousedownEvent = (event) => {
            for(let i = 0 ; i < filterSaveItemMenuTool.length; i++){
                if(!filterSaveItemMenuTool[i].contains(event.target)){
                    filterSaveItemMenuTool[i].style.display = 'none'
                }
            }
        }
        document.addEventListener("mousedown",mousedownEvent );
        return () =>{
            document.removeEventListener("mousedown",mousedownEvent )
            }
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