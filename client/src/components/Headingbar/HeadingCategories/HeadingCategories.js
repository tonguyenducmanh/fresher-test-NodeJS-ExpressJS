import React from "react";
import { Link } from "react-router-dom";

import styles from './HeadingCategories.module.css'
const HeadingCategories = () =>{
    
    return (
        <div className={styles.categories}>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconOne}`}></span>
                <Link to="/others" className={styles.itemText}>Bàn làm việc</Link>
            </span>
            <span className={`${styles.item} ${styles.itemSelected}`}>
                <span className={`${styles.icon} ${styles.iconTwo}`}></span>
                <Link to="/"  className={styles.itemText}>Tiềm năng</Link>
            </span>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconThree}`}></span>
                <Link to="/others"  className={styles.itemText}>Chào hàng</Link>
            </span>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconFour}`}></span>
                <Link to="/others"  className={styles.itemText}>Liên hệ</Link>
            </span>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconFive}`}></span>
                <Link to="/others"  className={styles.itemText}>Khách hàng</Link>
            </span>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconSix}`}></span>
                <Link to="/others"  className={styles.itemText}>Cơ hội</Link>
            </span>
            <span className={styles.item}>
                <span className={`${styles.icon} ${styles.iconSeven}`}></span>
                <Link to="/others"  className={styles.itemText}>Báo giá</Link>
            </span>
            <span className={`${styles.item} `}>
                <span className={`${styles.icon} ${styles.iconEight}`}></span>
                <Link to="/others"  className={styles.itemText}>Đơn hàng</Link>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenTwo}`}>
                <span className={`${styles.icon} ${styles.iconNine}`}></span>
                <Link to="/others"  className={styles.itemText}>Hóa đơn</Link>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenTwo}`}>
                <span className={`${styles.icon} ${styles.iconTen}`}></span>
                <Link to="/others"  className={styles.itemText}>Ao cơ hội</Link>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenThree}`}>
                <span className={`${styles.icon} ${styles.iconEleven}`}></span>
                <Link to="/others"  className={styles.itemText}>Hoạt động</Link>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenThree}`}>
                <span className={`${styles.icon} ${styles.iconTwelve}`}></span>
                <Link to="/others"  className={styles.itemText}>Mục tiêu</Link>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenThree}`}>
                <span className={`${styles.icon} ${styles.iconThirteen}`}></span>
                <Link to="/others"  className={styles.itemText}>Chiến dịch</Link>
            </span>
            <span className={`${styles.item} ${styles.itemHiddenThree}`}>
                <span className={`${styles.icon} ${styles.iconFourteen}`}></span>
                <Link to="/others"  className={styles.itemText}>Báo cáo</Link>
            </span>
            <span className={`${styles.item} ${styles.lastItem}`}>
                <span className={`${styles.icon} ${styles.iconFifteen}`}></span>
                <span className={styles.itemText}>Khác</span>
                <span className={styles.itemOtherList}>
                    <span className={`${styles.item} ${styles.itemOtherHiddenTwo}`}>
                        <span className={`${styles.icon} ${styles.iconNine}`}></span>
                        <Link to="/others"  className={styles.itemText}>Hóa đơn</Link>
                    </span>
                    <span className={`${styles.item} ${styles.itemOtherHiddenTwo}`}>
                        <span className={`${styles.icon} ${styles.iconTen}`}></span>
                        <Link to="/others"  className={styles.itemText}>Ao cơ hội</Link>
                    </span>
                    <span className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        <span className={`${styles.icon} ${styles.iconEleven}`}></span>
                        <Link to="/others"  className={styles.itemText}>Hoạt động</Link>
                    </span>
                    <span className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        <span className={`${styles.icon} ${styles.iconTwelve}`}></span>
                        <Link to="/others"  className={styles.itemText}>Mục tiêu</Link>
                    </span>
                    <span className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        <span className={`${styles.icon} ${styles.iconThirteen}`}></span>
                        <Link to="/others"  className={styles.itemText}>Chiến dịch</Link>
                    </span>
                    <span className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        <span className={`${styles.icon} ${styles.iconFourteen}`}></span>
                        <Link to="/others"  className={styles.itemText}>Báo cáo</Link>
                    </span>
                </span>
            </span>
        </div>
    )
}

export default HeadingCategories