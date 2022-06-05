import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import { fetchCustomersList } from '../../features/customers/customersSlice'
import { fetchCustomersCount } from '../../features/customers/customersSlice';
import { resetLocation } from '../../features/location/locationSlice';


import styles from './ActionBar.module.css'
import stylesTwo from '../MainBody/BodyTable/Table/Customers/Customers.module.css'
import stylesThree from './ConfirmDelete/ConfirmDelete.module.css'

import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";
import { ExportToExcellFile } from "./ExportToExcellFile";
import { ShowQuickUpdate } from "./HandleUpdate/ShowQuickUpdate";
import { HideQuickUpdate } from "./HandleUpdate/HideQuickUpdate";
import { HandleUpdateButton } from "./HandleUpdate/HandleUpdateButton";
import Left from './AutoComplete/Left'
import Right from "./AutoComplete/Right";
import {ArrayChonNhieu} from '../ActionBar/AutoComplete/ArrayChonNhieu'
import { OpenMoreMenu } from "./OpenMoreMenu";
import { UndoSelected } from './UndoSelected'
import { fetchCustomersFind } from "../../features/customers/customersSlice";


const ActionBar = () =>{
    const dispatch = useDispatch()
    const findList = useSelector(state => state.find.findCustomers)
    const startIndexPagination = useSelector(state => state.pagination.startIndex)
    const limitPagination = useSelector(state => state.pagination.limit)
    useEffect(()=>{
        OpenMoreMenu()
        UndoSelected()
        //thêm tính năng kiểm tra xem có bấm ra ngoài menu hay không
        //nếu bấm ra ngoài thì sẽ đóng menu; áp dụng tương tự cho quick update box
        //trả lại về các giao diện ban đầu.
        const moreMenu = document.getElementById('moreMenu')
        const updateBox = document.getElementById('updateBox')
        const updateBoxForm = document.getElementById('updateBoxForm')
        const truongChonNhieuRight = document.getElementById('truongChonNhieuRight')
        const updateButtonFinal = document.getElementById('updateButtonFinal')    
        const thongTinInputLeftBox = document.getElementById('thongTinInputLeftBox')    
        const rightContainer = document.getElementById('rightContainer')    
        document.addEventListener("mousedown", (event) => {
            if(!moreMenu.contains(event.target)){
                moreMenu.classList.add(styles.hiddenMenu)
            }
            if(!updateBoxForm.contains(event.target)){
                thongTinInputLeftBox.children[2].innerHTML = '- Chọn trường -'
                thongTinInputLeftBox.children[2].style.color = '#9ba3b2'
                for ( let i = 0 ; i < rightContainer.children.length ; i++){
                    rightContainer.children[i].style.display = 'none'
                }
                //ẩn tất cả những mục khác đi và quay về ô input màu xám đậm
                // ý là chưa cho nhập
                truongChonNhieuRight.style.display = 'block'
                truongChonNhieuRight.style.backgroundColor = '#e2e4e9'
                updateBox.classList.add(styles.hiddenUpdateBox)
                truongChonNhieuRight.classList.add(styles.comboBoxInputDisabled)
                truongChonNhieuRight.setAttribute('disabled','true')
                updateButtonFinal.classList.add(styles.updateYesDisabled)
            }
          });

          
        })

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
                    <span className={styles.actionLeftFixButton}>
                        Sửa
                        <span className={styles.actionLeftFixButtonTip}>
                            Click chuột trái 2 lần vào 1 trường để sửa
                        </span>    
                    </span>
                    
                    {/* load lại danh sách */}
                    <span className={styles.actionLeftRefreshButton}
                        onClick={()=>{{
                            dispatch(fetchCustomersList(`?limit=${limitPagination}&startIndex=${startIndexPagination}`))
                            dispatch(fetchCustomersCount())
                            dispatch(resetLocation())

                        }}}
                    >
                        <span className={styles.refreshPage}>
                            Tải lại danh sách
                        </span>
                    </span>
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
                            <span className={styles.comboBox} id='updateComBoBox'>
                                <Left arr={ArrayChonNhieu}/>
                                <Right/>
                            </span>
                            <span className={styles.updateBottomGroup}>
                                <span className={styles.updateCancel} id='updateCancelButton' onClick={()=>HideQuickUpdate()}>
                                    Hủy bỏ
                                </span>
                                <span className={`${styles.updateYes} ${styles.updateYesDisabled}`} id='updateButtonFinal' onClick={()=>HandleUpdateButton(dispatch)}>
                                    Cập nhật
                                </span>
                            </span>
                            <span className={styles.helpButton}>
                                <span className={`${styles.icon} ${styles.updateHelp}`}>
                                </span>
                                <span className={styles.iconToolTip}>Cập nhật nhanh thông tin <br></br>1 trường trong tiềm năng
                                </span>
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