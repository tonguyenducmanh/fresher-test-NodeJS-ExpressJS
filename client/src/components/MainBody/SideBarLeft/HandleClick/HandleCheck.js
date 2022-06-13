import styles from '../SideBarLeft.module.css'
export const HandleCheck = () =>{
    const filterItem = document.getElementsByClassName(styles.filterItem)
    const filterAction = document.getElementsByClassName(styles.filterAction)
    let filterCheck = 0
    const filterItemEvent = (e)=>{
        //hiện form nhập nhanh
        if(e.target.classList.contains(styles.filterItem)){
            e.target.classList.remove(styles.filterItem)
            e.target.classList.add(styles.filterItemChecked)
            e.target.parentElement.children[1].style.display = 'block'
            if(e.target.parentElement.children[2]){
                e.target.parentElement.children[2].style.display = 'block'
                if(e.target.parentElement.children[2].value !== ''){
                    e.target.parentElement.children[3].style.display = 'block'
                }
            }
            filterCheck++

        }else{
            e.target.classList.remove(styles.filterItemChecked)
            e.target.classList.add(styles.filterItem)
            e.target.parentElement.children[1].style.display = 'none'
            e.target.parentElement.children[1].children[2].innerHTML = 'Chứa'
            e.target.parentElement.children[1].children[2].style.color = '#9ba3b2'
            if(e.target.parentElement.children[2]){
                e.target.parentElement.children[2].style.display = 'none'
                e.target.parentElement.children[2].value = ''
                if(e.target.parentElement.children[3].style.display = 'block'){
                    e.target.parentElement.children[3].style.display = 'none'
                }
            }
            filterCheck--
        }

            //nếu nhiều nút được check thì hiện cái thanh áp dụng
            if(filterCheck > 0){
                filterAction[0].style.display = 'flex'
            }

        //nếu không có  nút được check thì ẩn cái thanh áp dụng
        if(filterCheck === 0){
            filterAction[0].style.display = 'none'
            filterAction[0].children[1].classList.add(styles.filterActionApplyDisabled)
        }
    }

    for (let i = 0; i < filterItem.length; i++) {
        filterItem[i].addEventListener('click',filterItemEvent)
    }
    return()=>{
        for (let i = 0; i < filterItem.length; i++) {
            filterItem[i].removeEventListener('click',filterItemEvent)
        } 
    }
}