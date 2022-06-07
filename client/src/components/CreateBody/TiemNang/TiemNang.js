import React, {  useEffect } from "react";

import styles from './TiemNang.module.css'
import {useDispatch, useSelector, shallowEqual } from "react-redux";
import XemNgay from "../XemNgay/XemNgay";
import { TiemNangValidate } from "../AutoComplete/FormValidate/TiemNangValidate";
import { ClearInputValue } from "./ClearInputValue";
const TiemNang = () =>{
    const dispatch = useDispatch()

    const maBiTrung = useSelector(state => state.check.check, shallowEqual)


    const userCount = useSelector(state => state.count.count) + 1
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    const newIDCout =zeroPad(userCount, 15)
    const newTNCount = `TN${newIDCout}`
    useEffect(()=>{
        ClearInputValue()
        TiemNangValidate(dispatch, maBiTrung)
    },[dispatch])
    return (
    <span className={styles.thongTin}>
        <span className={styles.thongTinTitle} >Mã tiềm năng</span>
        <span className={styles.thongTinInputFather} id='dienTiemNang'>
            <input className={`${styles.thongTinInput} `} 
            autoComplete="off" 
            id='maTiemNang'
            defaultValue={newTNCount}
            />
            <span className={styles.thonngTinWarningText}>Mã tiềm năng không được để trống</span>
            <span className={styles.thonngTinWarningText}>Mã tiềm năng phải bắt đầu bằng TN</span>
            <span className={styles.thonngTinWarningText}>Mã tiềm năng phải theo sau bằng chữ số</span>
            <span className={styles.thonngTinWarningText}>
                Mã tiềm năng đã bị trùng. 
                <XemNgay/>   
            </span>
            <span className={styles.thonngTinWarningText}>Mã tiềm năng phải đủ 17 ký tự</span>
            <span className={styles.clearInput}></span>
        </span>
    </span>
    )
}

export default TiemNang