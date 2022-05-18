import React from "react";

import { HandleSideBarRight } from "./HandleSideBarRight";
import styles from './SideBarRight.module.css'

const SideBarRight = () =>{

    return (
        <div className={styles.container} id='sideBarRight'>
            <div className={`${styles.SideBarButtonRight} ${styles.icon}`} id='sideBarRightButton' onClick={HandleSideBarRight}></div>
            <div className={styles.SideBarMenu}>
                <span className={`${styles.icon} ${styles.firstIcon}`}></span>
                <span className={`${styles.icon} ${styles.secondIcon}`}></span>
                <span className={`${styles.icon} ${styles.thirdIcon}`}></span>
                <span className={`${styles.icon} ${styles.fourthIcon}`}></span>
            </div>
            <div className={styles.SideBarTitle}>Lịch sử giao dịch</div>
            <div className={styles.itemBox}>
                <span className={styles.itemBoxImage}>

                </span>
                <span className={styles.itemBoxContent}>
                    <span className={styles.itemTile}>ghi chú</span><br/>
                    <span className={styles.itemContent}>Nguyễn Văn Hà (A006) . 12/08/2021</span>
                </span>
            </div>
        </div>
    )
}

export default SideBarRight