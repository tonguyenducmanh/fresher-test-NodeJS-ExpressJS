import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import styles from './ActionBar.module.css'
import stylesTwo from '../MainBody/BodyTable/Table/Customers/Customers.module.css'
import stylesThree from './ConfirmDelete/ConfirmDelete.module.css'

import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";
import { ExportToExcellFile } from "./ExportToExcellFile";
import { ShowQuickUpdate } from "./HandleUpdate/ShowQuickUpdate";
import { HideQuickUpdate } from "./HandleUpdate/HideQuickUpdate";
import { HandleUpdateButton } from "./HandleUpdate/HandleUpdateButton";
import TruongChonNhieuLeft from './AutoComplete/TruongChonNhieuLeft'
import {ArrayChonNhieu} from '../ActionBar/AutoComplete/ArrayChonNhieu'
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
        //nếu bấm ra ngoài thì sẽ đóng menu; áp dụng tương tự cho quick update box
        const moreMenu = document.getElementById('moreMenu')
        const updateBox = document.getElementById('updateBox')
        const updateBoxForm = document.getElementById('updateBoxForm')
        document.addEventListener("mousedown", (event) => {
            if(!moreMenu.contains(event.target)){
                moreMenu.classList.add(styles.hiddenMenu)
            }
            if(!updateBoxForm.contains(event.target)){
                updateBox.classList.add(styles.hiddenUpdateBox)
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
            <div className={styles.notifySuccess} id='notifySuccess'>
                Xóa thành công
            </div>
            <div className={styles.notifyUpdateWarning} id='notifyUpdateWarning'>
                Bạn chỉ có thể sửa 1 tiềm năng 1 lúc
            </div>
            <div className={styles.notifyUpdateSuccess} id='notifyUpdateSuccess'>
                Sửa tiềm năng thành công
            </div>
            <div className={styles.box}>
                <span className={`${styles.actionLeft}`} id='actionBarOne'>
                    <span className={styles.actionLeftAllButton} >Tất cả tiềm năng</span>
                    <span className={styles.actionLeftFixButton}>Sửa</span>
                    <span className={styles.actionLeftRefreshButton} title='Tải lại'></span>
                </span>
                <span className={`${styles.actionLeft} ${styles.hiddenComponent}`} id='actionBarTwo'>
                    <span className={styles.actionLeftSelectedCountButton} id='countCheck'></span>
                    <span className={styles.actionLeftUnCheckButton} id='undoSelected'>Bỏ chọn</span>
                    <span className={styles.actionLeftUpdateButton} id='updateButton' onClick={()=>ShowQuickUpdate()}>
                        Cập nhật thông tin
                    <span id='updateQuick'></span>
                    </span>
                    <span className={styles.actionLeftMoreButton} id='moreButton'>
                    </span>
                    <span className={`${styles.actionLeftMoreMenu} ${styles.hiddenMenu}`} id='moreMenu'>
                        <span className={styles.actionLeftExportButton} id='exportExcell' onClick={()=>ExportToExcellFile(findList)}>Xuất khẩu</span>
                        <span className={styles.actionLeftDeleteButton} id='deleteButton'>Xóa</span>
                    </span>
                    <span className={`${styles.updateBox} ${styles.hiddenUpdateBox}`} id='updateBox'>
                        <span className={styles.updateBoxForm} id='updateBoxForm'>
                            <span className={styles.updateTitle}>
                                Cập nhật thông tin
                            </span>
                            <span className={styles.comboBox}>
                                <TruongChonNhieuLeft arr={ArrayChonNhieu}/>
                                <input className={`${styles.comboBoxInput} ${styles.comboBoxInputDisabled}`} disabled={true} id='truongChonNhieuRight'/>
                            </span>
                            <span className={styles.updateBottomGroup}>
                                <span className={styles.updateCancel} id='updateCancelButton' onClick={()=>HideQuickUpdate()}>
                                    Hủy bỏ
                                </span>
                                <span className={`${styles.updateYes} ${styles.updateYesDisabled}`} id='updateButtonFinal' onClick={()=>HandleUpdateButton()}>
                                    Cập nhật
                                </span>
                            </span>
                            <span className={styles.helpButton}>
                                <span className={`${styles.icon} ${styles.updateHelp}`}>
                                </span>
                                <span className={styles.iconToolTip}>Cập nhật nhanh thông tin tiềm năng theo mục</span>
                            </span>
                            <span className={`${styles.icon} ${styles.updateCancelButton}`} onClick={()=>HideQuickUpdate()}>
                            </span>
                        </span>
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