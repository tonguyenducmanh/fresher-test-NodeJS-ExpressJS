import styles from '../../EditBody.module.css'

export const ClearMotaValue = () =>{
    const clearInput = document.getElementsByClassName(styles.clearInputMota)
    const clearInputEvent = (e)=>{
        e.target.parentElement.children[1].value= ''
        e.target.style.display = 'none'
    }
        clearInput[0].addEventListener('click', clearInputEvent)
        return()=>{
        clearInput[0].removeEventListener('click', clearInputEvent)

        }
}