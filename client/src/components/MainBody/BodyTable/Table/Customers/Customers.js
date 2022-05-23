import React from "react";
import { useSelector } from "react-redux";

import styles from './Customers.module.css'

export const Customers = () => {
    const customers = useSelector((state) => state.customers.customers)
    // console.log(customers)
    return (
            <tbody>
                {customers.map((customer) => (
                <tr key={customer._id}>
                    <td className={`${styles.iconHeading}`}></td>
                    <td className={styles.tdOne} title={customer.the} >{customer.the}</td>
                    <td className={styles.tdTwo} title={customer.xungho} >{customer.xungho}</td>
                    <td className={styles.tdThree} title={customer.hovaten} >{customer.hovaten}</td>
                    <td className={styles.tdFour} title={customer.chucdanh} >{customer.chucdanh}</td>
                    <td className={styles.tdFive}>{customer.dtdidong.split('-').join('')}</td>
                    <td className={styles.tdSix}>{customer.dtcoquan.split('-').join('')}</td>
                    <td className={styles.tdSeven} title={customer.emailcoquan} >{customer.emailcoquan}</td>
                    <td className={styles.tdEight} title={customer.emailcanhan} >{customer.emailcanhan}</td>
                    <td className={styles.tdNine} title={customer.tochuc} >{customer.tochuc}</td>
                    <td className={styles.tdTen} title={customer.diachi} >{customer.diachi}</td>
                    <td className={styles.tdEleven} title={customer.tinhthanhpho} >{customer.tinhthanhpho}</td>
                    <td className={styles.tdTwelve} title={customer.quanhuyen} >{customer.quanhuyen}</td>
                    <td className={styles.tdThirteen} title={customer.phuongxa} >{customer.phuongxa}</td>
                    <td className={styles.tdFourteen} title={customer.nguongoc} >{customer.nguongoc}</td>
                    <td className={styles.tdFifteen} title={customer.loaihinh} >{customer.loaihinh}</td>
                    <td className={styles.tdSixteen} title={customer.linhvuc} >{customer.linhvuc}</td>
                    <td className={styles.tdSeventeen} title={customer.mota} >{customer.mota}</td>
                    <td className={styles.tdEighteen} title={customer.bocuc} >{customer.bocuc}</td>
                    <td className={styles.tdNineteen} title={customer.chusohuu} >{customer.chusohuu}</td>
                    <td className={styles.tdTwenty} title={customer.doanhthu} >{customer.doanhthu}</td>
                    <td className={styles.tdTwentyOne} title={customer.dungchung} >{customer.dungchung}</td>
                    <td className={styles.tdTwentyTwo} title={customer.facebook} >{customer.facebook}</td>
                </tr>
            ))}
            </tbody>
    )
}

