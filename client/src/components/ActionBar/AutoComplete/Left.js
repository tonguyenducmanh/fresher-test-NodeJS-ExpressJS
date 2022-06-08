import React, {useEffect} from 'react';

import { LeftClick } from './HandleClick/LeftClick';
import styles from './Left.module.css'

export default function TruongChonNhieu({arr, id}) {
        const options = arr;
        
        const thongTinInputBox = document.getElementsByClassName(styles.thongTinInputBox)
        const thongTinList = document.getElementsByClassName(styles.thongTinList)
        const thongTinListItem = document.getElementsByClassName(styles.thongTinListItem)

        //mở nhập input khi bấm vào combobox
        useEffect(()=>{
            const thongTinInputBoxEvent =(e)=>{
                if(e.target.children[0]){
                    if(e.target.children[0].style.display !== 'block'){
                        e.target.children[0].style.display = 'block'
                        e.target.children[3].style.display = 'block'
                        e.target.children[0].focus()
                        e.target.style.setProperty('--iconDown', '-320px -32px')
                    } 
                }
            }
            for(let z = 0 ; z <thongTinInputBox.length; z++){
                thongTinInputBox[z].addEventListener('click', thongTinInputBoxEvent)
            }
            return () =>{
                for(let z = 0 ; z <thongTinInputBox.length; z++){
                    thongTinInputBox[z].removeEventListener('click', thongTinInputBoxEvent)
                }
            }
        },[thongTinInputBox])

        //mở dãy gợi ý khi mà hiện tính năng nhập và tùy chỉnh danh sách theo dữ liệu nhập
        //danh sách gợi ý được lọc qua xem có trùng chữ nào thì mới hiện
        useEffect(()=>{
            const thongTinInputBoxEventTwo = (e)=>{
                e.target.parentElement.children[1].style.display = 'block'
                let inputValue = e.target.value.toUpperCase()
                for( let k = 0 ; k < thongTinListItem.length ; k++){
                    if(thongTinListItem[k].innerHTML.toUpperCase().indexOf(inputValue) > -1){
                        thongTinListItem[k].style.display = 'block';
                    } else{
                        thongTinListItem[k].style.display = 'none'
                    }
                }
                
            }
            for(let i = 0 ; i< thongTinInputBox.length; i++){
                ['click','focus','input'].forEach( evt =>
                    thongTinInputBox[i].children[0].addEventListener(evt,thongTinInputBoxEventTwo) )
                }
            
            return () =>{
                for(let i = 0 ; i< thongTinInputBox.length; i++){
                    ['click','focus','input'].forEach( evt =>
                        thongTinInputBox[i].children[0].removeEventListener(evt,thongTinInputBoxEventTwo) )
                    }
                 
            }
            
            },[thongTinInputBox, thongTinListItem])
            
        //xử lý sự kiện bấm ra ngoài vùng được chọn và bấm hủy thì sẽ hủy tính năng
        //xóa
        useEffect(() =>{
            const documentEvent = (event) => {
    
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

            document.addEventListener("mousedown", documentEvent
                );

            return() =>{
                document.removeEventListener("mousedown", documentEvent
                );    
            }
        })
        //xử lý tính năng nhập nhanh gợi ý vào input
        useEffect(() =>{
            const thongTinListEvent = (e)=>{
                e.target.parentElement.parentElement.children[2].innerHTML = e.target.textContent
                e.target.parentElement.parentElement.children[2].style.color = '#616161'
                e.target.parentElement.parentElement.children[1].style.display = 'none'
                e.target.parentElement.parentElement.children[3].style.display = 'none'
                e.target.parentElement.parentElement.children[0].style.display = 'none'
                e.target.parentElement.parentElement.style.setProperty('--iconDown', '-336px -32px')
            }

            for(let i = 0 ; i< thongTinList.length; i++){
                thongTinList[i].addEventListener('click', thongTinListEvent )
                }
            
            return() =>{
                for(let i = 0 ; i< thongTinList.length; i++){
                    thongTinList[i].removeEventListener('click', thongTinListEvent )
                    }
            }
        })

        return (
            <div className={styles.thongTinInputBox} id='thongTinInputLeftBox'>
                <input className={styles.thongTinInput} placeholder='Tìm kiếm'/>
                
                <ul className={styles.thongTinList}>
                {options.map((option, index) => (
                    <li className={styles.thongTinListItem} 
                        key={index}
                        onClick={(e)=>
                    LeftClick(e)}
                    >{option}
                    </li>
                    ))}
                </ul>
                <span className={styles.thongTinContent} id = {id}>- Chọn trường -</span>
                <span className={styles.thongTinInputSearch}></span>
            </div>
        );
}