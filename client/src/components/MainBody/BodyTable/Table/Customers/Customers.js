import React , {useEffect} from "react";

import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useSelector } from "react-redux";
import {HandleCheck} from './HandleCheck'
import { HandleEditCustomer } from "./HandleEditCustomer/HandleEditCustomer";

import styles from './Customers.module.css'

export const Customers = () => {
    //danh sách các documents
    const customers = useSelector((state) => state.customers.customers)
    const limit = useSelector((state) => state.pagination.limit)

    const dispatch = useDispatch()
    // console.log(customers)
    useEffect( () =>{
        HandleCheck(limit)
    },)
    // hiện bảng sửa thông tin
    useEffect(() =>{
        HandleEditCustomer(dispatch, customers)
    },[customers])
    return (
            <tbody>
                {customers.map((customer) => (
                <tr className={styles.trId} 
                    key={customer._id} 
                    
                >
                    <td className={`${styles.iconHeading} hihi`}></td>
                    <td className={styles.tdId}>{customer._id}</td>
                    <td className={styles.tdAnh}>{customer.anh}</td>
                    <td className={styles.tdLink}>
                        <Link to='/edit' className={styles.tdLinkToEdit}/>
                    </td>
                    <td className={styles.tdOne} title={customer.loaitiemnang} >{customer.loaitiemnang.join(', ')}</td>
                    <td className={styles.tdTwo} title={customer.xungho} >{customer.xungho}</td>
                    <td className={styles.tdThree} title={`${customer.hovadem} ${customer.ten}`} >{`${customer.hovadem} ${customer.ten}`}</td>
                    <td className={styles.tdFour} title={customer.chucdanh} >{customer.chucdanh}</td>
                    <td className={styles.tdFive}>{customer.dtdidong}</td>
                    <td className={styles.tdSix}>{customer.dtcoquan}</td>
                    <td className={styles.tdSeven} title={customer.emailcoquan} >{customer.emailcoquan}</td>
                    <td className={styles.tdEight} title={customer.emailcanhan} >{customer.emailcanhan}</td>
                    <td className={styles.tdNine} title={customer.tochuc} >{customer.tochuc}</td>
                    <td className={styles.tdTen} title={customer.sonha} >{customer.sonha}</td>
                    <td className={styles.tdEleven} title={customer.tinhthanhpho} >{customer.tinhthanhpho}</td>
                    <td className={styles.tdTwelve} title={customer.quanhuyen} >{customer.quanhuyen}</td>
                    <td className={styles.tdThirteen} title={customer.phuongxa} >{customer.phuongxa}</td>
                    <td className={styles.tdFourteen} title={customer.nguongoc} >{customer.nguongoc}</td>
                    <td className={styles.tdFifteen} title={customer.loaihinh} >{customer.loaihinh}</td>
                    <td className={styles.tdSixteen} title={customer.linhvuc} >{customer.linhvuc}</td>
                    <td className={styles.tdSeventeen} title={customer.mota} >{customer.mota}</td>
                    <td className={styles.tdNineteen} title={customer.ten} >{customer.ten}</td>
                    <td className={styles.tdTwenty} title={customer.doanhthu} >{customer.doanhthu}</td>
                    <td className={styles.tdTwentyOne} title={customer.dungchung ? 'có' : 'không'} >{customer.dungchung ? 'có' : 'không'}</td>
                    <td className={styles.tdTwentyTwo} title={customer.zalo} >{customer.zalo}</td>
                </tr>
            ))}
            </tbody>
    )
}

