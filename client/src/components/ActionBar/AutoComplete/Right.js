import React, {useEffect} from 'react';

import styles from './Right.module.css'

import TruongChonNhieu from './RightCustom/TruongChonNhieu'

import { HandleCheck } from './HandleClick/HandleCheck';

import {XungHo} from '../../CreateBody/AutoComplete/Array/XungHo'
import {ChucDanh} from '../../CreateBody/AutoComplete/Array/ChucDanh'
import {DoanhThu} from '../../CreateBody/AutoComplete/Array/DoanhThu'
import {GioiTinh} from '../../CreateBody/AutoComplete/Array/GioiTinh'
import {LinhVuc} from '../../CreateBody/AutoComplete/Array/LinhVuc'
import {LoaiHinh} from '../../CreateBody/AutoComplete/Array/LoaiHinh'
import {NganhNghe} from '../../CreateBody/AutoComplete/Array/NganhNghe'
import {NguonGoc} from '../../CreateBody/AutoComplete/Array/NguonGoc'
import {PhongBan} from '../../CreateBody/AutoComplete/Array/PhongBan'
import {QuocGia} from '../../CreateBody/AutoComplete/Array/QuocGia'

export default function TruongChonNhieuRight() {
    useEffect(()=>{
        HandleCheck()
    })
        return (
            <span className={styles.rightContainer} id='rightContainer'>
                <TruongChonNhieu arr={XungHo} id='XungHoQuick'/>
                <TruongChonNhieu arr={ChucDanh} id='ChucDanhQuick'/>
                <TruongChonNhieu arr={DoanhThu} id='DoanhThuQuick'/>
                <TruongChonNhieu arr={GioiTinh} id='GioiTinhQuick'/>
                <TruongChonNhieu arr={LinhVuc} id='LinhVucQuick'/>
                <TruongChonNhieu arr={LoaiHinh} id='LoaiHinhQuick'/>
                <TruongChonNhieu arr={NganhNghe} id='NganhNgheQuick'/>
                <TruongChonNhieu arr={NguonGoc} id='NguonGocQuick'/>
                <TruongChonNhieu arr={PhongBan} id='PhongBanQuick'/>
                <TruongChonNhieu arr={QuocGia} id='QuocGiaQuick'/>
                <input className={`${styles.comboBoxInput} ${styles.comboBoxInputDisabled}`} 
                    disabled={true} 
                    id='truongChonNhieuRight'
                />
                <input type='file' className={`${styles.comboBoxInput} ${styles.comboBoxInputFile} ${styles.comboBoxInputDisabled}`} 
                    id='AnhQuick'
                    placeholder='Chọn ảnh'
                />
                <span className={styles.iconCheck} id='DungChungQuick'></span>
                <span className={styles.diaChiInput} id='DiaChiQuick'>Trường này bị phụ thuộc</span>
            </span>
        );
}