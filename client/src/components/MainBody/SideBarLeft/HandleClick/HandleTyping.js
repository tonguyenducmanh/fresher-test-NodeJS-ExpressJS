import styles from '../SideBarLeft.module.css'

export const HandleTyping = () =>{
    const filterTextContent = document.getElementsByClassName(styles.filterTextContent)
    const filterActionApply = document.getElementsByClassName(styles.filterActionApply)
    const filterAction = document.getElementsByClassName(styles.filterAction)
    const filterTextContentEvent = (e)=>{
        if(filterAction[0].children[1].style.display === 'none'){
            filterAction[0].children[1].style.display = 'block'
            filterAction[0].children[2].style.display = 'none'
        }
        if(e.target.value !==''){
            e.target.parentElement.children[e.target.parentElement.children.length-1].style.display = 'block'
        }else{
            e.target.parentElement.children[e.target.parentElement.children.length-1].style.display = 'none'
        }

        //check xem có bao nhiêu nút xóa đang hiện, k có thì ẩn nút áp dụng

        let count = 0 
        for(let p = 0 ; p<filterTextContent.length ; p++){
            if(filterTextContent[p].parentElement.children[3].style.display ==='block'){
                count ++
            }
        }
        if(count >0){
            filterActionApply[0].classList.remove(styles.filterActionApplyDisabled)
        }else{
            filterActionApply[0].classList.add(styles.filterActionApplyDisabled)
        }

    }
    for(let i = 0 ; i< filterTextContent.length ; i++){
        ['input'].forEach(evt =>
            filterTextContent[i].addEventListener(evt,filterTextContentEvent ))
    }

    return()=>{
        for(let i = 0 ; i< filterTextContent.length ; i++){
            ['input'].forEach(evt =>
                filterTextContent[i].removeEventListener(evt, filterTextContentEvent))
        }
    }
}