import React from "react";
import { Link } from "react-router-dom";
import { createCustomer } from "../../features/customers/customersSlice";
import { useDispatch } from "react-redux";

import styles from './CreateBar.module.css'
import stylesTwo from '../CreateBody/AutoComplete/TruongChonNhieuBox.module.css'
import stylesThree from '../CreateBody/CreateBody.module.css'

const CreateBar = () =>{
    const dispatch = useDispatch()

    const HandleSave = () =>{
        const anh =  document.getElementById('anhValue')
        const maTiemNang = document.getElementById('maTiemNang').value
        const xungHo = document.getElementById('xungHo').textContent
        const firstName = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value
        const phongBan = document.getElementById('phongBan').textContent
        const chucDanh = document.getElementById('chucDanh').textContent
        const dienThoaiDiDong = document.getElementById('dienThoaiDiDong').value
        const dienThoaiCoQuan = document.getElementById('dienThoaiCoQuan').value
        const nguonGoc = document.getElementById('nguonGoc').textContent
        const zalo = document.getElementById('zalo').value
        const emailCaNhan = document.getElementById('emailCaNhan').value
        const emailCoQuan = document.getElementById('emailCoQuan').value
        const toChuc = document.getElementById('toChuc').value
        const maSoThue = document.getElementById('maSoThue').value
        const taiKhoanNganHang = document.getElementById('taiKhoanNganHang').value
        const moTaiNganHang = document.getElementById('moTaiNganHang').value
        const ngayThanhLap = document.getElementById('ngayThanhLap').value
        const loaiHinh = document.getElementById('loaiHinh').textContent
        const linhVuc = document.getElementById('linhVuc').textContent
        const nganhNghe = document.getElementById('nganhNghe').textContent
        const doanhThu = document.getElementById('doanhThu').textContent
        const quocGia = document.getElementById('quocGia').textContent
        const tinhThanh = document.getElementById('tinhThanh').textContent
        const quanHuyen = document.getElementById('quanHuyen').textContent
        const phuongXa = document.getElementById('phuongXa').textContent
        const soNha = document.getElementById('soNha').value
        const maVung = document.getElementById('maVung').value
        const moTa = document.getElementById('moTa').value
        const loaiTiemNang = document.getElementsByClassName(stylesTwo.thongTinContentDecor)
        const dungChungCheck = document.getElementsByClassName(stylesThree.iconChecked)
        

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

        if(dungChungCheck.length ===1){
            dungChungBtn = true
        }
        data.append('dungChung', dungChungBtn)
        dispatch(createCustomer(data))
    }

    return (
        <div className={styles.createBar}>
            <div className={styles.box}>
                <span className={`${styles.createLeft}`} >
                    <span className={styles.tatCaTiemNang} >Thêm Tiềm năng - </span>
                    <span className={styles.mauTieuChuan} >Mẫu tiêu chuẩn</span>
                    <span className={styles.suaBoCuc}title='Tính năng này đang được phát triển'>Sửa bố cục</span>
                </span>
                <span className={styles.createRight}>
                    <button type="button" className={styles.createRightButton} 

                    >

                        <Link to="/" className={styles.cancelButton}>Hủy bỏ</Link >
                    </button>
                    <button type="button" form="createCustomer" className={styles.createRightButton} 
                        onClick={HandleSave}
                    >
                        <span className={styles.saveAndAddButton}>Lưu và thêm</span>
                    </button>
                    <button type="submit" form="createCustomer" className={styles.createRightButton}
                    
                    >
                        <Link to="/" className={styles.saveButton}>Lưu</Link >
                    </button>
                </span>
            </div>
        </div>
    )
}

export default CreateBar