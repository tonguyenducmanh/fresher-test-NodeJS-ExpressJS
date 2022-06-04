import styles from '../EditBody.module.css'

export const ConnectName = () => {
        const firstName = document.getElementById('firstName')
        const lastName = document.getElementById('lastName')
        const fullName = document.getElementById('fullName')
        const fullNameStyles = document.getElementsByClassName(styles.thongTinHoVaTen)
      if(firstName.value || lastName.value){
          fullName.innerHTML = firstName.value + ' ' + lastName.value
          fullNameStyles[0].style.backgroundColor =  '#ffffff';
      }else{
          fullNameStyles[0].style.backgroundColor =  '#e2e4e9';
          fullName.innerHTML = ''
      }
}