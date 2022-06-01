import React, { useEffect }  from "react";
import styles from './CreateBody.module.css'

import { XungHo } from "./AutoComplete/Array/XungHo";
import { PhongBan } from "./AutoComplete/Array/PhongBan";
import { ChucDanh } from "./AutoComplete/Array/ChucDanh";
import { LoaiTiemNang } from "./AutoComplete/Array/LoaiTiemNang";
import { DoanhThu } from "./AutoComplete/Array/DoanhThu";
import { LinhVuc } from "./AutoComplete/Array/LinhVuc";
import { LoaiHinh } from "./AutoComplete/Array/LoaiHinh";
import { NganhNghe } from "./AutoComplete/Array/NganhNghe";
import { NguonGoc } from "./AutoComplete/Array/NguonGoc";
import { QuocGia } from "./AutoComplete/Array/QuocGia";

import { ConnectName } from "./HandleTyping/ConnectName";
import TruongChonNhieu from './AutoComplete/TruongChonNhieu'
import TruongChonNhieuTinhThanh from './AutoComplete/TruongChonNhieuTinhThanh'
import TruongChonNhieuQuanHuyen from './AutoComplete/TruongChonNhieuQuanHuyen'
import TruongChonNhieuPhuongXa from './AutoComplete/TruongChonNhieuPhuongXa'
import TruongChonNhieuBox from './AutoComplete/TruongChonNhieuBox'
import TruongChonNhieuQuocGia from './AutoComplete/TruongChonNhieuQuocGia'
import { HandleTypingNumberHome } from "./HandleTyping/HandleTypingNumberHome";
import DiaChiTongHop from "./AutoComplete/DiaChiTongHop";

import { HandleCheck } from "./HandleTyping/HandleCheck";
import { HandleImage } from "./HandleTyping/HandleImage";



const CreateBody = () =>{
    useEffect(()=>{
        HandleImage()
        HandleCheck()
    })

    
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <form id='createCustomer' 
                    method="post" 
                    encType="multipart/form-data"
                    className={styles.form}
                >
                    <div className={styles.anhTiemNang}>
                        <div className={styles.thongTinGroupTitle}>Ảnh tiềm năng</div>
                        <div className={`${styles.thongTinGroupBody} ${styles.uploadImageBox}`}>
                            <input className={styles.thongTinImage} type='file' name='anhValue' id='anhValue'/>
                            <span className={styles.avatarImage} id='avatarValue'></span>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông tin chung</div>
                        <div className={styles.thongTinGroupBody}>
                        <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Xưng hô</span>
                                <TruongChonNhieu arr={XungHo} id={'xungHo'} />
                            </span>
                            <span className={styles.thongTin} >
                                <span className={styles.thongTinTitle}>Họ và đệm</span>
                                <input className={styles.thongTinInput} autoComplete="new-password" id='firstName'  onChange={ConnectName}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle} >Tên</span>
                                <input  className={styles.thongTinInput} autoComplete="new-password" id='lastName'  onChange={ConnectName}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle} >Họ và tên</span>
                                <span className={styles.thongTinHoVaTen} id='fullName'/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Phòng ban</span>
                                <TruongChonNhieu arr={PhongBan} id={'phongBan'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Chức danh</span>
                                <TruongChonNhieu arr={ChucDanh} id={'chucDanh'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>
                                    <span>ĐT di động</span>
                                    <span className={styles.iconInfo}>
                                    <span className={styles.iconToolTip}>Điện thoại di động</span>
                                    </span>
                                </span>
                                <input className={styles.thongTinInput} id='dienThoaiDiDong'/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>
                                    <span>ĐT cơ quan</span>
                                    <span className={styles.iconInfo}>
                                    <span className={styles.iconToolTip}>Điện thoại cơ quan </span>
                                    </span>
                                </span>
                                <input className={styles.thongTinInput} id='dienThoaiCoQuan'/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Nguồn gốc</span>
                                <TruongChonNhieu arr={NguonGoc} id={'nguonGoc'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Loại tiềm năng</span>
                                <TruongChonNhieuBox arr={LoaiTiemNang} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Zalo</span>
                                <input className={styles.thongTinInput} id='zalo'/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Email cá nhân</span>
                                <input className={styles.thongTinInput} id='emailCaNhan'/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Email cơ quan</span>
                                <input className={styles.thongTinInput} id='emailCoQuan'/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Tổ chức</span>
                                <input className={styles.thongTinInput} id='toChuc'/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Mã số thuế</span>
                                <input className={styles.thongTinInput} id='maSoThue'/>
                            </span>

                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông tin tổ chức</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Tài khoản ngân hàng</span>
                                <input className={styles.thongTinInput} id='taiKhoanNganHang'/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Mở tại ngân hàng</span>
                                <input className={styles.thongTinInput} id='moTaiNganHang'/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ngày thành lập</span>
                                <input type='date' placeholder="DD/MM/YYYY" className={styles.thongTinInput} id='ngayThanhLap'/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Loại hình</span>
                                <TruongChonNhieu arr={LoaiHinh} id={'loaiHinh'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Lĩnh vực</span>
                                <TruongChonNhieu arr={LinhVuc} id={'linhVuc'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ngành nghề</span>
                                <TruongChonNhieu arr={NganhNghe} id={'nganhNghe'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>DoanhThu</span>
                                <TruongChonNhieu arr={DoanhThu} id={'doanhThu'}/>
                            </span>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông địa chỉ</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Quốc gia</span>
                                <TruongChonNhieuQuocGia arr={QuocGia} id={'quocGia'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Tỉnh/Thành phố</span>
                                <TruongChonNhieuTinhThanh/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Quận/Huyện</span>
                                <TruongChonNhieuQuanHuyen/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Phường/Xã</span>
                                <TruongChonNhieuPhuongXa/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Số nhà, Đường phố</span>
                                <HandleTypingNumberHome/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Mã vùng</span>
                                <input className={styles.thongTinInput} id='maVung'/>
                            </span>
                            <span className={styles.thongTinDiaChi}>
                                <span className={`${styles.thongTinTitle}  ${styles.thongTinDiaChiTitle}`}>Địa chỉ</span>
                                <DiaChiTongHop/>
                            </span>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông tin mô tả</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTinMoTa}>
                                <span className={`${styles.thongTinTitle} ${styles.thongTinMoTaTilte}`}>Mô tả</span>
                                <textarea className={`${styles.thongTinInput} ${styles.thongTinMoTaInput}`}
                                    id='moTa'
                                />
                            </span>
                            
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông tin hệ thống</div>
                        <div className={styles.thongTinGroupLastBody}>
                            <span className={`${styles.thongTin} ${styles.thongTinLast}`}>
                                <span className={styles.thongTinLastTitle}>Dùng chung</span>
                                <span className={styles.iconCheck} id='dungChung'></span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle} >Mã tiềm năng</span>
                                <input className={styles.thongTinInput} id='maTiemNang'/>
                            </span>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default CreateBody