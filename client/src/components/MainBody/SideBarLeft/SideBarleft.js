import React, {useEffect}  from "react";

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
import { Array } from "./Array/Array";
const SideBarLeft = () =>{
        useEffect(() =>{
                HandleCheck()
                HandleUncheckAll()
                HandleTyping()
                HandleDeleteValue()
                HandleApply()
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
                                Thẻ
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Xưng hô
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Họ và tên
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Chức danh
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                ĐT di động
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                ĐT cơ quan
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Email cá nhân
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Email cơ quan
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Tổ chức
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Địa chỉ
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Tỉnh/Thành phố
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Quận/Huyện
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Phường/Xã
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Nguồn gốc
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Loại hình
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Lĩnh vực
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Mô tả
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Doanh thu
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Dùng chung
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                        <span className={styles.clearInput}></span>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Zalo
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
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