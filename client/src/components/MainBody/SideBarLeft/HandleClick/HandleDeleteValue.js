import styles from '../SideBarLeft.module.css'

export const HandleDeleteValue = () =>{
    const clearInput = document.getElementsByClassName(styles.clearInput)
    const filterActionApply = document.getElementsByClassName(styles.filterActionApply)
    const filterAction = document.getElementsByClassName(styles.filterAction)
    
    const clearInputEvent = (e)=>{
        if(filterAction[0].children[1].style.display === 'none'){
            filterAction[0].children[1].style.display = 'block'
            filterAction[0].children[2].style.display = 'none'
        }
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