import styles from './PaginationBar/PaginationBar.module.css'

export const HandleSelect = () =>{

    const paginationOption = document.getElementsByClassName(styles.paginationOption)
    paginationOption[0].style.display = 'block'

}