import styles from '../../EditBody.module.css'

export const ClearMotaValue = () =>{
    const clearInput = document.getElementsByClassName(styles.clearInputMota)
        clearInput[0].addEventListener('click', (e)=>{
            e.target.parentElement.children[1].value= ''
            e.target.style.display = 'none'
        })
}