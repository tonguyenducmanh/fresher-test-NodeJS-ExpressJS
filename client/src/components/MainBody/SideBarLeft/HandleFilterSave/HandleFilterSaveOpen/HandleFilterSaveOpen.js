import styles from '../HandleFilterSave.module.css'


export const HandleSearchIconClick = ()=>{
    const filterSave = document.getElementsByClassName(styles.filterSave)
    const filterSaveList = document.getElementsByClassName(styles.filterSaveList)

    const filterSaveEvent = (e)=>{
        if(e.target.classList.contains(styles.filterSaveOpen)){
            e.target.classList.remove(styles.filterSaveOpen)
            filterSaveList[0].style.display='flex'
        }else{
            e.target.classList.add(styles.filterSaveOpen)
            filterSaveList[0].style.display='none'
        }
    }

    filterSave[0].addEventListener('click', filterSaveEvent)

    return()=>{
        filterSave[0].removeEventListener('click', filterSaveEvent)
    }
}