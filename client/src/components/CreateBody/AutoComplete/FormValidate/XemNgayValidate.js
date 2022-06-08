export const XemNgayValidate = () =>{
   const xemNgay = document.getElementById('xemNgay')
   const xemNgayEvent = ()=>{
    if(xemNgay.children[0].style.display =='none'){
     xemNgay.children[0].style.display ='block'
    }else{
        xemNgay.children[0].style.display = 'none'
    }
}
    const documentEvent = (event) => {
        if(!xemNgay.children[0].contains(event.target)){
            xemNgay.children[0].style.display = 'none'
        }
    }
   xemNgay.addEventListener('click',xemNgayEvent)
   document.addEventListener("mousedown", documentEvent)
   return()=>{
    xemNgay.removeEventListener('click',xemNgayEvent)
    document.removeEventListener("mousedown", documentEvent)
   }
}