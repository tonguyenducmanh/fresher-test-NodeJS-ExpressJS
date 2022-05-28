import styles from '../CreateBody.module.css'
import { useDispatch } from 'react-redux'
import {addSoNha} from '../../../features/location/locationSlice'
export const HandleTypingNumberHome = () => {
    const dispatch = useDispatch()
    


       return(
        <input className={styles.thongTinInput} 
        onChange={(e) => dispatch(addSoNha(e.target.value))
            }
        />
       )
}