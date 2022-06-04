import styles from '../../EditBody.module.css'

export const JustAtoZ = () =>{
    // const thongtinAtoZs = document.getElementsByClassName(styles.thongtinAtoZ)
    const thongtinAtoZs = []
    thongtinAtoZs.push(document.getElementById('firstName'))
    thongtinAtoZs.push(document.getElementById('lastName'))
    for(let i = 0; i< thongtinAtoZs.length; i++){

        const re = new RegExp(/[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]/);

        ['blur', 'input'].forEach( evt =>

            thongtinAtoZs[i].addEventListener(evt, (e)=>{
                if(e.target.value !== ''){
                    const textTest = e.target.value.split('')
                    let z = 0
                    for(let k = 0 ; k <textTest.length; k++){
                            if(re.test(textTest[k])){
                                z ++
                            }
                    }

                    if(z === textTest.length){
                        e.target.parentElement.children[2].style.display = 'none'
                        e.target.parentElement.parentElement.children[0].classList.remove(styles.thongTinTitleWarning)
                    } else{
                        e.target.classList.add(styles.thonngTinWarning)
                        e.target.parentElement.children[2].style.display = 'block'
                        e.target.parentElement.parentElement.children[0].classList.add(styles.thongTinTitleWarning)
                    }
                    

                }else{
                    e.target.parentElement.children[2].style.display = 'none'
                    e.target.parentElement.parentElement.children[0].classList.add(styles.thongTinTitleWarning)
                }
        }))
    }
}