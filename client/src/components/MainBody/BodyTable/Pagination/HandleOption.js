import styles from './PaginationBar/PaginationBar.module.css'
import stylesTwo from '../Table/Customers/Customers.module.css'

export const HandleOption = (e) =>{
    const paginationPanelFrame = document.getElementsByClassName(styles.paginationPanelFrame)
    const paginationOption = document.getElementsByClassName(styles.paginationOption)
    const options = document.getElementsByClassName(styles.paginationOptionItem)
    const iconChecks = document.getElementsByClassName(stylesTwo.iconButtonCustomers)

    for ( let k = 0 ; k < options.length ; k ++){
        options[k].addEventListener('click', (e) =>{
            paginationOption[0].style.display='none'
            paginationPanelFrame[0].innerHTML = e.target.textContent
            for( let m = 0 ; m < options.length ; m++){
                e.target.parentElement.children[m].classList.remove(styles.paginationOptionSelected)
            }
            e.target.classList.add(styles.paginationOptionSelected)
            for( let p = 0 ; p < iconChecks.length; p++){
                console.log(iconChecks[p])
                if(iconChecks[p].classList.contains(stylesTwo.iconHeadingChecked)){
                    iconChecks[p].classList.remove(stylesTwo.iconHeadingChecked)
                    iconChecks[p].classList.add(stylesTwo.iconHeading)
                    iconChecks[p].parentElement.classList.remove(stylesTwo.itemChecked)
                }
            }
        })
    }
    //xử lý nếu click vào trong và ra ngoài
    document.addEventListener("mousedown", (event) => {
        if(paginationOption[0]){
            if (!paginationOption[0].contains(event.target)) {
                paginationOption[0].style.display = 'none'
           }
        }
      });
}
