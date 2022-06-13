import React, {useEffect} from 'react'
import qs from 'qs'
import { useDispatch } from 'react-redux'
import { editFilter } from '../../../../features/filters/filtersSlice'
import { fetchFiltersList } from '../../../../features/filters/filtersSlice'

import styles from './UpdateBox.module.css'

import { HandleCancelButtonOne } from './HandleCancelButtonOne'

export const UpdateBox =()=>{
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
    useEffect(()=>{
        const editYes = document.getElementsByClassName(styles.editYes)
        const editYesEvent = ()=>{
            if(!editYes[0].classList.contains(styles.editYesDisabled)){
                const filterId = document.getElementsByClassName(styles.filterID)
                const filterNewName = document.getElementsByClassName(styles.filterInput)
                const  _id = filterId[0].textContent
                const name = filterNewName[0].value
                let data = qs.stringify({
                    'id': _id,
                    'newName': name 
                  });
                dispatch(editFilter(data))
                dispatch(fetchFiltersList())
                editYes[0].parentElement.parentElement.parentElement.classList.add(styles.hiddenEditFilter)
            }
        }
            editYes[0].addEventListener('click', editYesEvent)
        return()=>{
                editYes[0].removeEventListener('click', editYesEvent)
        }
    },[dispatch])

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
                    Đổi tên bộ lọc
                </span>
                <span className={styles.comboBox}>
                    <span className={styles.filterTenMoi}>Tên mới</span>
                    <input className={styles.filterInput}/>
                    <span className={styles.filterID}></span>
                </span>
                <span className={styles.editBottomGroup}>
                    <span className={styles.editCancel}
                        onClick={()=>HandleCancelButtonOne()}
                    >
                        Hủy bỏ
                    </span>
                    <span className={`${styles.editYes} ${styles.editYesDisabled}`}>
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