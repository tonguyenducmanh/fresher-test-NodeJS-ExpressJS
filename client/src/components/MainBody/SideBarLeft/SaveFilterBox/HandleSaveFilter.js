import styles from './SaveFilterBox.module.css'
import qs from 'qs'
import { createFilter } from '../../../../features/filters/filtersSlice'
import { fetchFiltersList } from '../../../../features/filters/filtersSlice'

export const HandleSaveFilter = (dispatch, e) =>{
        if(!e.target.classList.contains(styles.editYesDisabled)){
            const xunghoFilterValue = document.getElementById('xunghoFilterValue').value

            let xungho
            const xunghoFilter = document.getElementById('xunghoFilter')
            xunghoFilter.parentElement.style.display !== 'block' ? xungho = '' : xungho = xunghoFilter.textContent

            const loaitiemnangFilterValue = document.getElementById('loaitiemnangFilterValue').value

            let loaitiemnang
            const loaitiemnangFilter = document.getElementById('loaitiemnangFilter')
            loaitiemnangFilter.parentElement.style.display !== 'block' ? loaitiemnang = '' : loaitiemnang = loaitiemnangFilter.textContent

            const hovademFilterValue = document.getElementById('hovademFilterValue').value

            let hovadem
            const hovademFilter = document.getElementById('hovademFilter')
            hovademFilter.parentElement.style.display !== 'block' ? hovadem = '' : hovadem = hovademFilter.textContent

            const tenFilterValue = document.getElementById('tenFilterValue').value

            let ten
            const tenFilter = document.getElementById('tenFilter')
            tenFilter.parentElement.style.display !== 'block' ? ten = '' : ten = tenFilter.textContent

            const chucdanhFilterValue = document.getElementById('chucdanhFilterValue').value

            let chucdanh
            const chucdanhFilter = document.getElementById('chucdanhFilter')
            chucdanhFilter.parentElement.style.display !== 'block' ? chucdanh = '' : chucdanh = chucdanhFilter.textContent

            const dtdidongFilterValue = document.getElementById('dtdidongFilterValue').value

            let dtdidong
            const dtdidongFilter = document.getElementById('dtdidongFilter')
            dtdidongFilter.parentElement.style.display !== 'block' ? dtdidong = '' : dtdidong = dtdidongFilter.textContent

            const dtcoquanFilterValue = document.getElementById('dtcoquanFilterValue').value

            let dtcoquan
            const dtcoquanFilter = document.getElementById('dtcoquanFilter')
            dtcoquanFilter.parentElement.style.display !== 'block' ? dtcoquan = '' : dtcoquan = dtcoquanFilter.textContent

            const emailcanhanFilterValue = document.getElementById('emailcanhanFilterValue').value

            let emailcanhan
            const emailcanhanFilter = document.getElementById('emailcanhanFilter')
            emailcanhanFilter.parentElement.style.display !== 'block' ? emailcanhan = '' : emailcanhan = emailcanhanFilter.textContent

            const emailcoquanFilterValue = document.getElementById('emailcoquanFilterValue').value

            let emailcoquan
            const emailcoquanFilter = document.getElementById('emailcoquanFilter')
            emailcoquanFilter.parentElement.style.display !== 'block' ? emailcoquan = '' : emailcoquan = emailcoquanFilter.textContent

            const tochucFilterValue = document.getElementById('tochucFilterValue').value

            let tochuc
            const tochucFilter = document.getElementById('tochucFilter')
            tochucFilter.parentElement.style.display !== 'block' ? tochuc = '' : tochuc = tochucFilter.textContent

            const tinhthanhFilterValue = document.getElementById('tinhthanhFilterValue').value

            let tinhthanh
            const tinhthanhFilter = document.getElementById('tinhthanhFilter')
            tinhthanhFilter.parentElement.style.display !== 'block' ? tinhthanh = '' : tinhthanh = tinhthanhFilter.textContent

            const quanhuyenFilterValue = document.getElementById('quanhuyenFilterValue').value

            let quanhuyen
            const quanhuyenFilter = document.getElementById('quanhuyenFilter')
            quanhuyenFilter.parentElement.style.display !== 'block' ? quanhuyen = '' : quanhuyen = quanhuyenFilter.textContent

            const phuongxaFilterValue = document.getElementById('phuongxaFilterValue').value

            let phuongxa
            const phuongxaFilter = document.getElementById('phuongxaFilter')
            phuongxaFilter.parentElement.style.display !== 'block' ? phuongxa = '' : phuongxa = phuongxaFilter.textContent

            const nguongocFilterValue = document.getElementById('nguongocFilterValue').value

            let nguongoc
            const nguongocFilter = document.getElementById('nguongocFilter')
            nguongocFilter.parentElement.style.display !== 'block' ? nguongoc = '' : nguongoc = nguongocFilter.textContent

            const loaihinhFilterValue = document.getElementById('loaihinhFilterValue').value

            let loaihinh
            const loaihinhFilter = document.getElementById('loaihinhFilter')
            loaihinhFilter.parentElement.style.display !== 'block' ? loaihinh = '' : loaihinh = loaihinhFilter.textContent

            const linhvucFilterValue = document.getElementById('linhvucFilterValue').value

            let linhvuc
            const linhvucFilter = document.getElementById('linhvucFilter')
            linhvucFilter.parentElement.style.display !== 'block' ? linhvuc = '' : linhvuc = linhvucFilter.textContent

            const motaFilterValue = document.getElementById('motaFilterValue').value

            let mota
            const motaFilter = document.getElementById('motaFilter')
            motaFilter.parentElement.style.display !== 'block' ? mota = '' : mota = motaFilter.textContent
            
            const doanhthuFilterValue = document.getElementById('doanhthuFilterValue').value

            let doanhthu
            const doanhthuFilter = document.getElementById('doanhthuFilter')
            doanhthuFilter.parentElement.style.display !== 'block' ? doanhthu = '' : doanhthu = doanhthuFilter.textContent


            const zaloFilterValue = document.getElementById('zaloFilterValue').value

            let zalo 
            const zaloFilter = document.getElementById('zaloFilter')
            zaloFilter.parentElement.style.display !== 'block' ? zalo = '' : zalo = zaloFilter.textContent

            const phongbanFilterValue = document.getElementById('phongbanFilterValue').value

            let phongban
            const phongbanFilter = document.getElementById('phongbanFilter')
            phongbanFilter.parentElement.style.display !== 'block' ? phongban = '' : phongban = phongbanFilter.textContent

            const masothueFilterValue = document.getElementById('masothueFilterValue').value

            let masothue
            const masothueFilter = document.getElementById('masothueFilter')
            masothueFilter.parentElement.style.display !== 'block' ? masothue = '' : masothue = masothueFilter.textContent

            const taikhoannganhangFilterValue = document.getElementById('taikhoannganhangFilterValue').value

            let taikhoannganhang
            const taikhoannganhangFilter = document.getElementById('taikhoannganhangFilter')
            taikhoannganhangFilter.parentElement.style.display !== 'block' ? taikhoannganhang = '' : taikhoannganhang = taikhoannganhangFilter.textContent

            const motainganhangFilterValue = document.getElementById('motainganhangFilterValue').value

            let motainganhang
            const motainganhangFilter = document.getElementById('motainganhangFilter')
            motainganhangFilter.parentElement.style.display !== 'block' ? motainganhang = '' : motainganhang = motainganhangFilter.textContent

            const ngaythanhlapFilterValue = document.getElementById('ngaythanhlapFilterValue').value

            let ngaythanhlap
            const ngaythanhlapFilter = document.getElementById('ngaythanhlapFilter')
            ngaythanhlapFilter.parentElement.style.display !== 'block' ? ngaythanhlap = '' : ngaythanhlap = ngaythanhlapFilter.textContent

            const nganhngheFilterValue = document.getElementById('nganhngheFilterValue').value

            let nganhnghe
            const nganhngheFilter = document.getElementById('nganhngheFilter')
            nganhngheFilter.parentElement.style.display !== 'block' ? nganhnghe = '' : nganhnghe = nganhngheFilter.textContent

            const quocgiaFilterValue = document.getElementById('quocgiaFilterValue').value

            let quocgia
            const quocgiaFilter = document.getElementById('quocgiaFilter')
            quocgiaFilter.parentElement.style.display !== 'block' ? quocgia = '' : quocgia = quocgiaFilter.textContent

            const sonhaFilterValue = document.getElementById('sonhaFilterValue').value

            let sonha
            const sonhaFilter = document.getElementById('sonhaFilter')
            sonhaFilter.parentElement.style.display !== 'block' ? sonha = '' : sonha = sonhaFilter.textContent
            

            //tên filter mới nè
            const filterInputSaveName = document.getElementById('filterInputSaveName').value



            const dungchungFilter = document.getElementById('dungchungFilter')
            
            let dungchungFilterValue
            if(dungchungFilter.parentElement.style.display !=='block'){
              dungchungFilterValue =''
            }else{
              if(dungchungFilter.textContent === 'Có'){
                dungchungFilterValue = true
                }
                if(dungchungFilter.textContent === 'Không'){
                dungchungFilterValue = false
                }
            }


            let data = qs.stringify({
              name:filterInputSaveName,
              xunghoString: xunghoFilterValue,
              xunghoCondition: xungho,
              hovademString: hovademFilterValue,
              hovademCondition: hovadem,
              tenString: tenFilterValue,
              tenCondition: ten,
              phongbanString: phongbanFilterValue,
              phongbanCondition: phongban,
              chucdanhString: chucdanhFilterValue,
              chucdanhCondition: chucdanh,
              dtdidongString: dtdidongFilterValue,
              dtdidongCondition: dtdidong,
              dtcoquanString: dtcoquanFilterValue,
              dtcoquanCondition: dtcoquan,
              loaitiemnangString: loaitiemnangFilterValue,
              loaitiemnangCondition: loaitiemnang,
              nguongocString: nguongocFilterValue,
              nguongocCondition:nguongoc,
              zaloString: zaloFilterValue,
              zaloCondition: zalo,
              emailcanhanString: emailcanhanFilterValue,
              emailcanhanCondition: emailcanhan,
              emailcoquanString: emailcoquanFilterValue,
              emailcoquanCondition: emailcoquan,
              tochucString: tochucFilterValue,
              tochucCondition: tochuc,
              masothueString: masothueFilterValue,
              masothueCondition: masothue,
              taikhoannganhangString: taikhoannganhangFilterValue,
              taikhoannganhangCondition: taikhoannganhang,
              motainganhangString: motainganhangFilterValue,
              motainganhangCondition: motainganhang,
              ngaythanhlapString: ngaythanhlapFilterValue,
              ngaythanhlapCondition: ngaythanhlap,
              loaihinhString: loaihinhFilterValue,
              loaihinhCondition: loaihinh,
              linhvucString: linhvucFilterValue,
              linhvucCondition: linhvuc,
              nganhngheString: nganhngheFilterValue,
              nganhngheCondition: nganhnghe,
              doanhthuString: doanhthuFilterValue,
              doanhthuCondition: doanhthu,
              quocgiaString: quocgiaFilterValue,
              quocgiaCondition: quocgia,
              tinhthanhphoString: tinhthanhFilterValue,
              tinhthanhphoCondition: tinhthanh,
              quanhuyenString: quanhuyenFilterValue,
              quanhuyenCondition: quanhuyen,
              phuongxaString: phuongxaFilterValue,
              phuongxaCondition: phuongxa,
              sonhaString: sonhaFilterValue,
              sonhaCondition: sonha,
              motaString: motaFilterValue,
              motaCondition:mota,
              dungchungCondition: dungchungFilterValue,
              });
            dispatch(createFilter(data))
            dispatch(fetchFiltersList())
            e.target.parentElement.parentElement.parentElement.classList.add(styles.hiddenEditFilter)
        }
}