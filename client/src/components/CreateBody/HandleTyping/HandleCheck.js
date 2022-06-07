import styles from '../CreateBody.module.css'

export const HandleCheck = () =>{
    const dungChung = document.getElementById('dungChung')
    dungChung.addEventListener('click', function(e) {
        if(dungChung.classList.contains(styles.iconCheck)){
            dungChung.classList.remove(styles.iconCheck)
            dungChung.classList.add(styles.iconChecked)
        } else{
            dungChung.classList.add(styles.iconCheck)
            dungChung.classList.remove(styles.iconChecked)
        }
    })
}