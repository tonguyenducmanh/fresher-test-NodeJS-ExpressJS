
import styles from '../ActionBar.module.css'
import stylesTwo from '../../MainBody/BodyTable/Table/Customers/Customers.module.css'
import stylesThree from '../AutoComplete/Right.module.css'

import { editCustomer } from '../../../features/customers/customersSlice'
export const HandleUpdateButton = (dispatch) =>{
    const notifyUpdateSuccess = document.getElementById('notifyUpdateSuccess')
    const undoSelected = document.getElementById('undoSelected')
    const checkedButton =  document.getElementsByClassName(stylesTwo.iconButtonCustomers)
    const tdIds =  document.getElementsByClassName(stylesTwo.tdId)
    const tdAnh =  document.getElementsByClassName(stylesTwo.tdAnh)

    const anh =  document.getElementById('AnhQuick')
    const xungHo = document.getElementById('XungHoQuick')
    const phongBan = document.getElementById('PhongBanQuick')
    const chucDanh = document.getElementById('ChucDanhQuick')
    const nguonGoc = document.getElementById('NguonGocQuick')
    const loaiHinh = document.getElementById('LoaiHinhQuick')
    const linhVuc = document.getElementById('LinhVucQuick')
    const nganhNghe = document.getElementById('NganhNgheQuick')
    const doanhThu = document.getElementById('DoanhThuQuick')
    const dungChung = document.getElementById('DungChungQuick')
    const truongChonNhieuRight = document.getElementById('truongChonNhieuRight')
    const loaiTiemNangQuick = document.getElementById('LoaiTiemNangQuick')
    const ngayThanhLap = document.getElementById('NgayThanhLapQuick')
    const valueLeft = document.getElementById('thongTinInputLeftBox').children[2].textContent

    //khởi tạo form gửi dữ liệu, có thể có dạng ảnh
    const data = new FormData()

    let idsString = []
    let anhCu
    for( let i = 0 ; i < tdIds.length ; i ++){
        if(checkedButton[i].classList.contains(stylesTwo.iconHeadingChecked)){
            idsString = idsString.concat(tdIds[i].textContent)
            anhCu = tdAnh[i].textContent
            // lưu luôn giá trị ảnh cũ để dùng sau này
        }
    }
    // lấy id của tài liệu cần sửa, ở đây mặc định chỉ chọn 1 cái
    // nên lấy id của cái duy nhất đó qua vòng lặp
    idsString = idsString.join(',')
    

    const maTiemNang = idsString

    // line dưới để xác định tài liệu được sửa dựa vào id
    data.append('_id',maTiemNang)

    // line dưới này xác định 1 trường duy nhất được chèn
    if(xungHo.style.display ==='block'){data.append('xungHo', xungHo.children[2].textContent)}
    if(chucDanh.style.display ==='block'){data.append('chucDanh', chucDanh.children[2].textContent)}
    if(phongBan.style.display ==='block'){data.append('phongBan', phongBan.children[2].textContent)}
    if(doanhThu.style.display ==='block'){data.append('doanhThu', doanhThu.children[2].textContent)}
    if(nguonGoc.style.display ==='block'){data.append('nguonGoc', nguonGoc.children[2].textContent)}
    if(loaiHinh.style.display ==='block'){data.append('loaiHinh', loaiHinh.children[2].textContent)}
    if(linhVuc.style.display ==='block'){data.append('linhVuc', linhVuc.children[2].textContent)}
    if(nganhNghe.style.display ==='block'){data.append('nganhNghe', nganhNghe.children[2].textContent)}
    if(dungChung.style.display === 'block'){if(dungChung.classList.contains(stylesThree.iconChecked)){data.append('dungChung', true)}else{data.append('dungChung', false)}}
    if(truongChonNhieuRight.style.display === 'block'){
        switch (valueLeft){
            case 'Họ và đệm':
                data.append('hoVaDem', truongChonNhieuRight.value)
                break;
            case 'Tên':
                data.append('ten', truongChonNhieuRight.value)
                break;
            case 'ĐT di động':
                data.append('dienThoaiDiDong', truongChonNhieuRight.value)
                break;
            case 'ĐT cơ quan':
                data.append('dienThoaiCoQuan', truongChonNhieuRight.value)
                break;
            case 'Zalo':
                data.append('zalo', truongChonNhieuRight.value)
                break;
            case 'Email cá nhân':
                data.append('emailCaNhan', truongChonNhieuRight.value)
                break;
            case 'Email cơ quan':
                data.append('emailCoQuan', truongChonNhieuRight.value)
                break;
            case 'Tổ chức':
                data.append('toChuc', truongChonNhieuRight.value)
                break;
            case 'Số nhà':
                data.append('soNha', truongChonNhieuRight.value)
                break;
            case 'Mở tại ngân hàng':
                data.append('moTaiNganHang', truongChonNhieuRight.value)
                break;
            case 'Mã số thuế':
                data.append('maSoThue', truongChonNhieuRight.value)
                break;
            case 'Tài khoản ngân hàng':
                data.append('taiKhoanNganHang', truongChonNhieuRight.value)
                break;
            case 'Mã vùng':
                data.append('maVung', truongChonNhieuRight.value)
                break;
            case 'Mô tả':
                data.append('moTa', truongChonNhieuRight.value)
                break;
            default:
                break;
        }
    }

    //đối với trường hợp của loại tiềm năng cần xét xem thằng nào
    //đã được click vào ( dùng class có từ decor)
    if(loaiTiemNangQuick.style.display ==='block'){
        let loaiTiemNangArray = []
        for(let i = 0 ; i < loaiTiemNangQuick.children[0].children.length; i ++){
            loaiTiemNangArray.push(loaiTiemNangQuick.children[0].children[i].textContent)

        }

        for(let k=0; k< loaiTiemNangArray.length; k++){
            data.append('loaiTiemNang[]', loaiTiemNangArray[k])

        }

    }
    if(ngayThanhLap.style.display === 'block'){data.append('ngayThanhLap', ngayThanhLap.value)}
    
    if(anh.style.display === 'block'){
        let anhValue = 0
        anh.files.length !== '0' ? anhValue = anh.files[0] : anhValue = 0
        data.append('anhValue', anhValue)
        data.append('anhCuValue', anhCu)
    }
    

    //gửi kết quả chỉnh sửa lên server
    dispatch(editCustomer(data))
    const notifyUpdateSuccessEvent = ()=>{
        notifyUpdateSuccess.classList.remove(styles.notifyUpdateSuccessAni)
    }
    //thông báo rằng cập nhật thông tin thành công
    notifyUpdateSuccess.classList.add(styles.notifyUpdateSuccessAni)
    notifyUpdateSuccess.addEventListener("transitionend", notifyUpdateSuccessEvent);

    //ẩn box quick update
    const updateBox = document.getElementById('updateBox')
    updateBox.classList.add(styles.hiddenUpdateBox)
    //giả lập ấn vào nút bỏ chọn để tắt trường đã chọn đi
    undoSelected.click()
    return()=>{
        notifyUpdateSuccess.removeEventListener("transitionend", notifyUpdateSuccessEvent);
    
        }

}