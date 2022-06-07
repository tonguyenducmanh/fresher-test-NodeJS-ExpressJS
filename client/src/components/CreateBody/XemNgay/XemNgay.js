import React, { useEffect } from "react";

import styles from './XemNgay.module.css'
import {useSelector, shallowEqual } from "react-redux";
import { XemNgayValidate } from "../AutoComplete/FormValidate/XemNgayValidate";

const XemNgay = () =>{
    const maBiTrung = useSelector(state => state.check.check, shallowEqual)
    useEffect(()=>{
        XemNgayValidate()

    }, [])
    return (
        <span className={`${styles.xemNgayText}`} id='xemNgay'>
        Xem ngay 
        <span className={styles.xemNgaySmallBox} style={{display:'none'}}>
            <span className={styles.xemNgaySmallRow}>
                <span>Mã tiềm năng</span>
                <span id='oldTiemNangValueCheck'>{maBiTrung[0]? `${maBiTrung[0]._id}` : ''}</span>
            </span>
            <span className={styles.xemNgaySmallRow}>
                <span>Họ và tên</span>
                <span>{maBiTrung[0]? `${maBiTrung[0].hovadem} ${maBiTrung[0].ten}` : ''}</span>
            </span>
            <span className={styles.xemNgaySmallRow}>
                <span>Tỉnh thành</span>
                <span>{maBiTrung[0]? `${maBiTrung[0].tinhthanhpho}` : ''}</span>
            </span>
            <span className={styles.xemNgaySmallRow}>
                <span>Quận huyện</span>
                <span>{maBiTrung[0]? `${maBiTrung[0].quanhuyen}` : ''}</span>
            </span>
        </span>
    </span> 
    )
}

export default XemNgay