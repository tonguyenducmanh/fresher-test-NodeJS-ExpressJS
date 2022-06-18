import React from "react";

import styles from './HeadingTop.module.css'
const HeadingTop = () =>{
    
    return (
            <div className={styles.heading}>
                <span className={styles.headingMenu}>
                    <a href="/" className={`${styles.icon} ${styles.headingHomeMenu}`}></a>
                    <a href="/" className={`${styles.icon} ${styles.headingHomeLogo}`}></a>
                </span>
                <span className={styles.headingSearch}>
                    <span className={`${styles.icon} ${styles.headingSearchIcon}`}></span>
                    <input className={styles.headingSearchInput} 
                        placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng"
                        id='searchInput'
                        autoComplete="off"
                    ></input>
                </span>
                <span className={styles.headingToolRight}>
                <a href="/" className={`${styles.icon} ${styles.headingToolOne}`} title='Tính năng này đang được phát triển'></a>
                <a href="/" className={`${styles.icon} ${styles.headingToolTwo}`} title='Tính năng này đang được phát triển'></a>
                <a href="/" className={`${styles.icon} ${styles.headingToolThree}`} title='Tính năng này đang được phát triển'></a>
                <a href="/" className={`${styles.icon} ${styles.headingToolFour}`} title='Tính năng này đang được phát triển'></a>
                <a href="/" className={`${styles.icon} ${styles.headingToolFive}`} title='Tính năng này đang được phát triển'></a>
                <a href="/" className={`${styles.icon} ${styles.headingToolSix}`} title='Tính năng này đang được phát triển'></a>
                <a href="/" className={`${styles.icon} ${styles.headingToolSeven}`} title='Tính năng này đang được phát triển'></a>
                </span>
            </div>
    )
}

export default HeadingTop