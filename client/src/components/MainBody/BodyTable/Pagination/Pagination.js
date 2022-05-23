import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchCustomersCount } from '../../../../features/customers/customersSlice';
import { HandleSelect } from './HandleSelect'
import {HandleOption} from "./HandleOption";


import styles from './Pagination.module.css'

export const Pagination = () =>{
    const dispatch = useDispatch()
    const countCustomer = useSelector((state) => state.count.count)
    const countStatus = useSelector(state => state.count.status)
    useEffect(() => {
        if(countStatus === 'idle'){
            dispatch(fetchCustomersCount())
        }
    }, [countStatus, dispatch])
    useEffect(() =>{
        HandleSelect()
    })
    useEffect(() => {
        HandleOption()
    })
    return (
        <div className={styles.pagination}>
        <span className={styles.paginationTotal}>
            <span className={styles.paginationTotalText}>Tổng số:</span>
            <span className={styles.paginationTotalCount}>{`${countCustomer}`}</span>
        </span>
        <span className={styles.paginationPanel}>
            <span className={styles.paginationPanelBox}>
                <span className={styles.paginationPanelFrame} id='paginationSelect'>
                10 Bản ghi trên Trang
                </span>
                <span className={styles.paginationOption} id='paginationOption'>
                    <span id='handleBox'>
                        <span className={`${styles.paginationOptionItem} ${styles.paginationOptionSelected}`}>10 Bản ghi trên Trang</span>
                        <span className={styles.paginationOptionItem}>20 Bản ghi trên Trang</span>
                        <span className={styles.paginationOptionItem}>50 Bản ghi trên Trang</span>
                        <span className={styles.paginationOptionItem}>100 Bản ghi trên Trang</span>
                    </span>
                </span>
                <span className={styles.paginationButton}>
                    <span className={`${styles.icon} ${styles.paginationButtonOne}`}></span>
                    <span className={`${styles.icon} ${styles.paginationButtonTwo}`}></span>
                    <span className={styles.paginationFromTo}>
                         <span className={styles.paginationFrom}>1</span>
                         <span>đến</span>
                         <span className={styles.paginationTo}>50</span>
                    </span>
                    <span className={`${styles.icon} ${styles.paginationButtonThree}`}></span>
                    <span className={`${styles.icon} ${styles.paginationButtonFour}`}></span>
                </span>
            </span>
        </span>
    </div>
    )
}