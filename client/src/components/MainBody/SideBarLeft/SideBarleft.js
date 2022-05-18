import React, {useEffect}  from "react";

import {HandleSideBarLeft} from './HandleSideBarLeft'
import {HandleCheck} from './HandleCheck'
import styles from './SideBarLeft.module.css'

const SideBarLeft = () =>{
        useEffect( () =>{
                HandleCheck()
        })
    return (
        
        <div className={styles.container} id='sideBarLeft'>
            <div className={`${styles.SideBarButtonLeft} ${styles.icon}`} id='sideBarLeftButton' onClick={HandleSideBarLeft}></div>
            <div className={styles.box} >
                <div className={`${styles.filterSave} ${styles.icon}`}>Bộ lọc đã lưu</div>
                <div className={`${styles.filterBox} ${styles.icon}`}>Lọc tiềm năng theo</div>
                <div className={styles.filterBoxList} id='filterBoxList'>
                    <div className={ `${styles.icon} ${styles.filterItem}`} >
                            Thẻ
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            Xưng hô
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`} >
                            Họ và tên
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            Chức danh
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`} >
                            ĐT di động
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            ĐT cơ quan
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`} >
                            Email cơ quan
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            Email cá nhân
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`} >
                            Tổ chức
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            Địa chỉ
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`} >
                            Tỉnh/Thành phố
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            Quận/Huyện
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`} >
                            Phường/Xã
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            Nguồn gốc
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`} >
                            Loại hình
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            Lĩnh vực
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            Mô tả
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`} >
                            Bố cục
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            Chủ sở hữu
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`} >
                            Doanh thu
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            Dùng chung
                    </div>
                    <div className={ `${styles.icon} ${styles.filterItem}`}>
                            Facebook
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBarLeft