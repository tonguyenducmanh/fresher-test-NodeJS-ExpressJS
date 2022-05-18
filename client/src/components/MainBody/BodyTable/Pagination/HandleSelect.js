export const HandleSelect = () =>{

    const paginationOption = document.getElementById('paginationOption')
    const paginationSelect = document.getElementById('paginationSelect')
    // javascript không xét trường hợp if(paginationOption.style.display ngay lần đầu chạy)
    // nên phải dùng offsetWidth và offsetHeight thay thế
    paginationSelect.addEventListener('click',function(){
        if(paginationOption.offsetWidth > 0 || paginationOption.offsetHeight >0){
            paginationOption.style.display = 'none'
        } else{
            paginationOption.style.display = 'block'
        }

    })
}