import styles from '../../EditBody.module.css'

export const ClearInputValue = () =>{
    const clearInput = document.getElementsByClassName(styles.clearInput)
    for(let i = 0; i< clearInput.length; i++){
        clearInput[i].addEventListener('click', (e)=>{
            e.target.parentElement.children[0].value= ''
            e.target.style.display = 'none'
        })
    }
}