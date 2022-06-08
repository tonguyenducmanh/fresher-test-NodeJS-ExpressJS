import React , {useEffect} from "react";

import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useSelector } from "react-redux";
import {HandleCheck} from './HandleCheck'

import { HandleEditCustomer } from "./HandleEditCustomer/HandleEditCustomer";
import {fetchCustomersList} from '../../../../../features/customers/customersSlice'
import { addSearchString } from "../../../../../features/customers/customersSlice";
import { fetchCustomersCount } from "../../../../../features/customers/customersSlice";
import { fetchLastID } from "../../../../../features/customers/customersSlice";
import styles from './Customers.module.css'
import stylesTwo from '../../../../Headingbar/HeadingTop/HeadingTop.module.css'


export const Customers = () => {
    //danh sách các documents
    const dispatch = useDispatch()
    const customers = useSelector((state) => state.customers.customers)
    const limit = useSelector((state) => state.pagination.limit)
    const startIndexPagination = useSelector(state => state.pagination.startIndex)
    const limitPagination = useSelector(state => state.pagination.limit)
    const searchString = useSelector(state => state.customers.searchString)
    const searchInput = document.getElementsByClassName(stylesTwo.headingSearchInput)

    
    //tìm kiếm theo giá trị cho trước, không có giá trị cho trước thì trả về cả bảng
    useEffect(() => {
            const searchInputEvent = (e) =>{
                dispatch(addSearchString(e.target.value))
            }
            searchInput[0].addEventListener('input',searchInputEvent)
            dispatch(fetchCustomersList(`?searchString=${searchString}&limit=${limitPagination}&startIndex=${startIndexPagination}`))
            dispatch(fetchCustomersCount(`?searchString=${searchString}`))
            dispatch(fetchLastID())

            return()=>{
            searchInput[0].removeEventListener('input',searchInputEvent)

            }
    }, [limitPagination, startIndexPagination, searchString, dispatch])
    useEffect( () =>{
        HandleCheck(limit)
    },)
    // hiện bảng sửa thông tin
    useEffect(() =>{
        HandleEditCustomer(dispatch, customers)
    },[dispatch, customers])
    return (
            <tbody>
                {customers.map((customer) => (
                <tr className={styles.trId} 
                    key={customer._id} 
                    
                >
                    <td className={`${styles.iconHeading} ${styles.iconButtonCustomers}`}></td>
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
