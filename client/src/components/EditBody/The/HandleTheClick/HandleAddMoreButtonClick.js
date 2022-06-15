import styles from '../The.module.css'

export const HandleAddMoreButtonClick = (e)=>{
    const theTagInput = document.getElementById('theTagInput')
    e.target.parentElement.children[0].classList.add(styles.theTagHidden)
    e.target.classList.add(styles.theTagHidden)
    theTagInput.classList.remove(styles.theTagHidden)
}