import styles from '../ActionBar/ActionBar.module.css'

//mỗi style này là cách gọi tiền tố class riêng dựa theo từng
//component khác nhau
export const OpenMoreMenu = () =>{
    const moreMenu = document.getElementsByClassName(styles.actionLeftMoreMenu)[0]

        if(moreMenu.classList.contains(styles.hiddenMenu)){
            moreMenu.classList.remove(styles.hiddenMenu)
        }else{
            moreMenu.classList.add(styles.hiddenMenu)
        }
}