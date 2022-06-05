import React, {useEffect} from 'react';
import { DiaChi } from "./Array/DiaChi";
import styles from './TruongChonNhieu.module.css'
import { useDispatch, useSelector} from 'react-redux'

import {addQuanHuyen} from '../../../features/location/locationSlice'


export default function TruongChonNhieuTinhThanh({value}) {
        const thongTinInputBox = document.getElementsByClassName(styles.thongTinInputBox)
        const thongTinList = document.getElementsByClassName(styles.thongTinList)
        const thongTinListItem = document.getElementsByClassName(styles.thongTinListItem)
    
        const dispatch = useDispatch()
        const tinhThanh = useSelector(state => state.location.tinhThanh) 


        //mở nhập input khi bấm vào combobox
        useEffect(()=>{
            for(let z = 0 ; z <thongTinInputBox.length; z++){
                thongTinInputBox[z].addEventListener('click', (e)=>{
                    if(e.target.children[0]){
                        if(e.target.children[0].style.display !== 'block'){
                            e.target.children[0].style.display = 'block'
                            e.target.children[3].style.display = 'block'
                            e.target.children[0].focus()
                            e.target.style.setProperty('--iconDown', '-320px -32px')
                        } 
                    }
                })
            }
        },[thongTinInputBox])

        //mở dãy gợi ý khi mà hiện tính năng nhập và tùy chỉnh danh sách theo dữ liệu nhập
        //danh sách gợi ý được lọc qua xem có trùng chữ nào thì mới hiện
        useEffect(()=>{
            for(let i = 0 ; i< thongTinInputBox.length; i++){
                ['click','focus','input'].forEach( evt =>
                    thongTinInputBox[i].children[0].addEventListener(evt,(e)=>{
                        e.target.parentElement.children[1].style.display = 'block'
                        let inputValue = e.target.value.toUpperCase()
                        for( let k = 0 ; k < thongTinListItem.length ; k++){
                            if(thongTinListItem[k].innerHTML.toUpperCase().indexOf(inputValue) > -1){
                                thongTinListItem[k].style.display = 'block';
                            } else{
                                thongTinListItem[k].style.display = 'none'
                            }
                        }
                        
                    }) )
                }
                
            },[thongTinInputBox, thongTinListItem])
            
        //xử lý sự kiện bấm ra ngoài vùng được chọn và bấm hủy thì sẽ hủy tính năng
        //xóa
        useEffect(() =>{
            document.addEventListener("mousedown", (event) => {
    
                //kiểm tra sự kiện có không đã, nếu không có tức là đang ở trang khác
                for(let k = 0 ; k<thongTinInputBox.length; k++){
                    if(thongTinList[k]){
                        if(thongTinInputBox[k]){
                            if (!thongTinInputBox[k].contains(event.target)) {
                                thongTinList[k].style.display = 'none'
                                thongTinList[k].parentElement.childNodes[0].style.display = 'none'
                                thongTinList[k].parentElement.childNodes[3].style.display = 'none'
                                thongTinList[k].parentElement.style.setProperty('--iconDown', '-336px -32px')
                          }
                        }
                    }}
                }
                );
        })
        //xử lý tính năng nhập nhanh gợi ý vào input
        useEffect(() =>{
            for(let i = 0 ; i< thongTinList.length; i++){
                thongTinList[i].addEventListener('click', (e)=>{
                    e.target.parentElement.parentElement.children[2].innerHTML = e.target.textContent
                    e.target.parentElement.parentElement.children[2].style.color = '#616161'
                    e.target.parentElement.parentElement.children[1].style.display = 'none'
                    e.target.parentElement.parentElement.children[3].style.display = 'none'
                    e.target.parentElement.parentElement.children[0].style.display = 'none'
                    e.target.parentElement.parentElement.style.setProperty('--iconDown', '-336px -32px')
                })
                }
        })

        return (
            <div className={styles.thongTinInputBox}>
                <input className={styles.thongTinInput} placeholder='Tìm kiếm'/>
                
                <ul className={styles.thongTinList}>
                {DiaChi[tinhThanh].districts.map((option, index) => (
                    <li className={styles.thongTinListItem} 
                        key={index}
                        onClick={() => dispatch(addQuanHuyen(option.name))}
                    >{option.name}</li>
                    ))}
                </ul>
                <span className={styles.thongTinContent} style={value ? {color: '#616161'} : {color: '#9ba3b2'} } id ='quanHuyenEdit'>{value ? value : '- không chọn -'}</span>

                <span className={styles.thongTinInputSearch}></span>
            </div>
        );
}
