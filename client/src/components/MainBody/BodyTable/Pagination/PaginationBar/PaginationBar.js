import React, {useEffect} from "react";

import styles from './PaginationBar.module.css'

import { useSelector, useDispatch } from 'react-redux';
import { nextPagination, 
        previousPagination , 
        limitTen, 
        limitTwenty, 
        limitFifty, 
        limitOneHundred,
        firstIndex,
        lastIndex
} from '../../../../../features/customers/customersSlice';
import { HandleSelect } from '../HandleSelect'
import {HandleOption} from "../HandleOption";

const PaginationBar = () =>{
    const dispatch = useDispatch()
    const limitPagination = useSelector(state => state.pagination.limit)
    const startIndexPagination = useSelector(state => state.pagination.startIndex)
            
    useEffect(() =>{
        
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
        const limitTenButtonEvent = function(){
            dispatch(limitTen())
        }
        const limitTwentyButtonEvent = function(){
            dispatch(limitTwenty())
        }
        const limitFiftyButtonEvent = function(){
            dispatch(limitFifty())
        }
        const limitOneHundredButtonEvent = function(){
            dispatch(limitOneHundred())
        }
        const firstButtonEvent = function(){
            dispatch(firstIndex())
        }
        const lastButtonEvent = function(){
            dispatch(lastIndex())
        }
        const nextButtonEvent = function(){
            dispatch(nextPagination())
        }
        const previousButtonEvent = function(){
            dispatch(previousPagination())
        }
        limitTenButton.addEventListener('click',limitTenButtonEvent)
        limitTwentyButton.addEventListener('click',limitTwentyButtonEvent)
        limitFiftyButton.addEventListener('click',limitFiftyButtonEvent)
        limitOneHundredButton.addEventListener('click',limitOneHundredButtonEvent)
        firstButton.addEventListener('click',firstButtonEvent)
        lastButton.addEventListener('click',lastButtonEvent)
        nextButton.addEventListener('click',nextButtonEvent)
        previousButton.addEventListener('click',previousButtonEvent)

        return()=>{
            limitTenButton.removeEventListener('click',limitTenButtonEvent)
            limitTwentyButton.removeEventListener('click',limitTwentyButtonEvent)
            limitFiftyButton.removeEventListener('click',limitFiftyButtonEvent)
            limitOneHundredButton.removeEventListener('click',limitOneHundredButtonEvent)
            firstButton.removeEventListener('click',firstButtonEvent)
            lastButton.removeEventListener('click',lastButtonEvent)
            nextButton.removeEventListener('click',nextButtonEvent)
            previousButton.removeEventListener('click',previousButtonEvent)
        }
    }, [dispatch])

    return (
        <span className={styles.paginationPanel}>
            <span className={styles.paginationPanelBox}>
                <span className={styles.paginationPanelFrame}
                    onClick={()=>HandleSelect()}
                >
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
    )
}

export default PaginationBar