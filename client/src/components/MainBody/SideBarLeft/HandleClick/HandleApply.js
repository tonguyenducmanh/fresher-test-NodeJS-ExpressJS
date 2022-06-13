import styles from '../SideBarLeft.module.css'

import { addCustomerFilter } from '../../../../features/customers/customersSlice'

export const HandleApply = (dispatch) =>{
    const filterActionApply = document.getElementsByClassName(styles.filterActionApply)

    const filterActionApplyEvent = (e)=>{
        if(!e.target.classList.contains(styles.filterActionApplyDisabled)){
            e.target.style.display = 'none'
            e.target.parentElement.children[2].style.display = 'block'
            const xunghoFilterValue = document.getElementById('xunghoFilterValue').value
            const xunghoFilter = document.getElementById('xunghoFilter').textContent
            const loaitiemnangFilterValue = document.getElementById('loaitiemnangFilterValue').value
            const loaitiemnangFilter = document.getElementById('loaitiemnangFilter').textContent
            const hovademFilterValue = document.getElementById('hovademFilterValue').value
            const hovademFilter = document.getElementById('hovademFilter').textContent
            const tenFilterValue = document.getElementById('tenFilterValue').value
            const tenFilter = document.getElementById('tenFilter').textContent
            const chucdanhFilterValue = document.getElementById('chucdanhFilterValue').value
            const chucdanhFilter = document.getElementById('chucdanhFilter').textContent
            const dtdidongFilterValue = document.getElementById('dtdidongFilterValue').value
            const dtdidongFilter = document.getElementById('dtdidongFilter').textContent
            const dtcoquanFilterValue = document.getElementById('dtcoquanFilterValue').value
            const dtcoquanFilter = document.getElementById('loaitiemnangFilter').textContent
            const emailcanhanFilterValue = document.getElementById('emailcanhanFilterValue').value
            const emailcanhanFilter = document.getElementById('emailcanhanFilter').textContent
            const emailcoquanFilterValue = document.getElementById('emailcoquanFilterValue').value
            const emailcoquanFilter = document.getElementById('emailcoquanFilter').textContent
            const tochucFilterValue = document.getElementById('tochucFilterValue').value
            const tochucFilter = document.getElementById('tochucFilter').textContent
            const tinhthanhFilterValue = document.getElementById('tinhthanhFilterValue').value
            const tinhthanhFilter = document.getElementById('tinhthanhFilter').textContent
            const quanhuyenFilterValue = document.getElementById('quanhuyenFilterValue').value
            const quanhuyenFilter = document.getElementById('quanhuyenFilter').textContent
            const phuongxaFilterValue = document.getElementById('phuongxaFilterValue').value
            const phuongxaFilter = document.getElementById('phuongxaFilter').textContent
            const nguongocFilterValue = document.getElementById('nguongocFilterValue').value
            const nguongocFilter = document.getElementById('nguongocFilter').textContent
            const loaihinhFilterValue = document.getElementById('loaihinhFilterValue').value
            const loaihinhFilter = document.getElementById('loaihinhFilter').textContent
            const linhvucFilterValue = document.getElementById('linhvucFilterValue').value
            const linhvucFilter = document.getElementById('linhvucFilter').textContent
            const motaFilterValue = document.getElementById('motaFilterValue').value
            const motaFilter = document.getElementById('motaFilter').textContent
            const doanhthuFilterValue = document.getElementById('doanhthuFilterValue').value
            const doanhthuFilter = document.getElementById('doanhthuFilter').textContent
            const dungchungFilter = document.getElementById('dungchungFilter').textContent
            const zaloFilterValue = document.getElementById('zaloFilterValue').value
            const zaloFilter = document.getElementById('zaloFilter').textContent
            const phongbanFilterValue = document.getElementById('phongbanFilterValue').value
            const phongbanFilter = document.getElementById('phongbanFilter').textContent
            const masothueFilterValue = document.getElementById('masothueFilterValue').value
            const masothueFilter = document.getElementById('masothueFilter').textContent
            const taikhoannganhangFilterValue = document.getElementById('taikhoannganhangFilterValue').value
            const taikhoannganhangFilter = document.getElementById('taikhoannganhangFilter').textContent
            const motainganhangFilterValue = document.getElementById('motainganhangFilterValue').value
            const motainganhangFilter = document.getElementById('motainganhangFilter').textContent
            const ngaythanhlapFilterValue = document.getElementById('ngaythanhlapFilterValue').value
            const ngaythanhlapFilter = document.getElementById('ngaythanhlapFilter').textContent
            const nganhngheFilterValue = document.getElementById('nganhngheFilterValue').value
            const nganhngheFilter = document.getElementById('nganhngheFilter').textContent
            const quocgiaFilterValue = document.getElementById('quocgiaFilterValue').value
            const quocgiaFilter = document.getElementById('quocgiaFilter').textContent
            const sonhaFilterValue = document.getElementById('sonhaFilterValue').value
            const sonhaFilter = document.getElementById('sonhaFilter').textContent

            let dungchungFilterValue
            if(dungchungFilter === 'Có'){
            dungchungFilterValue = true
            }
            if(dungchungFilter === 'Không'){
            dungchungFilterValue = false
            }

            function testCondition(condition){
                switch (condition) {
                case 'Chứa':
                    return 3
                case 'Không chứa':
                    return 4
                case 'Là':
                    return 1
                case 'Không là':
                    return 2
                case 'Trống':
                    return 5
                case 'Không trống':
                    return 6
                case 'Có':
                    return 7
                case 'Không':
                    return 7
                default:
                    break;
                }
            }

            const newFilter =  {
            xunghoString: xunghoFilterValue,
            xunghoCondition: testCondition(xunghoFilter),
            hovademString: hovademFilterValue,
            hovademCondition: testCondition(hovademFilter),
            tenString: tenFilterValue,
            tenCondition: testCondition(tenFilter),
            phongbanString: phongbanFilterValue,
            phongbanCondition: testCondition(phongbanFilter),
            chucdanhString: chucdanhFilterValue,
            chucdanhCondition: testCondition(chucdanhFilter),
            dtdidongString: dtdidongFilterValue,
            dtdidongCondition: testCondition(dtdidongFilter),
            dtcoquanString: dtcoquanFilterValue,
            dtcoquanCondition: testCondition(dtcoquanFilter),
            loaitiemnangString: loaitiemnangFilterValue,
            loaitiemnangCondition: testCondition(loaitiemnangFilter),
            nguongocString: nguongocFilterValue,
            nguongocCondition:testCondition(nguongocFilter),
            zaloString: zaloFilterValue,
            zaloCondition: testCondition(zaloFilter),
            emailcanhanString: emailcanhanFilterValue,
            emailcanhanCondition: testCondition(emailcanhanFilter),
            emailcoquanString: emailcoquanFilterValue,
            emailcoquanCondition: testCondition(emailcoquanFilter),
            tochucString: tochucFilterValue,
            tochucCondition: testCondition(tochucFilter),
            masothueString: masothueFilterValue,
            masothueCondition: testCondition(masothueFilter),
            taikhoannganhangString: taikhoannganhangFilterValue,
            taikhoannganhangCondition: testCondition(taikhoannganhangFilter),
            motainganhangString: motainganhangFilterValue,
            motainganhangCondition: testCondition(motainganhangFilter),
            ngaythanhlapString: ngaythanhlapFilterValue,
            ngaythanhlapCondition: testCondition(ngaythanhlapFilter),
            loaihinhString: loaihinhFilterValue,
            loaihinhCondition: testCondition(loaihinhFilter),
            linhvucString: linhvucFilterValue,
            linhvucCondition: testCondition(linhvucFilter),
            nganhngheString: nganhngheFilterValue,
            nganhngheCondition: testCondition(nganhngheFilter),
            doanhthuString: doanhthuFilterValue,
            doanhthuCondition: testCondition(doanhthuFilter),
            quocgiaString: quocgiaFilterValue,
            quocgiaCondition: testCondition(quocgiaFilter),
            tinhthanhphoString: tinhthanhFilterValue,
            tinhthanhphoCondition: testCondition(tinhthanhFilter),
            quanhuyenString: quanhuyenFilterValue,
            quanhuyenCondition: testCondition(quanhuyenFilter),
            phuongxaString: phuongxaFilterValue,
            phuongxaCondition: testCondition(phuongxaFilter),
            sonhaString: sonhaFilterValue,
            sonhaCondition: testCondition(sonhaFilter),
            motaString: motaFilterValue,
            motaCondition:testCondition(motaFilter),
            dungchungString: dungchungFilterValue,
            dungchungCondition: testCondition(dungchungFilter),
            }

            dispatch(addCustomerFilter(newFilter))

 
        }
           }
    filterActionApply[0].addEventListener('click', filterActionApplyEvent)
    
    return()=>{
        filterActionApply[0].removeEventListener('click', filterActionApplyEvent)
    }
}