import React, {useEffect, useState} from "react";
import styles from './ActionBar.module.css'
import {UndoSelected} from './UndoSelected'
const ActionBar = () =>{
    useEffect(()=>{
        UndoSelected()
    },[])
    return (
        <div className={styles.actionbar}>
            <div className={styles.box}>
                <span className={`${styles.actionLeft}`} id='actionBarOne'>
                    <span className={styles.actionLeftAllButton} >Tất cả tiềm năng</span>
                    <span className={styles.actionLeftFixButton}>Sửa</span>
                    <span className={styles.actionLeftRefreshButton}></span>
                </span>
                <span className={`${styles.actionLeft} ${styles.hiddenComponent}`} id='actionBarTwo'>
                    <span className={styles.actionLeftSelectedCountButton} id='countCheck'></span>
                    <span className={styles.actionLeftUnCheckButton} id='undoSelected'>Bỏ chọn</span>
                    <span className={styles.actionLeftUpdateButton}>Cập nhật thông tin</span>
                    <span className={styles.actionLeftMoreButton}>
                        <span className={styles.actionLeftMoreMenu}>
                            <span className={styles.actionLeftExportButton}>Xuất khẩu</span>
                            <span className={styles.actionLeftDeleteButton}>Xóa</span>
                        </span>
                    </span>
                </span>
                <span className={styles.actionRight}>
                    <span className={styles.addAndMenuButton}>
                        <span className={styles.addNewButton}>Thêm</span>
                        <span className={styles.menuButton}></span>
                    </span>
                    <span className={styles.menuButtonTwo}></span>
                    <span className={styles.menuButtonThree}></span>
                </span>
            </div>
        </div>
    )
}

export default ActionBar