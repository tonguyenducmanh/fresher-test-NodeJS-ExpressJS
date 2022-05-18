import React from "react";

import styles from './HeadingTop.module.css'
const HeadingTop = () =>{
    
    return (
            <div className={styles.heading}>
                <span className={styles.headingMenu}>
                    <a href="#" className={`${styles.icon} ${styles.headingHomeMenu}`}></a>
                    <a href="#" className={`${styles.icon} ${styles.headingHomeLogo}`}></a>
                </span>
                <span className={styles.headingSearch}>
                    <span className={`${styles.icon} ${styles.headingSearchIcon}`}></span>
                    <input className={styles.headingSearchInput} placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng"></input>
                </span>
                <span className={styles.headingToolRight}>
                <a href="#" className={`${styles.icon} ${styles.headingToolOne}`}></a>
                <a href="#" className={`${styles.icon} ${styles.headingToolTwo}`}></a>
                <a href="#" className={`${styles.icon} ${styles.headingToolThree}`}></a>
                <a href="#" className={`${styles.icon} ${styles.headingToolFour}`}></a>
                <a href="#" className={`${styles.icon} ${styles.headingToolFive}`}></a>
                <a href="#" className={`${styles.icon} ${styles.headingToolSix}`}></a>
                <a href="#" className={`${styles.icon} ${styles.headingToolSeven}`}></a>
                </span>
            </div>
    )
}

export default HeadingTop