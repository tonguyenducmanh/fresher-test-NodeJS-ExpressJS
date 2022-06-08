import styles from '../../CreateBody.module.css'

export const MustHave = () =>{
    const thongtinMustHaves = document.getElementsByClassName(styles.thongtinMustHave)
    const thongtinMustHavesEvent = (e)=>{
        if(e.target.value ===''){
            e.target.classList.add(styles.thonngTinWarning)
            e.target.parentElement.children[1].style.display = 'block'
            e.target.parentElement.parentElement.children[0].classList.add(styles.thongTinTitleWarning)
        } else{
            e.target.classList.remove(styles.thonngTinWarning)
            e.target.parentElement.children[1].style.display = 'none'
            e.target.parentElement.parentElement.children[0].classList.remove(styles.thongTinTitleWarning)
        }
    }
    for(let i = 0; i< thongtinMustHaves.length; i++){
        ['blur','input'].forEach( evt =>

        thongtinMustHaves[i].addEventListener(evt, thongtinMustHavesEvent))
    }
    return()=>{
        for(let i = 0; i< thongtinMustHaves.length; i++){
            ['blur','input'].forEach( evt =>
    
            thongtinMustHaves[i].removeEventListener(evt, thongtinMustHavesEvent))
        }
    }
}