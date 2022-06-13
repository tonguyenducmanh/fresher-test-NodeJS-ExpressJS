import styles from '../FilterSaveItem.module.css'

export const HandleFilterItemOpenMenu = (e) =>{
            if(e.target.parentElement.children[2].style.display !== 'flex'){
                e.target.parentElement.children[2].style.display = 'flex'
            }else{
                e.target.parentElement.children[2].style.display = 'none'
            }


}