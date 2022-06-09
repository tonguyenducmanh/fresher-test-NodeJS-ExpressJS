import styles from '../SideBarLeft.module.css'

export const HandleDeleteValue = () =>{
    const clearInput = document.getElementsByClassName(styles.clearInput)
    const filterActionApply = document.getElementsByClassName(styles.filterActionApply)
    
    const clearInputEvent = (e)=>{
        let count = 0 
        e.target.parentElement.children[2].value = ''
        e.target.style.display = 'none'

        //check xem có bao nhiêu nút xóa đang hiện, k có thì ẩn nút áp dụng
        for(let i = 0; i<clearInput.length ; i++){
            if(clearInput[i].style.display === 'block'){
                count ++
            }
        }
        if(count >0){
            filterActionApply[0].classList.remove(styles.filterActionApplyDisabled)
        }else{
            filterActionApply[0].classList.add(styles.filterActionApplyDisabled)
        }
    }

    for(let i = 0; i<clearInput.length ; i++){
        clearInput[i].addEventListener('click', clearInputEvent)
    }
    
    return()=>{
        for(let i = 0; i<clearInput.length; i++){
            clearInput[i].removeEventListener('click', clearInputEvent)
        }
    }
}