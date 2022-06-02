import styles from './DiaChiTongHop.module.css'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import stylesTwo from './TruongChonNhieu.module.css'
const DiaChiTongHop = () => {
    const getQuocGia = useSelector(state => state.location.quocGia)
    const getTinhThanh = useSelector(state => state.location.tinhThanh)
    const getquanHuyen = useSelector(state => state.location.quanHuyen)
    const getPhuongXa = useSelector(state => state.location.phuongXa)
    
    let getsoNha= useSelector(state => state.location.soNha)
    useEffect(()=>
    {
        let tinhThanh = document.getElementById('tinhThanh')
        let quanHuyen = document.getElementById('quanHuyen')
        let phuongXa = document.getElementById('phuongXa')
        if(tinhThanh.classList.contains(stylesTwo.thongTinContentGray)){
            tinhThanh =''
        }else { tinhThanh = tinhThanh.textContent + ','}
        if(quanHuyen.classList.contains(stylesTwo.thongTinContentGray) ){
            quanHuyen =''
        }else { quanHuyen = quanHuyen.textContent + ','}
        if(phuongXa.classList.contains(stylesTwo.thongTinContentGray)){
            phuongXa =''
        }else { phuongXa = phuongXa.textContent + ','}
        if(getsoNha){
            getsoNha += ','
        }
    
        const locationFinal = document.getElementsByClassName(styles.thongTinDiaChiTongHop)
        locationFinal[0].value = `${getsoNha} ${phuongXa} ${quanHuyen} ${tinhThanh} ${getQuocGia}`
    },[getPhuongXa,getTinhThanh,getquanHuyen,getsoNha,getQuocGia])

    return(
        <textarea className={`${styles.thongTinInput}  ${styles.thongTinDiaChiTongHop}`} disabled id='diaChiTongHop'/>
    )
}

export default DiaChiTongHop