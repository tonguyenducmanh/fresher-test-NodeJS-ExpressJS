import styles from '../../TiemNang/TiemNang.module.css'
import { fetchCheckCustomerExist } from "../../../../features/customers/customersSlice";

export const TiemNangValidate = ( dispatch) =>{
    const maTiemNang = document.getElementById('maTiemNang')
    const oldTiemNangValueCheck = document.getElementById('oldTiemNangValueCheck')

    const re = new RegExp(/[0-9]/);
    const maTiemNangEvent = (e)=>{
        if(e.target.value !== ''){
            dispatch(fetchCheckCustomerExist(`?findID=${e.target.value}`))
            e.target.parentElement.children[1].style.display = 'none'
            const numberPresent = e.target.value.split('')
            const lengthID = 17
            const newNumberString = numberPresent.slice(2, numberPresent.length).join('').length

            if(newNumberString != (lengthID-2)){
                e.target.classList.add(styles.thonngTinWarning)
                e.target.parentElement.children[5].style.display = 'block'
                e.target.parentElement.parentElement.children[0].classList.add(styles.thongTinTitleWarning)
            }else{
                e.target.parentElement.children[5].style.display = 'none'
                if(e.target.value === oldTiemNangValueCheck.textContent){
                    e.target.classList.add(styles.thonngTinWarning)
                    e.target.parentElement.children[4].style.display = 'block'
                    e.target.parentElement.parentElement.children[0].classList.add(styles.thongTinTitleWarning)
                }else{
                    e.target.classList.remove(styles.thonngTinWarning)
                    e.target.parentElement.children[4].style.display = 'none'
                    e.target.parentElement.parentElement.children[0].classList.remove(styles.thongTinTitleWarning)
                }
            }
            
            const textTest = e.target.value.split('')
            if(textTest[0] !== 'T' | textTest[1] !== 'N'){
                e.target.classList.add(styles.thonngTinWarning)
                e.target.parentElement.children[2].style.display = 'block'
                e.target.parentElement.parentElement.children[0].classList.add(styles.thongTinTitleWarning)



            } else {
                e.target.classList.remove(styles.thonngTinWarning)
                e.target.parentElement.children[2].style.display = 'none'
                e.target.parentElement.parentElement.children[0].classList.remove(styles.thongTinTitleWarning)
            }

            let z = 2
            for(let k = 2 ; k <textTest.length; k++){
                    if(re.test(textTest[k])){
                        z ++
                    }
            }

            if(z === textTest.length){
                e.target.classList.remove(styles.thonngTinWarning)
                e.target.parentElement.children[3].style.display = 'none'
                e.target.parentElement.parentElement.children[0].classList.remove(styles.thongTinTitleWarning)
            } else{
                e.target.classList.add(styles.thonngTinWarning)
                e.target.parentElement.children[3].style.display = 'block'
                e.target.parentElement.parentElement.children[0].classList.add(styles.thongTinTitleWarning)
            }
            

        }else{
            e.target.classList.add(styles.thonngTinWarning)
            e.target.parentElement.children[1].style.display = 'block'
            e.target.parentElement.children[2].style.display = 'none'
            e.target.parentElement.children[3].style.display = 'none'
            e.target.parentElement.children[4].style.display = 'none'
            e.target.parentElement.parentElement.children[0].classList.add(styles.thongTinTitleWarning)

        }
        if(e.target.value ===''){
            e.target.parentElement.children[e.target.parentElement.children.length -1].style.display ='none'
        } else{
            e.target.parentElement.children[e.target.parentElement.children.length -1].style.display ='block'
        }
}
        ['blur', 'input'].forEach( evt =>

            maTiemNang.addEventListener(evt, maTiemNangEvent ))

        return()=>{
            ['blur', 'input'].forEach( evt =>

                maTiemNang.removeEventListener(evt, maTiemNangEvent ))
        }
}