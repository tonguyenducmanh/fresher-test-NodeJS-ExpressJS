import styles from '../CreateBody.module.css'
import { useDispatch } from 'react-redux'
import {addSoNha} from '../../../features/location/locationSlice'
export const HandleTypingNumberHome = () => {
    const dispatch = useDispatch()
    


       return(
        <>
            <span className={styles.thongTinInputFather}>
                <input className={styles.thongTinInput} 
                onChange={(e) => dispatch(addSoNha(e.target.value))
                }
                id='soNha'
                
                autoComplete="off"
                
                />
                <span className={styles.thonngTinWarningText}>Số nhà không được để trống</span>
                <span className={styles.clearInput}></span>

            </span>
        </>
       )
}