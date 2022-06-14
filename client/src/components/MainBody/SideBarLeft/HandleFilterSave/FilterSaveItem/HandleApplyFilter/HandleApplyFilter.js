import styles from '../../../SideBarLeft.module.css'


export const HandleApplyFilter = (filter,e) =>{
    const notifySuccess = document.getElementById('applyFilterSuccess')

    let thisFilter = filter.filter

    let xunghoFilterValue = document.getElementById('xunghoFilterValue')
    let xunghoFilter = document.getElementById('xunghoFilter')
    let loaitiemnangFilterValue = document.getElementById('loaitiemnangFilterValue')
    let loaitiemnangFilter = document.getElementById('loaitiemnangFilter')
    let hovademFilterValue = document.getElementById('hovademFilterValue')
    let hovademFilter = document.getElementById('hovademFilter')
    let tenFilterValue = document.getElementById('tenFilterValue')
    let tenFilter = document.getElementById('tenFilter')
    let chucdanhFilterValue = document.getElementById('chucdanhFilterValue')
    let chucdanhFilter = document.getElementById('chucdanhFilter')
    let dtdidongFilterValue = document.getElementById('dtdidongFilterValue')
    let dtdidongFilter = document.getElementById('dtdidongFilter')
    let dtcoquanFilterValue = document.getElementById('dtcoquanFilterValue')
    let dtcoquanFilter = document.getElementById('dtcoquanFilter')
    let emailcanhanFilterValue = document.getElementById('emailcanhanFilterValue')
    let emailcanhanFilter = document.getElementById('emailcanhanFilter')
    let emailcoquanFilterValue = document.getElementById('emailcoquanFilterValue')
    let emailcoquanFilter = document.getElementById('emailcoquanFilter')
    let tochucFilterValue = document.getElementById('tochucFilterValue')
    let tochucFilter = document.getElementById('tochucFilter')
    let phongbanFilterValue = document.getElementById('phongbanFilterValue')
    let phongbanFilter = document.getElementById('phongbanFilter')
    let masothueFilterValue = document.getElementById('masothueFilterValue')
    let masothueFilter = document.getElementById('masothueFilter')
    let taikhoannganhangFilterValue = document.getElementById('taikhoannganhangFilterValue')
    let taikhoannganhangFilter = document.getElementById('taikhoannganhangFilter')
    let motainganhangFilterValue = document.getElementById('motainganhangFilterValue')
    let motainganhangFilter = document.getElementById('motainganhangFilter')
    let ngaythanhlapFilterValue = document.getElementById('ngaythanhlapFilterValue')
    let ngaythanhlapFilter = document.getElementById('ngaythanhlapFilter')
    let nganhngheFilterValue = document.getElementById('nganhngheFilterValue')
    let nganhngheFilter = document.getElementById('nganhngheFilter')
    let tinhthanhFilterValue = document.getElementById('tinhthanhFilterValue')
    let tinhthanhFilter = document.getElementById('tinhthanhFilter')
    let quocgiaFilterValue = document.getElementById('quocgiaFilterValue')
    let quocgiaFilter = document.getElementById('quocgiaFilter')
    let quanhuyenFilterValue = document.getElementById('quanhuyenFilterValue')
    let quanhuyenFilter = document.getElementById('quanhuyenFilter')
    let phuongxaFilterValue = document.getElementById('phuongxaFilterValue')
    let phuongxaFilter = document.getElementById('phuongxaFilter')
    let sonhaFilterValue = document.getElementById('sonhaFilterValue')
    let sonhaFilter = document.getElementById('sonhaFilter')
    let nguongocFilterValue = document.getElementById('nguongocFilterValue')
    let nguongocFilter = document.getElementById('nguongocFilter')
    let loaihinhFilterValue = document.getElementById('loaihinhFilterValue')
    let loaihinhFilter = document.getElementById('loaihinhFilter')
    let linhvucFilterValue = document.getElementById('linhvucFilterValue')
    let linhvucFilter = document.getElementById('linhvucFilter')
    let motaFilterValue = document.getElementById('motaFilterValue')
    let motaFilter = document.getElementById('motaFilter')
    let doanhthuFilterValue = document.getElementById('doanhthuFilterValue')
    let doanhthuFilter = document.getElementById('doanhthuFilter')
    let zaloFilterValue = document.getElementById('zaloFilterValue')
    let zaloFilter = document.getElementById('zaloFilter')


    //hàm tự động cho tất cả
    function applyFilter(filter,filterValue,string, condition){
        if(condition !==''){
            filterValue.value = string
            filterValue.style.display = 'block'
            filter.textContent = condition
            filter.style.color = '#616161'
            filter.parentElement.style.display = 'block'
            filterValue.parentElement.children[0].classList.remove(styles.filterItem)
            filterValue.parentElement.children[0].classList.add(styles.filterItemChecked)
            filterValue.parentElement.children[3].style.display ='block'
        }else{
            filterValue.value = ''
            filterValue.style.display = 'none'
            filter.textContent = "Chứa"
            filter.style.color = '#9ba3b2'
            filter.parentElement.style.display = 'none'
            filterValue.parentElement.children[0].classList.add(styles.filterItem)
            filterValue.parentElement.children[0].classList.remove(styles.filterItemChecked)
            filterValue.parentElement.children[3].style.display ='none'
        }
    }


    //hiện thanh áp dụng ở bottom và xóa các kết quả cũ đi đã
        const filterAction  = document.getElementsByClassName(styles.filterAction)
        if(filterAction[0].style.display !=='flex'){
            filterAction[0].style.display = 'flex'

            if(filterAction[0].children[1].classList.contains(styles.filterActionApplyDisabled)){
                filterAction[0].children[1].classList.remove(styles.filterActionApplyDisabled)
            }
        }
        if(filterAction[0].children[1].style.display !=='block'){
            filterAction[0].children[1].style.display='block'
            filterAction[0].children[2].style.display='none'
        }

    applyFilter(xunghoFilter, xunghoFilterValue, thisFilter.xunghoString, thisFilter.xunghoCondition)
    applyFilter(loaitiemnangFilter, loaitiemnangFilterValue, thisFilter.loaitiemnangString, thisFilter.loaitiemnangCondition)
    applyFilter(hovademFilter, hovademFilterValue, thisFilter.hovademString, thisFilter.hovademCondition)
    applyFilter(tenFilter, tenFilterValue, thisFilter.tenString, thisFilter.tenCondition)
    applyFilter(chucdanhFilter, chucdanhFilterValue, thisFilter.chucdanhString, thisFilter.chucdanhCondition)
    applyFilter(dtdidongFilter, dtdidongFilterValue, thisFilter.dtdidongString, thisFilter.dtdidongCondition)
    applyFilter(dtcoquanFilter, dtcoquanFilterValue, thisFilter.dtcoquanString, thisFilter.dtcoquanCondition)
    applyFilter(emailcanhanFilter, emailcanhanFilterValue, thisFilter.emailcanhanString, thisFilter.emailcanhanCondition)
    applyFilter(emailcoquanFilter, emailcoquanFilterValue, thisFilter.emailcoquanString, thisFilter.emailcoquanCondition)
    applyFilter(tochucFilter, tochucFilterValue, thisFilter.tochucString, thisFilter.tochucCondition)
    applyFilter(phongbanFilter, phongbanFilterValue, thisFilter.phongbanString, thisFilter.phongbanCondition)
    applyFilter(masothueFilter, masothueFilterValue, thisFilter.masothueString, thisFilter.masothueCondition)
    applyFilter(taikhoannganhangFilter, taikhoannganhangFilterValue, thisFilter.taikhoannganhangString, thisFilter.taikhoannganhangCondition)
    applyFilter(motainganhangFilter, motainganhangFilterValue, thisFilter.motainganhangString, thisFilter.motainganhangCondition)
    applyFilter(ngaythanhlapFilter, ngaythanhlapFilterValue, thisFilter.ngaythanhlapString, thisFilter.ngaythanhlapCondition)
    applyFilter(nganhngheFilter, nganhngheFilterValue, thisFilter.nganhngheString, thisFilter.nganhngheCondition)
    applyFilter(tinhthanhFilter, tinhthanhFilterValue, thisFilter.tinhthanhphoString, thisFilter.tinhthanhphoCondition)
    applyFilter(quocgiaFilter, quocgiaFilterValue, thisFilter.quocgiaString, thisFilter.quocgiaCondition)
    applyFilter(quanhuyenFilter, quanhuyenFilterValue, thisFilter.quanhuyenString, thisFilter.quanhuyenCondition)
    applyFilter(phuongxaFilter, phuongxaFilterValue, thisFilter.phuongxaString, thisFilter.phuongxaCondition)
    applyFilter(sonhaFilter, sonhaFilterValue, thisFilter.sonhaString, thisFilter.sonhaCondition)
    applyFilter(nguongocFilter, nguongocFilterValue, thisFilter.nguongocString, thisFilter.nguongocCondition)
    applyFilter(loaihinhFilter, loaihinhFilterValue, thisFilter.loaihinhString, thisFilter.loaihinhCondition)
    applyFilter(linhvucFilter, linhvucFilterValue, thisFilter.linhvucString, thisFilter.linhvucCondition)
    applyFilter(motaFilter, motaFilterValue, thisFilter.motaString, thisFilter.motaCondition)
    applyFilter(doanhthuFilter, doanhthuFilterValue, thisFilter.doanhthuString, thisFilter.doanhthuCondition)
    applyFilter(zaloFilter, zaloFilterValue, thisFilter.zaloString, thisFilter.zaloCondition)


    
    let dungchungFilter = document.getElementById('dungchungFilter')
    let dungchungSelect = document.getElementById('dungchungSelect')


    //hàm dành riêng cho dùng chung
        if(thisFilter.dungchungCondition !==''){
            if(thisFilter.dungchungCondition === 'true'){
                dungchungFilter.textContent = 'Có'
            }
            if(thisFilter.dungchungCondition === 'false'){
                dungchungFilter.textContent = 'Không'
            }
            dungchungFilter.style.color = '#616161'
            dungchungFilter.parentElement.style.display ='block'
            dungchungSelect.classList.remove(styles.filterItem)
            dungchungSelect.classList.add(styles.filterItemChecked)
        }else{
            dungchungFilter.textContent = "Chứa"
            dungchungFilter.style.color = '#9ba3b2'
            dungchungFilter.parentElement.style.display ='none'
            dungchungSelect.classList.add(styles.filterItem)
            dungchungSelect.classList.remove(styles.filterItemChecked)
        }



    const notifySuccessEvent = ()=>{
        notifySuccess.classList.remove(styles.notifySuccessAni)
    }
    notifySuccess.classList.add(styles.notifySuccessAni)
    notifySuccess.addEventListener("transitionend", notifySuccessEvent);
    return()=>{
        notifySuccess.removeEventListener("transitionend", notifySuccessEvent);
    }
}