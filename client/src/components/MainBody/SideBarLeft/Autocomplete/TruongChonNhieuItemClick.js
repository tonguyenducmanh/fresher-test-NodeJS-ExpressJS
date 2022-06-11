import styles from '../SideBarLeft.module.css'

export const TruongChonNhieuItemClick = (e) => {
    const filterActionApply = document.getElementsByClassName(styles.filterActionApply)
    //xử lý tính năng nhập nhanh gợi ý vào input
    e.target.parentElement.parentElement.children[2].innerHTML = e.target.textContent
    e.target.parentElement.parentElement.children[2].style.color = '#616161'
    e.target.parentElement.parentElement.children[1].style.display = 'none'
    e.target.parentElement.parentElement.children[3].style.display = 'none'
    e.target.parentElement.parentElement.children[0].style.display = 'none'
    e.target.parentElement.parentElement.style.setProperty('--iconDown', '-336px -32px')

    //nếu chỉ có trống hoặc không trống được click thì phải bỏ ô nhập text input đi
    // đồng thời bật nút áp dụng lên và ngược lại
    if(e.target.textContent === 'Trống' || e.target.textContent === 'Không trống'){
        e.target.parentElement.parentElement.parentElement.children[2].style.display = 'none'
        e.target.parentElement.parentElement.parentElement.children[3].style.display = 'none'
        filterActionApply[0].classList.remove(styles.filterActionApplyDisabled)
    }
    else{
        e.target.parentElement.parentElement.parentElement.children[2].style.display = 'block'
        e.target.parentElement.parentElement.parentElement.children[3].style.display = 'none'
        filterActionApply[0].classList.add(styles.filterActionApplyDisabled)
    }
}