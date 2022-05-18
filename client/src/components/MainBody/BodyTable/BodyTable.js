import React from "react";

import { Table } from "./Table/Table";
import { Pagination } from "./Pagination/Pagination";
import styles from './BodyTable.module.css'

const BodyTable = () =>{
    
    return (
        <div className={styles.container} id='container'>
            <div className={styles.box}>
                <Table/>
            </div>
            <Pagination/>

        </div>
    )
}

export default BodyTable