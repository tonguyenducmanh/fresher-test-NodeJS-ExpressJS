import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import { fetchCustomersList } from '../../features/customers/customersSlice'
import { fetchCustomersCount } from '../../features/customers/customersSlice';
import { resetLocation } from '../../features/location/locationSlice';
import { fetchFiltersList } from "../../features/filters/filtersSlice";

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
    const searchString = useSelector(state => state.customers.searchString)
    const customerFilter = useSelector(state => state.customers.customerFilter)
    const count = useSelector(state => state.pagination.count)
    useEffect(()=>{
        const data = new FormData()
        data.append("searchString", searchString)
        data.append("limit", limitPagination)
        data.append("startIndex", startIndexPagination)
        data.append("theString", customerFilter.theString)
        data.append("theCondition", customerFilter.theCondition)
        data.append("xunghoString", customerFilter.xunghoString)
        data.append("xunghoCondition", customerFilter.xunghoCondition)
        data.append("hovademString", customerFilter.hovademString)
        data.append("hovademCondition", customerFilter.hovademCondition)
        data.append("tenString", customerFilter.tenString)
        data.append("tenCondition", customerFilter.tenCondition)
        data.append("phongbanString", customerFilter.phongbanString)
        data.append("phongbanCondition", customerFilter.phongbanCondition)
        data.append("chucdanhString", customerFilter.chucdanhString)
        data.append("chucdanhCondition", customerFilter.chucdanhCondition)
        data.append("dtdidongString", customerFilter.dtdidongString)
        data.append("dtdidongCondition", customerFilter.dtdidongCondition)
        data.append("dtcoquanString", customerFilter.dtcoquanString)
        data.append("dtcoquanCondition", customerFilter.dtcoquanCondition)
        data.append("loaitiemnangString", customerFilter.loaitiemnangString)
        data.append("loaitiemnangCondition", customerFilter.loaitiemnangCondition)
        data.append("nguongocString", customerFilter.nguongocString)
        data.append("nguongocCondition", customerFilter.nguongocCondition)
        data.append("zaloString", customerFilter.zaloString)
        data.append("zaloCondition", customerFilter.zaloCondition)
        data.append("emailcanhanString", customerFilter.emailcanhanString)
        data.append("emailcanhanCondition", customerFilter.emailcanhanCondition)
        data.append("emailcoquanString", customerFilter.emailcoquanString)
        data.append("emailcoquanCondition", customerFilter.emailcoquanCondition)
        data.append("tochucString", customerFilter.tochucString)
        data.append("tochucCondition", customerFilter.tochucCondition)
        data.append("masothueString", customerFilter.masothueString)
        data.append("masothueCondition", customerFilter.masothueCondition)
        data.append("taikhoannganhangString", customerFilter.taikhoannganhangString)
        data.append("taikhoannganhangCondition", customerFilter.taikhoannganhangCondition)
        data.append("motainganhangString", customerFilter.motainganhangString)
        data.append("motainganhangCondition",customerFilter.motainganhangCondition)
        data.append("ngaythanhlapString",customerFilter.ngaythanhlapString)
        data.append("ngaythanhlapCondition",customerFilter.ngaythanhlapCondition)
        data.append("loaihinhString",customerFilter.loaihinhString)
        data.append("loaihinhCondition",customerFilter.loaihinhCondition)
        data.append("linhvucString",customerFilter.linhvucString)
        data.append("linhvucCondition",customerFilter.linhvucCondition)
        data.append("nganhngheString",customerFilter.nganhngheString)
        data.append("nganhngheCondition",customerFilter.nganhngheCondition)
        data.append("doanhthuString",customerFilter.doanhthuString)
        data.append("doanhthuCondition",customerFilter.doanhthuCondition)
        data.append("quocgiaString",customerFilter.quocgiaString)
        data.append("quocgiaCondition",customerFilter.quocgiaCondition)
        data.append("tinhthanhphoString",customerFilter.tinhthanhphoString)
        data.append("tinhthanhphoCondition",customerFilter.tinhthanhphoCondition)
        data.append("quanhuyenString",customerFilter.quanhuyenString)
        data.append("quanhuyenCondition",customerFilter.quanhuyenCondition)
        data.append("phuongxaString",customerFilter.phuongxaString)
        data.append("phuongxaCondition",customerFilter.phuongxaCondition)
        data.append("sonhaString",customerFilter.sonhaString)
        data.append("sonhaCondition",customerFilter.sonhaCondition)
        data.append("motaString",customerFilter.motaString)
        data.append("motaCondition",customerFilter.motaCondition)
        data.append("dungchungString",customerFilter.dungchungString)
        data.append("dungchungCondition",customerFilter.dungchungCondition)

        const actionLeftRefreshButton = document.getElementsByClassName(styles.actionLeftRefreshButton)

        const actionLeftRefreshButtonEvent = ()=>{
            dispatch(fetchCustomersList(data))
            dispatch(fetchCustomersCount(data))
            dispatch(fetchFiltersList())
            dispatch(resetLocation())
        }
        for(let i =0 ; i < actionLeftRefreshButton.length ; i++){
                actionLeftRefreshButton[i].addEventListener('click', actionLeftRefreshButtonEvent)
        }
        return()=>{
            for(let i =0 ; i < actionLeftRefreshButton.length ; i++){
                    actionLeftRefreshButton[i].removeEventListener('click', actionLeftRefreshButtonEvent)
            }
        }
    },[dispatch,findList,startIndexPagination,limitPagination,searchString,customerFilter,count])
    useEffect(()=>{
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
        
        const mousedownEvent = (event) => {
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
          }
        document.addEventListener("mousedown",mousedownEvent );
        return () =>{
            document.removeEventListener("mousedown",mousedownEvent )
            }
          
        })

    useEffect(() =>{
        const tdIds =  document.getElementsByClassName(stylesTwo.tdId)
        const checkedButton =  document.getElementsByClassName(stylesTwo.iconButtonCustomers)
        const moreButton = document.getElementById('moreButton')
        
        const moreButtonEvent =() =>{
            let idsString = []
            for( let i = 0 ; i < tdIds.length ; i ++){
                if(checkedButton[i].classList.contains(stylesTwo.iconHeadingChecked)){
                    idsString = idsString.concat(tdIds[i].textContent)
                }
            }
            const data = new FormData()

            for(let k=0; k< idsString.length; k++){
                if(idsString[k] !==''){
                    data.append('idsString[]', idsString[k])
                }else{
                    data.append('idsString[]', '')
                }
            }
            dispatch(fetchCustomersFind(data))

        }

        moreButton.addEventListener('click', moreButtonEvent)
        return () =>{
        moreButton.removeEventListener('click', moreButtonEvent)
        }
    },[dispatch, findList])
    
    useEffect(() =>{
        const deleteButton = document.getElementById('deleteButton')
        const deleteBox = document.getElementsByClassName(stylesThree.container)
        const moreMenu = document.getElementById('moreMenu')

        const deleteButtonEvent = () =>{
            deleteBox[0].classList.remove(stylesThree.hiddenBox)
            moreMenu.classList.add(styles.hiddenMenu)
        }
        deleteButton.addEventListener('click',deleteButtonEvent)
        return () =>{
            deleteButton.removeEventListener('click',deleteButtonEvent)
        }
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
                    id='actionLeftRefreshButton'
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
                    <span className={styles.actionLeftMoreButton} id='moreButton' onClick={()=>OpenMoreMenu()}>
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
                    <span className={styles.addAndMenuButton} >
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