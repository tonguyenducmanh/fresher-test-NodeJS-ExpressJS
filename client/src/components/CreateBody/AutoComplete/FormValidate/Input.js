import styles from '../../CreateBody.module.css'

export const Input = () =>{
    const thongTinInput = document.getElementsByClassName(styles.thongTinInput)
    const thongTinMoTaInput = document.getElementsByClassName(styles.thongTinMoTaInput)
    for(let i = 0; i< thongTinInput.length; i++){
        ['input', 'focus'].forEach( evt =>

        thongTinInput[i].addEventListener(evt, (e)=>{
            if(e.target.value ===''){
                e.target.parentElement.children[e.target.parentElement.children.length -1].style.display ='none'
            } else{
                e.target.parentElement.children[e.target.parentElement.children.length -1].style.display ='block'
            }
        }))
    }
    thongTinMoTaInput[0].addEventListener('change', (e)=>{
        if(e.target.value ===''){
            e.target.parentElement.children[e.target.parentElement.children.length -1].style.display ='none'
        } else{
            e.target.parentElement.children[e.target.parentElement.children.length -1].style.display ='block'
        }})
}