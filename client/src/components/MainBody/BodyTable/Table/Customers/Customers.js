import React , {useEffect} from "react";

import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useSelector } from "react-redux";
import {HandleCheck} from './HandleCheck'

import { HandleShowHistory } from "./HandleShowHistory";

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
    const customerFilter = useSelector(state => state.customers.customerFilter)

    const searchInput = document.getElementsByClassName(stylesTwo.headingSearchInput)

    
    //tìm kiếm theo giá trị cho trước, không có giá trị cho trước thì trả về cả bảng
    useEffect(() => {
            const searchInputEvent = (e) =>{
                dispatch(addSearchString(e.target.value))
            }
            for(let i = 0 ; i < searchInput.length ; i++){
                searchInput[i].addEventListener('input',searchInputEvent)
            }

            const data = new FormData()
            data.append("searchString", searchString)
            data.append("limit", limitPagination)
            data.append("startIndex", startIndexPagination)
            data.append("theString", customerFilter.theString)
            data.append("theCondition", customerFilter.theCondition)
            data.append("xunghoString", customerFilter.xunghoString)
            data.append("xunghoCondition", customerFilter.xunghoCondition)
            data.append("hovademString", customerFilter.hovademString)
            data.append("hovademCondition", customerFilter.hovademCondition)
            data.append("tenString", customerFilter.tenString)
            data.append("tenCondition", customerFilter.tenCondition)
            data.append("phongbanString", customerFilter.phongbanString)
            data.append("phongbanCondition", customerFilter.phongbanCondition)
            data.append("chucdanhString", customerFilter.chucdanhString)
            data.append("chucdanhCondition", customerFilter.chucdanhCondition)
            data.append("dtdidongString", customerFilter.dtdidongString)
            data.append("dtdidongCondition", customerFilter.dtdidongCondition)
            data.append("dtcoquanString", customerFilter.dtcoquanString)
            data.append("dtcoquanCondition", customerFilter.dtcoquanCondition)
            data.append("loaitiemnangString", customerFilter.loaitiemnangString)
            data.append("loaitiemnangCondition", customerFilter.loaitiemnangCondition)
            data.append("nguongocString", customerFilter.nguongocString)
            data.append("nguongocCondition", customerFilter.nguongocCondition)
            data.append("zaloString", customerFilter.zaloString)
            data.append("zaloCondition", customerFilter.zaloCondition)
            data.append("emailcanhanString", customerFilter.emailcanhanString)
            data.append("emailcanhanCondition", customerFilter.emailcanhanCondition)
            data.append("emailcoquanString", customerFilter.emailcoquanString)
            data.append("emailcoquanCondition", customerFilter.emailcoquanCondition)
            data.append("tochucString", customerFilter.tochucString)
            data.append("tochucCondition", customerFilter.tochucCondition)
            data.append("masothueString", customerFilter.masothueString)
            data.append("masothueCondition", customerFilter.masothueCondition)
            data.append("taikhoannganhangString", customerFilter.taikhoannganhangString)
            data.append("taikhoannganhangCondition", customerFilter.taikhoannganhangCondition)
            data.append("motainganhangString", customerFilter.motainganhangString)
            data.append("motainganhangCondition",customerFilter.motainganhangCondition)
            data.append("ngaythanhlapString",customerFilter.ngaythanhlapString)
            data.append("ngaythanhlapCondition",customerFilter.ngaythanhlapCondition)
            data.append("loaihinhString",customerFilter.loaihinhString)
            data.append("loaihinhCondition",customerFilter.loaihinhCondition)
            data.append("linhvucString",customerFilter.linhvucString)
            data.append("linhvucCondition",customerFilter.linhvucCondition)
            data.append("nganhngheString",customerFilter.nganhngheString)
            data.append("nganhngheCondition",customerFilter.nganhngheCondition)
            data.append("doanhthuString",customerFilter.doanhthuString)
            data.append("doanhthuCondition",customerFilter.doanhthuCondition)
            data.append("quocgiaString",customerFilter.quocgiaString)
            data.append("quocgiaCondition",customerFilter.quocgiaCondition)
            data.append("tinhthanhphoString",customerFilter.tinhthanhphoString)
            data.append("tinhthanhphoCondition",customerFilter.tinhthanhphoCondition)
            data.append("quanhuyenString",customerFilter.quanhuyenString)
            data.append("quanhuyenCondition",customerFilter.quanhuyenCondition)
            data.append("phuongxaString",customerFilter.phuongxaString)
            data.append("phuongxaCondition",customerFilter.phuongxaCondition)
            data.append("sonhaString",customerFilter.sonhaString)
            data.append("sonhaCondition",customerFilter.sonhaCondition)
            data.append("motaString",customerFilter.motaString)
            data.append("motaCondition",customerFilter.motaCondition)
            data.append("dungchungString",customerFilter.dungchungString)
            data.append("dungchungCondition",customerFilter.dungchungCondition)

            dispatch(fetchCustomersList(data))
            dispatch(fetchCustomersCount(data))
            dispatch(fetchLastID())

            return()=>{
                for(let i = 0 ; i < searchInput.length ; i++){
                    searchInput[i].removeEventListener('input',searchInputEvent)
                }
            }
    }, [dispatch, limitPagination, startIndexPagination, searchString, customerFilter, searchInput])
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
                    onClick={()=>HandleShowHistory(dispatch,customer.history)}
                >
                    <td className={`${styles.iconHeading} ${styles.iconButtonCustomers}`}></td>
                    <td className={styles.tdId}>{customer._id}</td>
                    <td className={styles.tdAnh}>{customer.anh}</td>
                    <td className={styles.tdLink}>
                        <Link to='/edit' className={styles.tdLinkToEdit}/>
                    </td>
                    <td className={styles.tdOne} title={customer.the} >
                        {   customer.the.length === 1 && customer.the[0] !== '' &&
                            <span className={styles.tdTheCon} >{customer.the[0]}</span>}
                        {   customer.the.length === 2 &&
                            customer.the.map((theCon)=>(
                                <span key={theCon} className={styles.tdTheCon}>{theCon}</span> ))}
                        {   customer.the.length >2 && 
                            <>
                                <span className={styles.tdTheCon}>{customer.the[0]}</span>
                                <span className={styles.tdTheCon}>{customer.the[1]}</span>
                                <span className={` ${styles.icon} ${styles.tdAllThe}`}></span>
                            </>
                        }
                    </td>
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
