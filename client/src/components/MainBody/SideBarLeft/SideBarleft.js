import React, {useEffect}  from "react";

import { useDispatch } from 'react-redux'

import {HandleSideBarLeft} from './HandleClick/HandleSideBarLeft'
import {HandleCheck} from './HandleClick/HandleCheck'
import { HandleUncheckAll } from "./HandleClick/HandleUncheckAll";
import { HandleTyping } from "./HandleClick/HandleTyping";
import { HandleDeleteValue } from "./HandleClick/HandleDeleteValue";
import { HandleApply } from "./HandleClick/HandleApply";
import { HandleSaveFilter } from "./HandleClick/HandleSaveFilter";

import { HandleSearch } from "./HandleSearch/HandleSearch";
import { HandleFilterSave } from "./HandleFilterSave/HandleFilterSave";

import styles from './SideBarLeft.module.css'
import TruongChonNhieu from "./Autocomplete/TruongChonNhieu";
import TruongChonBoolean from "./Autocomplete/TruongChonBoolean";
import { Array } from "./Array/Array";
import { ArrayBoolean } from "./Array/ArrayBoolean";
const SideBarLeft = () =>{
        const dispatch = useDispatch()

        useEffect(() =>{
                HandleCheck()
                HandleUncheckAll(dispatch)
                HandleTyping()
                HandleDeleteValue()
                HandleApply(dispatch)
                HandleSaveFilter()
        },[])
    return (
        
        <div className={styles.container} id='sideBarLeft'>
           <div className={styles.filterContainer}>
           <div className={`${styles.SideBarButtonLeft} ${styles.icon}`} id='sideBarLeftButton' onClick={HandleSideBarLeft}></div>
            <div className={styles.box} >
                <HandleFilterSave/>
                <HandleSearch/>
                <div className={styles.filterBoxList}>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Xưng hô
                        </div>
                        <TruongChonNhieu arr={Array} id='xunghoFilter' />
                        <input className={styles.filterTextContent} id='xunghoFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Loại tiềm năng
                        </div>
                        <TruongChonNhieu arr={Array} id='loaitiemnangFilter' />
                        <input className={styles.filterTextContent} id='loaitiemnangFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Họ và đệm
                        </div>
                        <TruongChonNhieu arr={Array} id='hovademFilter' />
                        <input className={styles.filterTextContent} id='hovademFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Tên
                        </div>
                        <TruongChonNhieu arr={Array} id='tenFilter' />
                        <input className={styles.filterTextContent} id='tenFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Chức danh
                        </div>
                        <TruongChonNhieu arr={Array} id='chucdanhFilter' />
                        <input className={styles.filterTextContent} id='chucdanhFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                ĐT di động
                        </div>
                        <TruongChonNhieu arr={Array} id='dtdidongFilter' />
                        <input className={styles.filterTextContent} id='dtdidongFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                ĐT cơ quan
                        </div>
                        <TruongChonNhieu arr={Array} id='dtcoquanFilter' />
                        <input className={styles.filterTextContent} id='dtcoquanFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Email cá nhân
                        </div>
                        <TruongChonNhieu arr={Array} id='emailcanhanFilter' />
                        <input className={styles.filterTextContent} id='emailcanhanFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Email cơ quan
                        </div>
                        <TruongChonNhieu arr={Array} id='emailcoquanFilter' />
                        <input className={styles.filterTextContent} id='emailcoquanFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Tổ chức
                        </div>
                        <TruongChonNhieu arr={Array} id='tochucFilter' />
                        <input className={styles.filterTextContent} id='tochucFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Phòng ban
                        </div>
                        <TruongChonNhieu arr={Array} id='phongbanFilter' />
                        <input className={styles.filterTextContent} id='phongbanFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                               Mã số thuế
                        </div>
                        <TruongChonNhieu arr={Array} id='masothueFilter' />
                        <input className={styles.filterTextContent} id='masothueFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                               Tài khoản ngân hàng
                        </div>
                        <TruongChonNhieu arr={Array} id='taikhoannganhangFilter' />
                        <input className={styles.filterTextContent} id='taikhoannganhangFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                               Mở tại ngân hàng
                        </div>
                        <TruongChonNhieu arr={Array} id='motainganhangFilter' />
                        <input className={styles.filterTextContent} id='motainganhangFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                               Ngày thành lập
                        </div>
                        <TruongChonNhieu arr={Array} id='ngaythanhlapFilter' />
                        <input className={styles.filterTextContent} id='ngaythanhlapFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Ngành nghề
                        </div>
                        <TruongChonNhieu arr={Array} id='nganhngheFilter' />
                        <input className={styles.filterTextContent} id='nganhngheFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Tỉnh/Thành phố
                        </div>
                        <TruongChonNhieu arr={Array} id='tinhthanhFilter' />
                        <input className={styles.filterTextContent} id='tinhthanhFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Quốc gia
                        </div>
                        <TruongChonNhieu arr={Array} id='quocgiaFilter' />
                        <input className={styles.filterTextContent} id='quocgiaFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Quận/Huyện
                        </div>
                        <TruongChonNhieu arr={Array} id='quanhuyenFilter' />
                        <input className={styles.filterTextContent} id='quanhuyenFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Phường/Xã
                        </div>
                        <TruongChonNhieu arr={Array} id='phuongxaFilter' />
                        <input className={styles.filterTextContent} id='phuongxaFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Số nhà
                        </div>
                        <TruongChonNhieu arr={Array} id='sonhaFilter' />
                        <input className={styles.filterTextContent} id='sonhaFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Nguồn gốc
                        </div>
                        <TruongChonNhieu arr={Array} id='nguongocFilter' />
                        <input className={styles.filterTextContent} id='nguongocFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Loại hình
                        </div>
                        <TruongChonNhieu arr={Array} id='loaihinhFilter' />
                        <input className={styles.filterTextContent} id='loaihinhFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Lĩnh vực
                        </div>
                        <TruongChonNhieu arr={Array} id='linhvucFilter' />
                        <input className={styles.filterTextContent} id='linhvucFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Mô tả
                        </div>
                        <TruongChonNhieu arr={Array} id='motaFilter' />
                        <input className={styles.filterTextContent} id='motaFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Doanh thu
                        </div>
                        <TruongChonNhieu arr={Array} id='doanhthuFilter' />
                        <input className={styles.filterTextContent} id='doanhthuFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem} ${styles.filterBoolean}`} >
                                Dùng chung
                        </div>
                        <TruongChonBoolean arr={ArrayBoolean} id='dungchungFilter' />
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Zalo
                        </div>
                        <TruongChonNhieu arr={Array} id='zaloFilter' />
                        <input className={styles.filterTextContent} id='zaloFilterValue'/>
                        <span className={styles.clearInput}></span>
                    </div>
                </div>
            </div>
           </div>
           <div className={styles.filterAction}>
                <button className={styles.filterActionCancel}>
                        Bỏ lọc
                </button>
                <button className={`${styles.filterActionApply} ${styles.filterActionApplyDisabled}`}>
                        Áp dụng
                </button>
                <button className={styles.filterActionSave}>
                        Lưu
                </button>
           </div>
        </div>
    )
}
export default SideBarLeft