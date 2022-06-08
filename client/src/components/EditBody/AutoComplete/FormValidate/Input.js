import styles from '../../EditBody.module.css'

export const Input = () =>{
    const thongTinInput = document.getElementsByClassName(styles.thongTinInput)
    const thongTinMoTaInput = document.getElementsByClassName(styles.thongTinMoTaInput)
    const thongTinInputEvent = (e)=>{
        if(e.target.value ===''){
            e.target.parentElement.children[e.target.parentElement.children.length -1].style.display ='none'
        } else{
            e.target.parentElement.children[e.target.parentElement.children.length -1].style.display ='block'
        }
    }
    const thongTinMoTaInputEvent =  (e)=>{
        if(e.target.value ===''){
            e.target.parentElement.children[e.target.parentElement.children.length -1].style.display ='none'
        } else{
            e.target.parentElement.children[e.target.parentElement.children.length -1].style.display ='block'
        }
    }
    for(let i = 0; i< thongTinInput.length; i++){
        ['input', 'focus'].forEach( evt =>

        thongTinInput[i].addEventListener(evt, thongTinInputEvent))
    }
    thongTinMoTaInput[0].addEventListener('change',thongTinMoTaInputEvent)
    return()=>{
        for(let i = 0; i< thongTinInput.length; i++){
            ['input', 'focus'].forEach( evt =>
    
            thongTinInput[i].removeEventListener(evt, thongTinInputEvent))
        }
        thongTinMoTaInput[0].removeEventListener('change',thongTinMoTaInputEvent)
    }
}