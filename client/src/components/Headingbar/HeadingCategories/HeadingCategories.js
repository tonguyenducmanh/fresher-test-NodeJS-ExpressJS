import React from "react";

import styles from './HeadingCategories.module.css'
const HeadingCategories = () =>{
    
    return (
        <div className={styles.categories}>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconOne}`}></span>
                <a href="#" className={styles.itemText}>Bàn làm việc</a>
            </span>
            <span className={`${styles.item} ${styles.itemSelected}`}>
                <span className={`${styles.icon} ${styles.iconTwo}`}></span>
                <a href="#"  className={styles.itemText}>Tiềm năng</a>
            </span>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconThree}`}></span>
                <a href="#"  className={styles.itemText}>Chào hàng</a>
            </span>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconFour}`}></span>
                <a href="#"  className={styles.itemText}>Liên hệ</a>
            </span>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconFive}`}></span>
                <a href="#"  className={styles.itemText}>Khách hàng</a>
            </span>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconSix}`}></span>
                <a href="#"  className={styles.itemText}>Cơ hội</a>
            </span>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconSeven}`}></span>
                <a href="#"  className={styles.itemText}>Báo giá</a>
            </span>
            <span className={`${styles.item} `}>
                <span className={`${styles.icon} ${styles.iconEight}`}></span>
                <a href="#"  className={styles.itemText}>Đơn hàng</a>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenTwo}`}>
                <span className={`${styles.icon} ${styles.iconNine}`}></span>
                <a href="#"  className={styles.itemText}>Hóa đơn</a>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenTwo}`}>
                <span className={`${styles.icon} ${styles.iconTen}`}></span>
                <a href="#"  className={styles.itemText}>Ao cơ hội</a>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenThree}`}>
                <span className={`${styles.icon} ${styles.iconEleven}`}></span>
                <a href="#"  className={styles.itemText}>Hoạt động</a>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenThree}`}>
                <span className={`${styles.icon} ${styles.iconTwelve}`}></span>
                <a href="#"  className={styles.itemText}>Mục tiêu</a>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenThree}`}>
                <span className={`${styles.icon} ${styles.iconThirteen}`}></span>
                <a href="#"  className={styles.itemText}>Chiến dịch</a>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenThree}`}>
                <span className={`${styles.icon} ${styles.iconFourteen}`}></span>
                <a href="#"  className={styles.itemText}>Báo cáo</a>
            </span>
            <span className={`${styles.item} ${styles.lastItem}`}>
                <span className={`${styles.icon} ${styles.iconFifteen}`}></span>
                <span className={styles.itemText}>Khác</span>
                <span className={styles.itemOtherList}>
                    <span className={`${styles.item} ${styles.itemOtherHiddenTwo}`}>
                        <span className={`${styles.icon} ${styles.iconNine}`}></span>
                        <a href="#"  className={styles.itemText}>Hóa đơn</a>
                    </span>
                    <span className={`${styles.item} ${styles.itemOtherHiddenTwo}`}>
                        <span className={`${styles.icon} ${styles.iconTen}`}></span>
                        <a href="#"  className={styles.itemText}>Ao cơ hội</a>
                    </span>
                    <span className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        <span className={`${styles.icon} ${styles.iconEleven}`}></span>
                        <a href="#"  className={styles.itemText}>Hoạt động</a>
                    </span>
                    <span className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        <span className={`${styles.icon} ${styles.iconTwelve}`}></span>
                        <a href="#"  className={styles.itemText}>Mục tiêu</a>
                    </span>
                    <span className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        <span className={`${styles.icon} ${styles.iconThirteen}`}></span>
                        <a href="#"  className={styles.itemText}>Chiến dịch</a>
                    </span>
                    <span className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        <span className={`${styles.icon} ${styles.iconFourteen}`}></span>
                        <a href="#"  className={styles.itemText}>Báo cáo</a>
                    </span>
                </span>
            </span>
        </div>
    )
}

export default HeadingCategories