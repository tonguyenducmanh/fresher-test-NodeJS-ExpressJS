import styles from '../../ActionBar.module.css'

export const LeftClick = (e) =>{
    const rightContainer = document.getElementById('rightContainer')
    const truongChonNhieuRight = document.getElementById('truongChonNhieuRight')
    const updateButtonFinal = document.getElementById('updateButtonFinal')
    const AnhQuick = document.getElementById('AnhQuick')
    const XungHoQuick = document.getElementById('XungHoQuick')
    const ChucDanhQuick = document.getElementById('ChucDanhQuick')
    const DoanhThuQuick = document.getElementById('DoanhThuQuick')
    const GioiTinhQuick = document.getElementById('GioiTinhQuick')
    const LinhVucQuick = document.getElementById('LinhVucQuick')
    const LoaiHinhQuick = document.getElementById('LoaiHinhQuick')
    const NganhNgheQuick = document.getElementById('NganhNgheQuick')
    const NguonGocQuick = document.getElementById('NguonGocQuick')
    const PhongBanQuick = document.getElementById('PhongBanQuick')
    const DungChungQuick = document.getElementById('DungChungQuick')
    const DiaChiQuick = document.getElementById('DiaChiQuick')
    const LoaiTiemNangQuick = document.getElementById('LoaiTiemNangQuick')
    const NgayThanhLapQuick = document.getElementById('NgayThanhLapQuick')
    //click vô rồi thì mới hiện cái nút cập nhật và ô input lên chứ

    if(truongChonNhieuRight){
        truongChonNhieuRight.removeAttribute('disabled')
        truongChonNhieuRight.classList.remove(styles.comboBoxInputDisabled)
        updateButtonFinal.classList.remove(styles.updateYesDisabled)
        truongChonNhieuRight.style.display = 'none'

    }

    
    //test trường hợp có thể xảy ra
    for ( let i = 0 ; i < rightContainer.children.length ; i++){
        rightContainer.children[i].style.display = 'none'
    }
    truongChonNhieuRight.style.display = 'none'
    switch(e.target.textContent){
        case 'Ảnh':
            AnhQuick.style.display = 'block'
            break;
        case 'Xưng hô':
            XungHoQuick.style.display = 'block'
            break;
        case 'Chức danh':
            ChucDanhQuick.style.display = 'block'
            break;
        case 'Doanh thu':
            DoanhThuQuick.style.display = 'block'
            break;
        case 'Giới tính':
            GioiTinhQuick.style.display = 'block'
            break;
        case 'Lĩnh vực':
            LinhVucQuick.style.display = 'block'
            break;
        case 'Loại hình':
            LoaiHinhQuick.style.display = 'block'
            break;
        case 'Ngành nghề':
            NganhNgheQuick.style.display = 'block'
            break;
        case 'Nguồn gốc':
            NguonGocQuick.style.display = 'block'
            break;
        case 'Phòng ban':
            PhongBanQuick.style.display = 'block'
            break;
        case 'Dùng chung':
            DungChungQuick.style.display = 'block'
            break;
        case 'Loại tiềm năng':
            LoaiTiemNangQuick.style.display = 'block'
            break;
        case 'Ngày thành lập':
            NgayThanhLapQuick.style.display = 'block'
            break;
        case 'Quốc gia':
        case 'Tỉnh thành':
        case 'Quận huyện':
        case 'Phường xã':
            DiaChiQuick.style.display = 'block'
            updateButtonFinal.classList.add(styles.updateYesDisabled)
            break;
        default:
            truongChonNhieuRight.style.display = 'block'
            truongChonNhieuRight.style.backgroundColor = 'white'
            break;
    }

}