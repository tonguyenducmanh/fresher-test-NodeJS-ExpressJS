import styles from '../The.module.css'

export const HandleTheClick = (e)=>{
    const theTagInput = document.getElementById('theTagInput')
    e.target.classList.add(styles.theTagHidden)
    theTagInput.classList.remove(styles.theTagHidden)
}