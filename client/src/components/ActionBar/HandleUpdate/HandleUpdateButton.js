
import styles from '../ActionBar.module.css'
import stylesTwo from '../../MainBody/BodyTable/Table/Customers/Customers.module.css'
export const HandleUpdateButton = () =>{
    const notifyUpdateSuccess = document.getElementById('notifyUpdateSuccess')
    const checkedButton =  document.getElementsByClassName('hihi')
    const tdIds =  document.getElementsByClassName(stylesTwo.tdId)
    let idsString = []
    for( let i = 0 ; i < tdIds.length ; i ++){
        if(checkedButton[i].classList.contains(stylesTwo.iconHeadingChecked)){
            idsString = idsString.concat(tdIds[i].textContent)
        }
    }
    // lấy id của tài liệu cần sửa, ở đây mặc định chỉ chọn 1 cái
    // nên lấy id của cái duy nhất đó qua vòng lặp
    idsString = idsString.join(',')
    
    console.log('đã ấn vào nút cập nhật', idsString)
    
    // //thông báo rằng cập nhật thông tin thành công
    // notifyUpdateSuccess.classList.add(styles.notifyUpdateSuccessAni)
    // notifyUpdateSuccess.addEventListener("transitionend", ()=>{
    //     notifyUpdateSuccess.classList.remove(styles.notifyUpdateSuccessAni)
    // });
    // //ẩn box quick update
    // const updateBox = document.getElementById('updateBox')
    // updateBox.classList.add(styles.hiddenUpdateBox)
}