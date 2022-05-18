
import styles from './Pagination.module.css'

export const HandleOption = () =>{
    const paginationSelect = document.getElementById('paginationSelect')
    const paginationOption = document.getElementById('paginationOption')
    const option = document.getElementById('handleBox')
    const optionClicked = function(e){
        paginationSelect.innerHTML = e.target.textContent
        e.target.classList.add(styles.paginationOptionSelected)
        for ( var k = 0 ; k < options.length ; k ++){
            if(options[k].textContent != paginationSelect.textContent){
            options[k].classList.remove(styles.paginationOptionSelected)
            }
        }
        paginationOption.style.display='none'
    }
    const options = option.children
    for ( var i = 0 ; i < options.length ; i ++){
        options[i].addEventListener('click', optionClicked)
    }
}
