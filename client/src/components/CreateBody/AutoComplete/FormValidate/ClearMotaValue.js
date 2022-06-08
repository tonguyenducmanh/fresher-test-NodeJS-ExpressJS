import styles from '../../CreateBody.module.css'

export const ClearMotaValue = () =>{
    const clearInputEvent = (e)=>{
        e.target.parentElement.children[1].value= ''
        e.target.style.display = 'none'
    }
    const clearInput = document.getElementsByClassName(styles.clearInputMota)
    clearInput[0].addEventListener('click',clearInputEvent )
    return()=>{
    clearInput[0].removeEventListener('click',clearInputEvent )

    }
}