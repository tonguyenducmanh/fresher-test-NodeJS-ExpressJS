import React from "react";

import { HandleSideBarRight } from "./HandleSideBarRight";
import styles from './SideBarRight.module.css'

const SideBarRight = () =>{

    return (
        <div className={`${styles.container}`} id='sideBarRight' >
            <div className={` ${styles.icon} ${styles.SideBarButtonRight}`} id='sideBarRightButton' onClick={HandleSideBarRight}></div>
            <div className={styles.rightBox} id='rightBox'>
            <div className={styles.SideBarMenu} title="Tính năng này đang được phát triển">
                <span className={`${styles.icon} ${styles.firstIcon}`}></span>
                <span className={`${styles.icon} ${styles.secondIcon}`}></span>
                <span className={`${styles.icon} ${styles.thirdIcon}`}></span>
                <span className={`${styles.icon} ${styles.fourthIcon}`}></span>
            </div>
            <div className={styles.SideBarTitle} title="Tính năng này đang được phát triển">Lịch sử giao dịch</div>
            <div className={styles.itemBox}>
                <span className={styles.itemBoxImage} title="Tính năng này đang được phát triển">

                </span>
                <span className={styles.itemBoxContent}>
                    <span className={styles.itemTile} title="Tính năng này đang được phát triển">ghi chú</span><br/>
                    <span className={styles.itemContent} title="Tính năng này đang được phát triển">Nguyễn Văn Hà (A006) . 12/08/2021</span>
                </span>
            </div>
            </div>
        </div>
    )
}

export default SideBarRight