import styles from '../EditBody.module.css'

export const HandleCheck = () =>{
    const dungChung = document.getElementById('dungChung')
    dungChung.addEventListener('click', function(e) {
        console.log('hii')
        if(dungChung.classList.contains(styles.iconCheck)){
            dungChung.classList.remove(styles.iconCheck)
            dungChung.classList.add(styles.iconChecked)
        } else{
            dungChung.classList.add(styles.iconCheck)
            dungChung.classList.remove(styles.iconChecked)
        }
    })
}