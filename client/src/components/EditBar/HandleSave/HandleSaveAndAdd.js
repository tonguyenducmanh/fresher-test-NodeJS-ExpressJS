import { editCustomer } from '../../../features/customers/customersSlice'
import { resetLocation } from '../../../features/location/locationSlice';

import styles from '../EditBar.module.css'
import stylesTwo from '../../EditBody/AutoComplete/TruongChonNhieuBox.module.css'
import stylesThree from '../../EditBody/EditBody.module.css'
import stylesFour from '../EditBar.module.css'

export const HandleSaveAndAdd = (dispatch) =>{
    
    const editAndAddButton = document.getElementById('editAndAddButton')
    const editAndAddButtonEvent = () =>{
        const thongtinMustHaves = document.getElementsByClassName(stylesThree.thongtinMustHave)
        const notifyEditSuccess = document.getElementById('notifyEditSuccess')
        //check xem mấy thông tin quan trọng đã điền hết chưa
        let thongtinChuaDien = 0
        for( let i = 0 ; i < thongtinMustHaves.length; i++){
            if(thongtinMustHaves[i].value === ''){
                thongtinChuaDien ++
                thongtinMustHaves[i].classList.add(stylesThree.thonngTinWarning)
                thongtinMustHaves[i].parentElement.children[1].style.display = 'block'
                thongtinMustHaves[i].parentElement.parentElement.children[0].classList.add(stylesThree.thongTinTitleWarning)
                                        //
                //hiện thông báo nhập cho ló đầy đủ vào
                const notifyEditNotEnough = document.getElementById('notifyEditNotEnough')
                //thông báo rằng người dùng chỉ có thể sửa 1 tiềm năng 1 lúc
                notifyEditNotEnough.classList.add(stylesFour.notifyNotEnoughAni)
                const notifyEditNotEnoughEvent = ()=>{
                    notifyEditNotEnough.classList.remove(stylesFour.notifyNotEnoughAni)
                }
                notifyEditNotEnough.addEventListener("transitionend", notifyEditNotEnoughEvent);
                return()=>{
                    notifyEditNotEnough.removeEventListener("transitionend", notifyEditNotEnoughEvent);

                }
            }
        }
        
        if(thongtinChuaDien === 0){
            const anh =  document.getElementById('anhEditValue')
            const maTiemNang = document.getElementById('maEditTiemNang').value
            const xungHo = document.getElementById('xungHoEdit').textContent
            const firstName = document.getElementById('firstNameEdit').value
            const lastName = document.getElementById('lastNameEdit').value
            const phongBan = document.getElementById('phongBanEdit').textContent
            const chucDanh = document.getElementById('chucDanhEdit').textContent
            const dienThoaiDiDong = document.getElementById('dienThoaiDiDongEdit').value
            const dienThoaiCoQuan = document.getElementById('dienThoaiCoQuanEdit').value
            const nguonGoc = document.getElementById('nguonGocEdit').textContent
            const zalo = document.getElementById('zaloEdit').value
            const emailCaNhan = document.getElementById('emailCaNhanEdit').value
            const emailCoQuan = document.getElementById('emailCoQuanEdit').value
            const toChuc = document.getElementById('toChucEdit').value
            const maSoThue = document.getElementById('maSoThueEdit').value
            const taiKhoanNganHang = document.getElementById('taiKhoanNganHangEdit').value
            const moTaiNganHang = document.getElementById('moTaiNganHangEdit').value
            const ngayThanhLap = document.getElementById('ngayThanhLapEdit').value
            const loaiHinh = document.getElementById('loaiHinhEdit').textContent
            const linhVuc = document.getElementById('linhVucEdit').textContent
            const nganhNghe = document.getElementById('nganhNgheEdit').textContent
            const doanhThu = document.getElementById('doanhThuEdit').textContent
            const quocGia = document.getElementById('quocGiaEdit').textContent
            const tinhThanh = document.getElementById('tinhThanhEdit').textContent
            const quanHuyen = document.getElementById('quanHuyenEdit').textContent
            const phuongXa = document.getElementById('phuongXaEdit').textContent
            const soNha = document.getElementById('soNhaEdit').value
            const maVung = document.getElementById('maVungEdit').value
            const moTa = document.getElementById('moTaEdit').value
            const dungChungCheck = document.getElementById('dungChungEdit')
            const loaiTiemNang = document.getElementById('loaiTiemNangEdit').children
            

            const data = new FormData()

            data.append('_id',maTiemNang)
            
            xungHo !== '- Không chọn -' ? data.append('xungHo', xungHo) : data.append('xungHo', '-')
            
            let anhValue = 0
            anh.files.length !== '0' ? anhValue = anh.files[0] : anhValue = 0

            data.append('anhValue', anhValue)
            data.append('hoVaDem',firstName)
            data.append('ten',lastName)

            phongBan !== '- Không chọn -' ? data.append('phongBan', phongBan) : data.append('phongBan', '-')

            chucDanh !== '- Không chọn -' ? data.append('chucDanh', chucDanh) : data.append('chucDanh', '-')

            data.append('dienThoaiDiDong', dienThoaiDiDong)
            data.append('dienThoaiCoQuan', dienThoaiCoQuan)

            nguonGoc !== '- Không chọn -' ? data.append('nguonGoc', nguonGoc) : data.append('nguonGoc', '-')

            data.append('zalo', zalo)
            data.append('emailCaNhan', emailCaNhan)
            data.append('emailCoQuan', emailCoQuan)
            data.append('toChuc', toChuc)
            data.append('maSoThue', maSoThue)
            data.append('taiKhoanNganHang', taiKhoanNganHang)
            data.append('moTaiNganHang', moTaiNganHang)
            data.append('ngayThanhLap', ngayThanhLap)

            loaiHinh !== '- Không chọn -' ? data.append('loaiHinh', loaiHinh) : data.append('loaiHinh', '-')

            linhVuc !== '- Không chọn -' ? data.append('linhVuc', linhVuc) : data.append('linhVuc', '-')

            nganhNghe !== '- Không chọn -' ? data.append('nganhNghe', nganhNghe) : data.append('nganhNghe', '-')

            doanhThu !== '- Không chọn -' ? data.append('doanhThu', doanhThu) : data.append('doanhThu', '-')

            quocGia !== '- Không chọn -' ? data.append('quocGia', quocGia) : data.append('quocGia', '-')

            tinhThanh !== '- Không chọn -' ? data.append('tinhThanh', tinhThanh) : data.append('tinhThanh', '-')

            quanHuyen !== '- Không chọn -' ? data.append('quanHuyen', quanHuyen) : data.append('quanHuyen', '-')

            phuongXa !== '- Không chọn -' ? data.append('phuongXa', phuongXa) : data.append('phuongXa', '-')

            data.append('soNha', soNha)
            data.append('maVung', maVung)
            data.append('moTa', moTa)

            let loaiTiemNangArray = []
            for(let i = 0 ; i < loaiTiemNang.length; i ++){
                loaiTiemNangArray.push(loaiTiemNang[i].textContent)
            }

            for(let k=0; k< loaiTiemNangArray.length; k++){
                data.append('loaiTiemNang[]', loaiTiemNangArray[k])
            }

            let dungChungBtn = false

            if(dungChungCheck.classList.contains(stylesThree.iconChecked)){
                dungChungBtn = true
            }
            
            data.append('dungChung', dungChungBtn)
            dispatch(editCustomer(data))
            dispatch(resetLocation())
            
            notifyEditSuccess.classList.add(styles.notifySuccessAni)
            const notifyEditSuccessEvent =  ()=>{
                notifyEditSuccess.classList.remove(styles.notifySuccessAni)
            }
            notifyEditSuccess.addEventListener("transitionend",notifyEditSuccessEvent);
            return()=>{
                notifyEditSuccess.removeEventListener("transitionend",notifyEditSuccessEvent);

            }

            //xóa toàn bộ thông tin cần nhập vào để nhập mới
            document.getElementById('anhEditValue').value = []
            const avatarValue = document.getElementById('avatarEditValue')
            avatarValue.removeAttribute('style')
            // xóa style inline css để dùng lại cái file css bên ngoài cho avatar

            
            document.getElementById('maEditTiemNang').value = ''
            document.getElementById('xungHoEdit').textContent = '- Không chọn -'
            document.getElementById('xungHoEdit').style.color = '#9ba3b2'
            document.getElementById('firstNameEdit').value = ''
            document.getElementById('lastNameEdit').value = ''
            document.getElementById('fullNameEdit').innerHTML = ''
            document.getElementById('phongBanEdit').textContent = '- Không chọn -'
            document.getElementById('phongBanEdit').style.color = '#9ba3b2'
            document.getElementById('chucDanhEdit').textContent = '- Không chọn -'
            document.getElementById('chucDanhEdit').style.color = '#9ba3b2'
            document.getElementById('dienThoaiDiDongEdit').value = ''
            document.getElementById('dienThoaiCoQuanEdit').value = ''
            document.getElementById('nguonGocEdit').textContent = '- Không chọn -'
            document.getElementById('nguonGocEdit').style.color = '#9ba3b2'
            document.getElementById('zaloEdit').value = ''
            document.getElementById('emailCaNhanEdit').value = ''
            document.getElementById('emailCoQuanEdit').value = ''
            document.getElementById('toChucEdit').value = ''
            document.getElementById('maSoThueEdit').value = ''
            document.getElementById('taiKhoanNganHangEdit').value = ''
            document.getElementById('moTaiNganHangEdit').value = ''
            document.getElementById('ngayThanhLapEdit').value = ''
            document.getElementById('loaiHinhEdit').textContent = '- Không chọn -'
            document.getElementById('loaiHinhEdit').style.color = '#9ba3b2'
            document.getElementById('linhVucEdit').textContent = '- Không chọn -'
            document.getElementById('linhVucEdit').style.color = '#9ba3b2'
            document.getElementById('nganhNgheEdit').textContent = '- Không chọn -'
            document.getElementById('nganhNgheEdit').style.color = '#9ba3b2'
            document.getElementById('doanhThuEdit').textContent = '- Không chọn -'
            document.getElementById('doanhThuEdit').style.color = '#9ba3b2'
            document.getElementById('quocGiaEdit').textContent = '- Không chọn -'
            document.getElementById('quocGiaEdit').style.color = '#9ba3b2'
            document.getElementById('tinhThanhEdit').textContent = '- Không chọn -'
            document.getElementById('tinhThanhEdit').style.color = '#9ba3b2'
            document.getElementById('quanHuyenEdit').textContent = '- Không chọn -'
            document.getElementById('quanHuyenEdit').style.color = '#9ba3b2'
            document.getElementById('phuongXaEdit').textContent = '- Không chọn -'
            document.getElementById('phuongXaEdit').style.color = '#9ba3b2'
            document.getElementById('soNhaEdit').value = ''
            document.getElementById('maVungEdit').value = ''
            document.getElementById('maVungEdit').value = ''
            document.getElementById('moTaEdit').value = ''


}}
    editAndAddButton.addEventListener('click', editAndAddButtonEvent )
    return()=>{
        editAndAddButton.removeEventListener('click', editAndAddButtonEvent )
        
    }
}