
import styles from '../ActionBar.module.css'

export const HideQuickUpdate = () =>{
   const updateBox = document.getElementById('updateBox')
   updateBox.classList.add(styles.hiddenUpdateBox)
}