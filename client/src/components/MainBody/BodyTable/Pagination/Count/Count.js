import React from "react";

import styles from './Count.module.css'
import {useSelector } from "react-redux";
const Count = () =>{
    const countCustomer = useSelector((state) => state.count.count)


    return (
    <span className={styles.paginationTotal}>
        <span className={styles.paginationTotalText}>Tổng số:</span>
        <span className={styles.paginationTotalCount}>{`${countCustomer}`}</span>
    </span>
    )
}

export default Count