import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { nextPagination, 
        previousPagination , 
        limitTen, 
        limitTwenty, 
        limitFifty, 
        limitOneHundred,
        firstIndex,
        lastIndex
} from '../../../../features/customers/customersSlice';
import { fetchCustomersCount } from '../../../../features/customers/customersSlice';
import { HandleSelect } from './HandleSelect'
import {HandleOption} from "./HandleOption";


import styles from './Pagination.module.css'

export const Pagination = () =>{
    const dispatch = useDispatch()
    const limitPagination = useSelector(state => state.pagination.limit)
    const startIndexPagination = useSelector(state => state.pagination.startIndex)
    const countCustomer = useSelector((state) => state.count.count)
    const countStatus = useSelector(state => state.count.status)

    
    useEffect(() => {
            if(countStatus === 'idle'){
                    dispatch(fetchCustomersCount())
                }
            }, [countStatus, dispatch])
            
    useEffect(() =>{
        HandleSelect()
    },[])

    useEffect(() => {
        HandleOption()
    },[])

    useEffect( () =>{
        const previousButton = document.getElementById('previousButton')
        const nextButton = document.getElementById('nextButton')
        const limitTenButton = document.getElementById('limitTen')
        const limitTwentyButton = document.getElementById('limitTwenty')
        const limitFiftyButton = document.getElementById('limitFifty')
        const limitOneHundredButton = document.getElementById('limitOneHundred')
        const firstButton = document.getElementById('firstButton')
        const lastButton = document.getElementById('lastButton')
        nextButton.addEventListener('click',function(){
            dispatch(nextPagination())
        })
        previousButton.addEventListener('click',function(){
            dispatch(previousPagination())
        })
        limitTenButton.addEventListener('click',function(){
            dispatch(limitTen())
        })
        limitTwentyButton.addEventListener('click',function(){
            dispatch(limitTwenty())
        })
        limitFiftyButton.addEventListener('click',function(){
            dispatch(limitFifty())
        })
        limitOneHundredButton.addEventListener('click',function(){
            dispatch(limitOneHundred())
        })
        firstButton.addEventListener('click',function(){
            dispatch(firstIndex())
        })
        lastButton.addEventListener('click',function(){
            dispatch(lastIndex())
        })
    }, [dispatch])

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
                        <span className={`${styles.paginationOptionItem} ${styles.paginationOptionSelected}`} id='limitTen'>10 Bản ghi trên Trang</span>
                        <span className={styles.paginationOptionItem} id='limitTwenty'>20 Bản ghi trên Trang</span>
                        <span className={styles.paginationOptionItem} id='limitFifty'>50 Bản ghi trên Trang</span>
                        <span className={styles.paginationOptionItem} id='limitOneHundred'>100 Bản ghi trên Trang</span>
                    </span>
                </span>
                <span className={styles.paginationButton}>
                    <span className={`${styles.icon} ${styles.paginationButtonOne}`} id="firstButton"></span>
                    <span className={`${styles.icon} ${styles.paginationButtonTwo}`} id='previousButton'></span>
                    <span className={styles.paginationFromTo}>
                         <span className={styles.paginationFrom}>{`${startIndexPagination + 1}`}</span>
                         <span>đến</span>
                         <span className={styles.paginationTo}>{`${startIndexPagination + limitPagination}`}</span>
                    </span>
                    <span className={`${styles.icon} ${styles.paginationButtonThree}`} id='nextButton'></span>
                    <span className={`${styles.icon} ${styles.paginationButtonFour}`} id='lastButton'></span>
                </span>
            </span>
        </span>
    </div>
    )
}