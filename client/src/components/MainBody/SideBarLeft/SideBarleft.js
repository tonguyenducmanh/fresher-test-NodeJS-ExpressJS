import React, {useEffect}  from "react";

import {HandleSideBarLeft} from './HandleSideBarLeft'
import {HandleCheck} from './HandleCheck'
import styles from './SideBarLeft.module.css'
import TruongChonNhieu from "./Autocomplete/TruongChonNhieu";
import { Array } from "./Array/Array";
const SideBarLeft = () =>{
        useEffect( () =>{
                HandleCheck()
        })
    return (
        
        <div className={styles.container} id='sideBarLeft'>
           <div className={styles.filterContainer}>
           <div className={`${styles.SideBarButtonLeft} ${styles.icon}`} id='sideBarLeftButton' onClick={HandleSideBarLeft}></div>
            <div className={styles.box} >
                <div className={`${styles.filterSave} ${styles.icon}`}>Bộ lọc đã lưu</div>
                <div className={`${styles.filterBox} ${styles.icon}`}>Lọc tiềm năng theo</div>
                <div className={styles.filterBoxList}>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Thẻ
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Xưng hô
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Họ và tên
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Chức danh
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                ĐT di động
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                ĐT cơ quan
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Email cá nhân
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Email cơ quan
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Tổ chức
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Địa chỉ
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Tỉnh/Thành phố
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Quận/Huyện
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Phường/Xã
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Nguồn gốc
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Loại hình
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Lĩnh vực
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Mô tả
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Doanh thu
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Dùng chung
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                    <div className={styles.filterSelect}>
                        <div className={ `${styles.icon} ${styles.filterItem}`} >
                                Zalo
                        </div>
                        <TruongChonNhieu arr={Array}/>
                        <input className={styles.filterTextContent}/>
                    </div>
                </div>
            </div>
           </div>
           <div className={styles.filterAction}>
                <span className={styles.filterActionCancel}>
                        Bỏ lọc
                </span>
                <span className={styles.filterActionApply}>
                        Áp dụng
                </span>
                <span className={styles.filterActionSave}>
                        Lưu
                </span>
           </div>
        </div>
    )
}
export default SideBarLeft