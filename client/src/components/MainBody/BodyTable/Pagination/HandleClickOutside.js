export const HandleClickOutside = () =>{

    const paginationOption = document.getElementById('paginationOption')
    const city = document.getElementById('city')
    // javascript không xét trường hợp if(paginationOption.style.display ngay lần đầu chạy)
    // nên phải dùng offsetWidth và offsetHeight thay thế
    city.addEventListener('click',function(){
            paginationOption.style.display = 'none'
    })
}