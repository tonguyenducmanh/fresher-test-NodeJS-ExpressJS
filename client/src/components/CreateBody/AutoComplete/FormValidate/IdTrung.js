import styles from '../../CreateBody.module.css'

export const IdTrung = (maBiTrung) =>{
    const idTrungNoti = document.getElementById('idTrungNoti')
    if(maBiTrung !== []){
        idTrungNoti.style.display = 'block'
    } else{
        idTrungNoti.style.display = 'none'
    }
}