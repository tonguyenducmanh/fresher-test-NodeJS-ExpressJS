import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import styles from './ActionBar.module.css'
import stylesTwo from '../MainBody/BodyTable/Table/Customers/Customers.module.css'
import stylesThree from './ConfirmDelete/ConfirmDelete.module.css'

import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";
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
        //thêm tính năng kiểm tra xem có bấm ra ngoài menu hay không
        //nếu bấm ra ngoài thì sẽ đóng menu
        const moreMenu = document.getElementById('moreMenu')
        document.addEventListener("mousedown", (event) => {
            if(!moreMenu.contains(event.target)){
                moreMenu.classList.add(styles.hiddenMenu)
            }
          });

    },[])

    useEffect(() =>{
        const tdIds =  document.getElementsByClassName(stylesTwo.tdId)
        const checkedButton =  document.getElementsByClassName('hihi')
        const moreButton = document.getElementById('moreButton')
        
        moreButton.addEventListener('click', () =>{
            let idsString = []
            for( var i = 0 ; i < tdIds.length ; i ++){
                if(checkedButton[i].classList.contains(stylesTwo.iconHeadingChecked)){
                    idsString = idsString.concat(tdIds[i].textContent)
                }
            }
                idsString = idsString.join(',')
            dispatch(fetchCustomersFind(`?findArray=${idsString}`))

        })
    },[dispatch, findList])
    
    useEffect(() =>{
        const deleteButton = document.getElementById('deleteButton')
        const deleteBox = document.getElementsByClassName(stylesThree.container)
        const moreMenu = document.getElementById('moreMenu')
        deleteButton.addEventListener('click',function(){
            deleteBox[0].classList.remove(stylesThree.hiddenBox)
            moreMenu.classList.add(styles.hiddenMenu)
        })
    }, [])
    return (
        <div className={styles.actionbar}>
            <div className={styles.box}>
                <span className={`${styles.actionLeft}`} id='actionBarOne'>
                    <span className={styles.actionLeftAllButton} >Tất cả tiềm năng</span>
                    <span className={styles.actionLeftFixButton}>Sửa</span>
                    <span className={styles.actionLeftRefreshButton} title='Tải lại'></span>
                </span>
                <span className={`${styles.actionLeft} ${styles.hiddenComponent}`} id='actionBarTwo'>
                    <span className={styles.actionLeftSelectedCountButton} id='countCheck'></span>
                    <span className={styles.actionLeftUnCheckButton} id='undoSelected'>Bỏ chọn</span>
                    <span className={styles.actionLeftUpdateButton}>Cập nhật thông tin</span>
                    <span className={styles.actionLeftMoreButton} id='moreButton'>
                    </span>
                    <span className={`${styles.actionLeftMoreMenu} ${styles.hiddenMenu}`} id='moreMenu'>
                        <span className={styles.actionLeftExportButton} id='exportExcell' onClick={()=>ExportToExcellFile(findList)}>Xuất khẩu</span>
                        <span className={styles.actionLeftDeleteButton} id='deleteButton'>Xóa</span>
                    </span>
                </span>
                <ConfirmDelete/>
                <span className={styles.actionRight}>
                    <span className={styles.addAndMenuButton}>
                        <Link to="/create" className={styles.addNewButton}><span>Thêm</span></Link >
                        <span className={styles.menuButton}></span>
                    </span>
                    <span className={styles.menuButtonTwo} title='Tính năng này đang được phát triển'></span>
                    <span className={styles.menuButtonThree} title='Tính năng này đang được phát triển'></span>
                </span>
            </div>
        </div>
    )
}

export default ActionBar