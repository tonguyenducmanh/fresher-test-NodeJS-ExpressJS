import styles from './The.module.css'
import { HandleTheClick } from './HandleTheClick/HandleTheClick'
import { HandleAddMoreButtonClick } from './HandleTheClick/HandleAddMoreButtonClick'
export const The = ({editCustomer})=>{


    return(
        <span className={styles.theTag}>
        {   editCustomer.the.length === 1 && editCustomer.the[0] === '' &&
            <span className={styles.theTagContainer}>
                <span className={`${styles.icon} ${styles.theTagIcon} ${styles.iconInfo}`}>
                    <span className={styles.iconToolTip}>Nhập nhiều thẻ <br></br>theo cú pháp #the</span>
                </span>
                <span className={styles.theTagTitle}
                    onClick={(e)=>HandleTheClick(e)}
                >Thêm thẻ</span>
                <input className={`${styles.theTagInput} ${styles.theTagHidden}`} 
                    placeholder='Nhập thẻ' id='theTagInput'
                />
            </span>
        }
        {   editCustomer.the.length > 0 && editCustomer.the[0] !== '' &&
            <span className={styles.theTagContainer}>
                <span className={`${styles.icon} ${styles.theTagIcon} ${styles.iconInfo}`}>
                    <span className={styles.iconToolTip}>Nhập nhiều thẻ <br></br>theo cú pháp #the</span>
                </span>
                <span className={styles.theTagItemGroup}>
                <span >
                { editCustomer.the.map((theCon)=>(
                    <span key={theCon} className={styles.theTagItem}>{theCon}</span> 
                    ))}
                </span>
                <span className={`${styles.icon} ${styles.theTagItem} ${styles.theTagItemAddMore}`}
                    onClick={(e)=>HandleAddMoreButtonClick(e)}
                ></span>
                </span>
                <input className={`${styles.theTagInput} ${styles.theTagHidden}`} 
                    placeholder='Nhập thẻ' id='theTagInput' 
                    defaultValue={editCustomer.the.join('#')}
                />
            </span>
        }
</span>
    )
}