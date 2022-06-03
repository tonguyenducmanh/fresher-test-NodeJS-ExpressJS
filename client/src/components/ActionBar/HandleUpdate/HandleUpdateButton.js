
import styles from '../ActionBar.module.css'

export const HandleUpdateButton = () =>{
    const notifyUpdateSuccess = document.getElementById('notifyUpdateSuccess')
    //thông báo rằng người dùng chỉ có thể sửa 1 tiềm năng 1 lúc
    notifyUpdateSuccess.classList.add(styles.notifyUpdateSuccessAni)
    notifyUpdateSuccess.addEventListener("transitionend", ()=>{
        notifyUpdateSuccess.classList.remove(styles.notifyUpdateSuccessAni)
    });
    //ẩn box quick update
    const updateBox = document.getElementById('updateBox')
    updateBox.classList.add(styles.hiddenUpdateBox)
}