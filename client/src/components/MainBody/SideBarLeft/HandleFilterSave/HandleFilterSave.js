import  React, { useEffect } from 'react'
import styles from './HandleFilterSave.module.css'
import stylesTwo from '../HandleFilterSave/FilterSaveItem/FilterSaveItem.module.css'
import { HandleSearchIconClick } from './HandleFilterSaveOpen/HandleFilterSaveOpen'
import { FilterSaveItem } from './FilterSaveItem/FilterSaveItem'

export const HandleFilterSave = ()=>{
    
    useEffect(()=>{
        HandleSearchIconClick()
    },[])

    //ẩn menu nhỏ khi ấn ra ngoài
    useEffect(()=>{
        const filterSaveItemMenuTool = document.getElementsByClassName(stylesTwo.filterSaveItemMenuTool)
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
        <div className={styles.filterSaveContainer}>
            <div className={`${styles.filterSave} ${styles.icon} ${styles.filterSaveOpen}`}>Bộ lọc đã lưu</div>
            <div className={styles.filterSaveList}>
                <FilterSaveItem/>
            </div>
        </div>

    )
}