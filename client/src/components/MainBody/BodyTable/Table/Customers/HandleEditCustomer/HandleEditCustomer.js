import styles from '../Customers.module.css'


import { addTempCustomer } from '../../../../../../features/customers/customersSlice'
import { quocGia, addTinhThanh, addQuanHuyen, addPhuongXa } from '../../../../../../features/location/locationSlice';

export const HandleEditCustomer = (dispatch,customers) =>{

    const customerEdits = document.getElementsByClassName(styles.trId)
    const checkButtons = document.getElementsByClassName(styles.iconButtonCustomers)
    const tdLinks = document.getElementsByClassName(styles.tdLink)
    for(let k = 0 ; k < customerEdits.length; k++){
        customerEdits[k].addEventListener('dblclick',(event)=>{
            if(checkButtons[k]){
                if(!checkButtons[k].contains(event.target)){
                    tdLinks[k].children[0].click()
                    // thêm các dữ liệu về người dùng định sửa vào global state redux toolkits
                    dispatch(addTempCustomer(customers[k]))
                    if(customers[k].quocgia !=='-' && customers[k].quocgia !==''){dispatch(quocGia(customers[k].quocgia))}
                    if(customers[k].tinhthanhpho !=='-' && customers[k].quocgia !==''){dispatch(addTinhThanh(customers[k].tinhthanhpho))}
                    if(customers[k].quanhuyen !=='-' && customers[k].quanhuyen !==''){dispatch(addQuanHuyen(customers[k].quanhuyen))}
                    if(customers[k].phuongxa !=='-' && customers[k].phuongxa !==''){dispatch(addPhuongXa(customers[k].phuongxa))}
                }
            }
        })
    }
}