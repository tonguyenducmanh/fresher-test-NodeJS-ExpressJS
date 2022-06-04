import styles from '../Right.module.css'

export const HandleCheck = () =>{
    const DungChungQuick = document.getElementById('DungChungQuick')
    DungChungQuick.addEventListener('click', function(e) {
        console.log('hii')
        if(DungChungQuick.classList.contains(styles.iconCheck)){
            DungChungQuick.classList.remove(styles.iconCheck)
            DungChungQuick.classList.add(styles.iconChecked)
        } else{
            DungChungQuick.classList.add(styles.iconCheck)
            DungChungQuick.classList.remove(styles.iconChecked)
        }
    })
}