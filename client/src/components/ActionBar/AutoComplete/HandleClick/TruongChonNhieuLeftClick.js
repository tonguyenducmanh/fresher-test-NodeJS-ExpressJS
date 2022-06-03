import styles from '../../ActionBar.module.css'


export const TruongChonNhieuLeftClick = () =>{
    const truongChonNhieuRight = document.getElementById('truongChonNhieuRight')
    const updateButtonFinal = document.getElementById('updateButtonFinal')
    //click vô rồi thì mới hiện cái nút cập nhật và ô input lên chứ
    truongChonNhieuRight.removeAttribute('disabled')
    truongChonNhieuRight.classList.remove(styles.comboBoxInputDisabled)
    updateButtonFinal.classList.remove(styles.updateYesDisabled)

}