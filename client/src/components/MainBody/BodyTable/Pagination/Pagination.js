import React from 'react';

import Count from './Count/Count';
import PaginationBar from './PaginationBar/PaginationBar';
import styles from './Pagination.module.css'

export const Pagination = () =>{
    

    return (
        <div className={styles.pagination}>
            <Count/>
            <PaginationBar/>
        </div>
    )
}