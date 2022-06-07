import React, {useEffect}from 'react';

import styles from './TruongChonNhieuBox.module.css'

export default function TruongChonNhieu({arr, value}) {
        const options = arr;
        const selectedLists = value;
        const thongTinInputBox = document.getElementsByClassName(styles.thongTinInputBox)
        const thongTinInput = document.getElementsByClassName(styles.thongTinInput)
        const thongTinList = document.getElementsByClassName(styles.thongTinList)
        const thongTinListItem = document.getElementsByClassName(styles.thongTinListItem)
        const thongTinInputForm = document.getElementsByClassName(styles.thongTinInputForm)
        const thongTinExample = document.getElementsByClassName(styles.thongTinExample)
        const thongtinContainer = document.getElementsByClassName(styles.thongtinContainer)


        //mở nhập inputForm khi bấm vào combobox
        useEffect(()=>{
            for(let z = 0 ; z <thongTinInputBox.length; z++){
                thongTinInputBox[z].addEventListener('click', (e)=>{
                    if(e.target.children[0]){
                        if(e.target.parentElement.children[1].style.display !== 'block'){
                            e.target.parentElement.children[1].style.display = 'block'
                            e.target.parentElement.children[1].children[0].focus()
                        } 
                    }
                })
            }
        },[thongTinInputBox])

        //mở dãy gợi ý khi mà hiện tính năng nhập và tùy chỉnh danh sách theo dữ liệu nhập
        //danh sách gợi ý được lọc qua xem có trùng chữ nào thì mới hiện
        useEffect(()=>{
            for(let i = 0 ; i< thongTinInputForm.length; i++){
                ['click','focus','input'].forEach( evt =>
                    thongTinInputForm[i].children[0].addEventListener(evt,(e)=>{
                        let inputValue = e.target.value.toLowerCase()
                        for( let k = 0 ; k < thongTinListItem.length ; k++){
                            if(thongTinListItem[k].innerHTML.toLowerCase().indexOf(inputValue) > -1){
                                //check xem có bao nhiêu giá trị bị trùng, nếu trùng thì gỡ nó đi khỏi thanh gợi ý,
                                // nếu không trùng thì xét từng chữ cái 1 xem có trùng không, trùng thì gợi ý hiện ra
                                // trường hợp trùng thằng đầu tiên thì hiện tất cả (ý là không có chọn)
                                if(thongTinInputBox[i].children[0].textContent.includes('- Không chọn -')){
                                    for(let p = 0; p< thongTinList[i].children.length; p ++){
                                        thongTinList[i].children[k].style.display = 'block';
                                    }
                                } else{
                                    let count = 0
                                    for( let p = 0 ; p< thongTinInputBox[i].children.length ; p++){
                                        if(thongTinInputBox[i].children[p].textContent.includes(thongTinList[i].children[k].innerHTML)){
                                            count = count + 1
                                        }
                                    }
                                    //nếu không trùng thì mới thêm vào
                                    if(count === 0){
                                        thongTinListItem[k].style.display = 'block';
                                    } else{
                                    thongTinListItem[k].style.display = 'none'
                                    }
                                }
                            } else{
                                thongTinListItem[k].style.display = 'none'
                            }
                        }

                    }) )
                }
                
        },[thongTinInputBox, thongTinInputForm, thongTinListItem, thongTinList])
            
        // xử lý sự kiện bấm ra ngoài vùng được chọn
        useEffect(() =>{
            document.addEventListener("mousedown", (event) => {
            
    
                //kiểm tra sự kiện có không đã, nếu không có tức là đang ở trang khác
                for(let k = 0 ; k<thongtinContainer.length; k++){
                    if(thongtinContainer[k]){
                            if (!thongTinInputForm[k].contains(event.target)) {
                                thongTinInputForm[k].style.display = 'none'
                          }
                    }}
                }
                );
        },[thongTinInputForm, thongtinContainer])

        //xử lý tính năng nhập nhanh gợi ý vào input
        useEffect(() =>{
            for(let i = 0 ; i< thongTinList.length; i++){
                //check xem có giá trị nào bị trùng chưa


                //thêm sự kiện click
                thongTinList[i].addEventListener('click', (e)=>{
                    if(e.target.textContent !== '- Không chọn -'){

                        //tạo thẻ chọn mới nè hihi
                        const theMoi =document.createElement("span")
                        theMoi.innerHTML = e.target.textContent
                        theMoi.classList.add(styles.thongTinContent)
                        theMoi.classList.add(styles.thongTinContentDecor)
                        theMoi.addEventListener('click', (e)=>{
                            //thêm luôn tính năng tự hủy khi bấm vào
                            if(thongTinInputBox[i].children.length <2){
                                const theMoiHai = document.createElement('span')
                                theMoiHai.classList.add(styles.thongTinExample)
                                theMoiHai.innerHTML = '- Không chọn -'
                                thongTinInputBox[i].appendChild(theMoiHai)
                            }
                            e.target.remove()
                        })
                        let count = 0
                        //check xem có bao nhiêu giá trị bị trùng
                        for( let k = 0 ; k< thongTinInputBox[i].children.length ; k++){
                            if(thongTinInputBox[i].children[k].textContent.includes(e.target.textContent)){
                                count = count + 1
                            }
                        }
                        //nếu không trùng thì mới thêm vào
                        if(count === 0){
                            thongTinInputBox[i].appendChild(theMoi)
                        }
                        
                        thongTinInput[i].value = ''
                        if(thongTinExample[i]){
                            thongTinExample[i].remove()
                        }
                        thongTinInput[i].focus()

                    } else{

                        // nếu chọn vào trường không chọn thì xóa toàn bộ các nút đã chọn và chỉ giữ lại thằng không chọn thôi
                        
                        for( let k = 0 ; k < thongTinInputBox[i].children.length +1 ; k++){
                            while(thongTinInputBox[i].firstElementChild) {
                                thongTinInputBox[i].firstElementChild.remove();
                             }
                        }


                        if(!thongTinExample[i]){
                            const theMoi =document.createElement("span")
                            theMoi.innerHTML = '- Không chọn -'
                            theMoi.classList.add(styles.thongTinExample)
                            e.target.parentElement.parentElement.parentElement.children[0].appendChild(theMoi)
                        }
                        thongTinInput[i].focus()
                        // focus này để refresh lại danh sách khi ấn vào không chọn
                        
                    }
                })
                }
        },[thongTinExample, thongTinInput, thongTinInputBox, thongTinList])



        return (
            <div className={styles.thongtinContainer}>
                <div className={styles.thongTinInputBox} id='loaiTiemNangEdit'>
                    {   selectedLists ? (selectedLists[0] !== '- Không chọn -' ?  selectedLists.map((selected, index) =>(
                        <span className={`${styles.thongTinContent} ${styles.thongTinContentDecor}`}
                            key={index}
                        >
                            {selected}
                        </span>
                    ))
                    :
                    <span className={styles.thongTinExample}>- Không chọn -</span>)
                    :
                    <span className={styles.thongTinExample}>- Không chọn -</span> }
                </div>
                <div className={styles.thongTinInputForm}>
                    <input className={styles.thongTinInput} placeholder='Tìm kiếm'/>
                    <ul className={styles.thongTinList}>
                    {options.map((option, index) => (
                        <li className={styles.thongTinListItem} key={index}>{option}</li>
                        ))}
                    </ul>
                    <span className={styles.thongTinInputSearch}></span>
                </div>
            </div>
        );
}
