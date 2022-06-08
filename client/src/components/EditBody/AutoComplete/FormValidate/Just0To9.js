import styles from '../../EditBody.module.css'

export const Just0To9 = () =>{
    // const thongtinAtoZs = document.getElementsByClassName(styles.thongtinAtoZ)
    const thongtin0to9s = []
    thongtin0to9s.push(document.getElementById('dienThoaiDiDongEdit'))
    thongtin0to9s.push(document.getElementById('dienThoaiCoQuanEdit'))
    thongtin0to9s.push(document.getElementById('taiKhoanNganHangEdit'))
    const thongtin0to9sEvent = (e)=>{
        const re = new RegExp(/[0-9 ]/);

        if(e.target.value !== ''){
            const textTest = e.target.value.split('')
            let z = 0
            for(let k = 0 ; k <textTest.length; k++){
                    if(re.test(textTest[k])){
                        z ++
                    }
            }

            if(z === textTest.length){
                e.target.parentElement.children[2].style.display = 'none'
                e.target.parentElement.parentElement.children[0].classList.remove(styles.thongTinTitleWarning)
            } else{
                e.target.classList.add(styles.thonngTinWarning)
                e.target.parentElement.children[2].style.display = 'block'
                e.target.parentElement.parentElement.children[0].classList.add(styles.thongTinTitleWarning)
            }
            
            

        }else{
            e.target.parentElement.children[2].style.display = 'none'
            e.target.parentElement.parentElement.children[0].classList.add(styles.thongTinTitleWarning)
        }
}
    for(let i = 0; i< thongtin0to9s.length; i++){


        ['blur','input'].forEach( evt =>

            thongtin0to9s[i].addEventListener(evt,thongtin0to9sEvent ))
    }
    return()=>{
        for(let i = 0; i< thongtin0to9s.length; i++){

    
            ['blur','input'].forEach( evt =>
    
                thongtin0to9s[i].removeEventListener(evt,thongtin0to9sEvent ))
        }
    }
}