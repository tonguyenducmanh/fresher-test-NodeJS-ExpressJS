import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from './HeadingCategories.module.css'
const HeadingCategories = () =>{
    useEffect(()=>{
        const itemElement = document.getElementsByClassName(styles.item)
        const itemOtherList = document.getElementsByClassName(styles.itemOtherList)
        const itemElementEvent = (i)=>{
            return (e)=>{
                for(let p = 0 ; p< itemElement.length ; p++){
                    if(itemElement[p].classList.contains(styles.itemSelected)){
                        itemElement[p].classList.remove(styles.itemSelected)
                    }
                }
                if(!itemElement[i].classList.contains(styles.lastItem)){
                    itemElement[i].classList.add(styles.itemSelected)
                    if( itemElement[i].parentElement.classList.contains(styles.itemOtherList)){
                        itemElement[i].style.border='none'
                    }
                }

            }
        }

        for(let i = 0 ; i < itemElement.length ; i++){
            itemElement[i].addEventListener('click', itemElementEvent(i))
        }
        return()=>{
            for(let i = 0 ; i < itemElement.length; i++){
                itemElement[i].removeEventListener('click', itemElementEvent(i))
            }
        }
    },[])


    return (
        <div className={styles.categories}>
            <Link to="/others" className={styles.item}>
                
                <span className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconOne}`}></span>
                    Bàn làm việc</span>
            </Link>
            <Link to="/" className={`${styles.item} ${styles.itemSelected}`}>
                
                <span   className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconTwo}`}></span>
                Tiềm năng</span>
            </Link>
            <Link to="/others" className={styles.item}>
                
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconThree}`}></span>
                Chào hàng</span>
            </Link>
            <Link to="/others" className={styles.item}>
                
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconFour}`}></span>
                Liên hệ</span>
            </Link>
            <Link to="/others" className={styles.item}>
                
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconFive}`}></span>
                Khách hàng</span>
            </Link>
            <Link to="/others" className={styles.item}>
                
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconSix}`}></span>
                Cơ hội</span>
            </Link>
            <Link to="/others" className={styles.item}>
                
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconSeven}`}></span>
                Báo giá</span>
            </Link>
            <Link to="/others" className={`${styles.item} `}>
                
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconEight}`}></span>
                Đơn hàng</span>
            </Link>
            <Link to="/others" className={`${styles.item} ${styles.itemHiddenTwo}`}>
               
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconNine}`}></span>
                Hóa đơn</span>
            </Link>
            <Link to="/others" className={`${styles.item} ${styles.itemHiddenTwo}`}>
                
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconTen}`}></span>
                Ao cơ hội</span>
            </Link>
            <Link to="/others" className={`${styles.item} ${styles.itemHiddenThree}`}>
                
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconEleven}`}></span>
                Hoạt động</span>
            </Link>
            <Link to="/others" className={`${styles.item} ${styles.itemHiddenThree}`}>
                
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconTwelve}`}></span>
                Mục tiêu</span>
            </Link>
            <Link to="/others" className={`${styles.item} ${styles.itemHiddenThree}`}>
                
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconThirteen}`}></span>
                Chiến dịch</span>
            </Link>
            <Link to="/others" className={`${styles.item} ${styles.itemHiddenThree}`}>
                
                <span  className={styles.itemText}>
                <span className={`${styles.icon} ${styles.iconFourteen}`}></span>
                Báo cáo</span>
            </Link>
            <span className={` ${styles.lastItem}`}>
                <span className={`${styles.icon} ${styles.iconFifteen}`}></span>
                <span className={`${styles.itemText} ${styles.itemOther}`}>Khác</span>
                <span className={styles.itemOtherList}>
                    <Link to="/others" className={`${styles.item} ${styles.itemOtherHiddenTwo}`}>
                        
                        <span  className={styles.itemText}>
                        <span className={`${styles.icon} ${styles.iconNine}`}></span>
                        Hóa đơn</span>
                    </Link>
                    <Link to="/others" className={`${styles.item} ${styles.itemOtherHiddenTwo}`}>
                       
                        <span  className={styles.itemText}>
                        <span className={`${styles.icon} ${styles.iconTen}`}></span>
                        Ao cơ hội</span>
                    </Link>
                    <Link to="/others" className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        
                        <span  className={styles.itemText}>
                        <span className={`${styles.icon} ${styles.iconEleven}`}></span>
                        Hoạt động</span>
                    </Link>
                    <Link to="/others" className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        
                        <span  className={styles.itemText}>
                        <span className={`${styles.icon} ${styles.iconTwelve}`}></span>
                        Mục tiêu</span>
                    </Link>
                    <Link to="/others" className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        
                        <span  className={styles.itemText}>
                        <span className={`${styles.icon} ${styles.iconThirteen}`}></span>
                        Chiến dịch</span>
                    </Link>
                    <Link to="/others" className={`${styles.item} ${styles.itemOtherHiddenThree}`}>
                        
                        <span  className={styles.itemText}>
                        <span className={`${styles.icon} ${styles.iconFourteen}`}></span>
                        Báo cáo</span>
                    </Link>
                </span>
            </span>
        </div>
    )
}

export default HeadingCategories