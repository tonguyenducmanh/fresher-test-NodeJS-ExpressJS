import React, {useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {fetchCustomersList} from '../../../../features/customers/customersSlice'

import { Customers } from "./Customers/Customers";
import styles from './Table.module.css'

export const Table = () =>{
    
    const customerStatus = useSelector(state => state.customers.status)
    const startIndexPagination = useSelector(state => state.pagination.startIndex)
    const limitPagination = useSelector(state => state.pagination.limit)
    const dispatch = useDispatch()

    

    useEffect(() => {
            dispatch(fetchCustomersList(`?limit=${limitPagination}&startIndex=${startIndexPagination}`))
    }, [limitPagination, startIndexPagination])
    return (
        <div className={styles.tableContainer}>
        <table className={styles.table}>
        <thead>
            <tr>
                <td className={`${styles.icon} ${styles.iconHeading}`}>
                </td>
                <td className={styles.tdOne}>Thẻ
                </td>
                <td className={styles.tdTwo}>Xưng hô
                </td>
                <td className={styles.tdThree}>Họ và tên
                </td>
                <td className={styles.tdFour}>Chức danh
                </td>
                <td className={styles.tdFive}>ĐT di động
                </td>
                <td className={styles.tdSix}>ĐT cơ quan
                </td>
                <td className={styles.tdSeven}>Email cơ quan
                </td>
                <td className={styles.tdEight}>Email cá nhân
                </td>
                <td className={styles.tdNine}>Tổ chức
                </td>
                <td className={styles.tdTen}>Địa chỉ
                </td>
                <td className={styles.tdEleven}>Tỉnh/Thành phố
                </td>
                <td className={styles.tdTwelve}>Quận/Huyện
                </td>
                <td className={styles.tdThirteen}>Phường/Xã
                </td>
                <td className={styles.tdFourteen}>Nguồn gốc
                </td>
                <td className={styles.tdFifteen}>Loại hình
                </td>
                <td className={styles.tdSixteen}>Lĩnh vực
                </td>
                <td className={styles.tdSeventeen}>Mô tả
                </td>
                <td className={styles.tdEighteen}>Bố cục
                </td>
                <td className={styles.tdNineteen}>Chủ sở hữu
                </td>
                <td className={styles.tdTwenty}>Doanh thu
                </td>
                <td className={styles.tdTwentyOne}>Dùng chung
                </td>
                <td className={styles.tdTwentyTwo}>Facebook
                </td>
            </tr>
        </thead>
           <Customers/>
        </table>
        </div>
    )
}