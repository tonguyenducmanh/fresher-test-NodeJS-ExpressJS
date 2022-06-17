import React from "react";

import { HandleSideBarRight } from "./HandleSideBarRight";
import { useSelector } from 'react-redux'
import styles from './SideBarRight.module.css'

const SideBarRight = () =>{
    const history = useSelector((state) => state.history.history)
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
            <div className={styles.historyBox}>
            {history[0] !== '' && history !== [] && history.map((histo, index)=>(
                <div className={styles.itemBox} key={index}>
                <span className={styles.itemBoxImage} title="Tính năng này đang được phát triển">
                </span>
                <span className={styles.itemBoxContent}>
                    <span className={styles.itemTile} title="Tính năng này đang được phát triển">{histo.split('#')[0]}</span><br/>
                    <span className={styles.itemContent} title="Tính năng này đang được phát triển">{histo.split('#')[1]} - {histo.split('#')[2]}</span>
                </span>
            </div>
            ))}
            {history.length === 0 && 
            <span className={styles.notifyClickNow}> Click vào 1 tiềm năng bất kỳ để hiện lịch sử giao dịch tương úng.</span>
            }
            {history[0] === '' &&
            <span className={styles.notifyClickNow}> Tiềm năng này chưa thực hiện giao dịch.</span>
            }
            </div>
            </div>
        </div>
    )
}

export default SideBarRight