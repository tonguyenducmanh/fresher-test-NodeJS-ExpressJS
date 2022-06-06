import styles from '../../CreateBody.module.css'

export const XemNgay = () =>{
   const xemNgay = document.getElementById('xemNgay')
   xemNgay.addEventListener('click',()=>{
       if(xemNgay.children[0].style.display =='none'){
        xemNgay.children[0].style.display ='block'
       }else{
           xemNgay.children[0].style.display = 'none'
       }
   })
   document.addEventListener("mousedown", (event) => {
    if(!xemNgay.children[0].contains(event.target)){
        xemNgay.children[0].style.display = 'none'
    }
})
}