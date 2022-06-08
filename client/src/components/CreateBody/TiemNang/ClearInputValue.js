import styles from './TiemNang.module.css'

export const ClearInputValue = () =>{
    const clearInput = document.getElementsByClassName(styles.clearInput)
    const clearInputEvent = (e)=>{
        e.target.parentElement.children[0].value= ''
        e.target.style.display = 'none'
    }
    for(let i = 0; i< clearInput.length; i++){
        clearInput[i].addEventListener('click',clearInputEvent )
    }
    return()=>{
        for(let i = 0; i< clearInput.length; i++){
            clearInput[i].removeEventListener('click',clearInputEvent )
        }
    }
}