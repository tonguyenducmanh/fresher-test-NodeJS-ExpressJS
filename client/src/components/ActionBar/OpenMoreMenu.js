import styles from '../ActionBar/ActionBar.module.css'

//mỗi style này là cách gọi tiền tố class riêng dựa theo từng
//component khác nhau
export const OpenMoreMenu = () =>{
    const moreButton = document.getElementById('moreButton')
    const moreMenu = document.getElementById('moreMenu')

    moreButton.addEventListener('click', function(){
        if(moreMenu.classList.contains(styles.hiddenMenu)){
            moreMenu.classList.remove(styles.hiddenMenu)
        }else{
            moreMenu.classList.add(styles.hiddenMenu)
        }
    })
}