import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'

import styles from './SaveFilterBox.module.css'

import { HandleCancelButtonOne } from './HandleCancelButtonOne'
import { HandleSaveFilter } from './HandleSaveFilter'

export const SaveFilterBox =()=>{
    const dispatch = useDispatch()
    // bật nút lưu khi có giá trị đầu vào
    useEffect(()=>{
        const filterInput = document.getElementsByClassName(styles.filterInput)
        const filterInputEvent = (i)=>{
            return(e)=>{
                if(e.target.value !==''){
                    e.target.parentElement.parentElement.children[2].children[1].classList.remove(styles.editYesDisabled)
                }else{
                    e.target.parentElement.parentElement.children[2].children[1].classList.add(styles.editYesDisabled)
                }
            }
        }
        for(let i = 0 ; i < filterInput.length ; i++){
            filterInput[i].addEventListener('input', filterInputEvent(i))
        }
        return()=>{
            for(let i = 0 ; i < filterInput.length ; i++){
                filterInput[i].removeEventListener('input', filterInputEvent(i))
            }
        }
    },[])

    //lưu tên mới vào database

    //ẩn khi ấn ra ngoài
    useEffect(()=>{
        const editFilterForm = document.getElementsByClassName(styles.editFilterForm)
        const mousedownEvent = (event) => {
            if(!editFilterForm[0].contains(event.target)){
                editFilterForm[0].parentElement.classList.add(styles.hiddenEditFilter)
            }
          }
        document.addEventListener("mousedown",mousedownEvent );
        return () =>{
            document.removeEventListener("mousedown",mousedownEvent )
            }
          
        })
    return(
        <span className={`${styles.editFilter} ${styles.hiddenEditFilter}`}>
            <span className={styles.editFilterForm}>
                <span className={styles.editTitle}>
                    Lưu bộ lọc
                </span>
                <span className={styles.comboBox}>
                    <span className={styles.filterTenMoi}>Tên bộ lọc</span>
                    <input className={styles.filterInput} id='filterInputSaveName'/>
                    <span className={styles.filterID}></span>
                </span>
                <span className={styles.editBottomGroup}>
                    <span className={styles.editCancel}
                        onClick={()=>HandleCancelButtonOne()}
                    >
                        Hủy bỏ
                    </span>
                    <span className={`${styles.editYes} ${styles.editYesDisabled}`}
                        onClick={(e)=>HandleSaveFilter(dispatch, e)}
                    
                    >
                        Lưu
                    </span>
                </span>
                <span className={styles.helpButton}>
                    <span className={`${styles.icon} ${styles.editHelp}`}>
                    </span>
                    <span className={styles.iconToolTip}>Đổi tên bộ lọc
                    </span>
                </span>
                <span className={`${styles.icon} ${styles.editCancelButton}`}
                    onClick={()=>HandleCancelButtonOne()}
                >
                </span>
            </span>
        </span>
    )
}