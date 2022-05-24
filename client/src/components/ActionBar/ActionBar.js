import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import styles from './ActionBar.module.css'
import stylesTwo from '../MainBody/BodyTable/Table/Customers/Customers.module.css'

import { ExportToExcellFile } from "./ExportToExcellFile";
import { OpenMoreMenu } from "./OpenMoreMenu";
import { UndoSelected } from './UndoSelected'
import { fetchCustomersFind } from "../../features/customers/customersSlice";
const ActionBar = () =>{
    const dispatch = useDispatch()
    const findList = useSelector(state => state.find.findCustomers)
    
    useEffect(()=>{
        OpenMoreMenu()
        UndoSelected()
    },[])

    useEffect(() =>{
        const tdIds =  document.getElementsByClassName(stylesTwo.tdId)
        const checkedButton =  document.getElementsByClassName('hihi')
        const exportExcell = document.getElementById('exportExcell')
        const moreMenu = document.getElementById('moreMenu')
            exportExcell.addEventListener('click', () =>{
            let idsString = []
            for( var i = 0 ; i < tdIds.length ; i ++){
                if(checkedButton[i].classList.contains(stylesTwo.iconHeadingChecked)){
                    idsString = idsString.concat(tdIds[i].textContent)
                }
            }
            if(typeof(idsString) ==='array'){
                idsString = idsString.join(',')
            }
            dispatch(fetchCustomersFind(`?findArray=${idsString}`))
            moreMenu.classList.add(styles.hiddenMenu)

        })
    },[dispatch])
    useEffect(() =>{
        ExportToExcellFile(findList)
    })

    return (
        <div className={styles.actionbar}>
            <div className={styles.box}>
                <span className={`${styles.actionLeft}`} id='actionBarOne'>
                    <span className={styles.actionLeftAllButton} >Tất cả tiềm năng</span>
                    <span className={styles.actionLeftFixButton}>Sửa</span>
                    <span className={styles.actionLeftRefreshButton}></span>
                </span>
                <span className={`${styles.actionLeft} ${styles.hiddenComponent}`} id='actionBarTwo'>
                    <span className={styles.actionLeftSelectedCountButton} id='countCheck'></span>
                    <span className={styles.actionLeftUnCheckButton} id='undoSelected'>Bỏ chọn</span>
                    <span className={styles.actionLeftUpdateButton}>Cập nhật thông tin</span>
                    <span className={styles.actionLeftMoreButton} id='moreButton'>
                    </span>
                    <span className={`${styles.actionLeftMoreMenu} ${styles.hiddenMenu}`} id='moreMenu'>
                        <span className={styles.actionLeftExportButton} id='exportExcell'>Xuất khẩu</span>
                        <span className={styles.actionLeftDeleteButton}>Xóa</span>
                    </span>
                </span>
                <span className={styles.actionRight}>
                    <span className={styles.addAndMenuButton}>
                        <span className={styles.addNewButton}>Thêm</span>
                        <span className={styles.menuButton}></span>
                    </span>
                    <span className={styles.menuButtonTwo}></span>
                    <span className={styles.menuButtonThree}></span>
                </span>
            </div>
        </div>
    )
}

export default ActionBar