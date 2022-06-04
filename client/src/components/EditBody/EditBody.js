import React, { useEffect }  from "react";
import styles from './EditBody.module.css'

import { useSelector } from "react-redux";

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
import { MustHave } from "./AutoComplete/FormValidate/MustHave";
import { JustAtoZ } from "./AutoComplete/FormValidate/JustAtoZ";
import { Just0To9 } from "./AutoComplete/FormValidate/Just0To9";
import { EmailValidate } from "./AutoComplete/FormValidate/EmailValidate";


const EditBody = () =>{
    const editCustomer = useSelector(state => state.tempCustomer.editCustomer)
    useEffect(()=>{
        HandleImage()
        HandleCheck()
    })

    useEffect(()=>{
        MustHave()
        JustAtoZ()
        Just0To9()
        EmailValidate()
    },[])
    
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
                            <span className={styles.avatarImage} id='avatarValue' 
                            // style={{background-image:url(`${editCustomer.anh}`)}}
                            ></span>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông tin chung</div>
                        <div className={styles.thongTinGroupBody}>
                        <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Xưng hô</span>
                                <TruongChonNhieu arr={XungHo} id={'xungHo'} value={editCustomer.xungho} />
                            </span>
                            <span className={styles.thongTin} >
                                <span className={styles.thongTinTitle}>Họ và đệm</span>
                                <span className={styles.thongTinInputFather}>
                                    <input  className={`${styles.thongTinInput} ${styles.thongtinMustHave} ${styles.thongtinAtoZ}`} 
                                        autoComplete="new-password" 
                                        id='firstName'
                                        defaultValue={editCustomer.hovadem}
                                        onChange={ConnectName}
                                    />
                                    <span className={styles.thonngTinWarningText}>Họ và đệm không được để trống</span>
                                    <span className={styles.thonngTinWarningTextTwo}>Họ và đệm chỉ chứa kí tự từ a-z</span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle} >Tên</span>
                                <span className={styles.thongTinInputFather}>
                                    <input  className={`${styles.thongTinInput} ${styles.thongtinMustHave} ${styles.thongtinAtoZ}`} 
                                        autoComplete="new-password" 
                                        id='lastName'
                                        defaultValue={editCustomer.ten}
                                        onChange={ConnectName}
                                    />
                                    <span className={styles.thonngTinWarningText}>Tên không được để trống</span>
                                    <span className={styles.thonngTinWarningTextTwo}>Tên chỉ chứa kí tự từ a-z</span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle} >Họ và tên</span>
                                <span className={styles.thongTinHoVaTen} id='fullName'>
                                {`${editCustomer.hovadem} ${editCustomer.ten}`}
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Phòng ban</span>
                                <TruongChonNhieu arr={PhongBan} id={'phongBan'} value={editCustomer.phongban} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Chức danh</span>
                                <TruongChonNhieu arr={ChucDanh} id={'chucDanh'} value={editCustomer.chucdanh} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>
                                    <span>ĐT di động</span>
                                    <span className={styles.iconInfo}>
                                    <span className={styles.iconToolTip}>Điện thoại di động</span>
                                    </span>
                                </span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} 
                                        autoComplete="off" 
                                        id='dienThoaiDiDong'
                                        defaultValue={editCustomer.dtdidong}    
                                    />
                                    <span className={styles.thonngTinWarningText}>Đt di động không được để trống</span>
                                    <span className={styles.thonngTinWarningTextTwo}>Đt di động chỉ chứa chữ số từ 0 - 9</span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>
                                    <span>ĐT cơ quan</span>
                                    <span className={styles.iconInfo}>
                                    <span className={styles.iconToolTip}>Điện thoại cơ quan </span>
                                    </span>
                                </span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} 
                                        autoComplete="off" 
                                        id='dienThoaiCoQuan'
                                        defaultValue={editCustomer.dtcoquan}
                                    />
                                    <span className={styles.thonngTinWarningText}>Đt cơ quan không được để trống</span>
                                    <span className={styles.thonngTinWarningTextTwo}>Đt cơ quan chỉ chứa chữ số từ 0 - 9</span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Nguồn gốc</span>
                                <TruongChonNhieu arr={NguonGoc} id={'nguonGoc'} value={editCustomer.nguongoc} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Loại tiềm năng</span>
                                <TruongChonNhieuBox arr={LoaiTiemNang} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Zalo</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                        autoComplete="off" 
                                        id='zalo'
                                        defaultValue={editCustomer.zalo}
                                    />
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Email cá nhân</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                        autoComplete="off" 
                                        id='emailCaNhan'
                                        defaultValue={editCustomer.emailcanhan}
                                    />
                                    <span className={styles.thonngTinWarningTextThree}>Email chỉ có thể chứa ký tự đặc biệt @</span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Email cơ quan</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                        autoComplete="off" 
                                        id='emailCoQuan'
                                        defaultValue={editCustomer.emailcoquan}
                                    />
                                    <span className={styles.thonngTinWarningTextThree}>Email chỉ có thể chứa ký tự đặc biệt @</span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Tổ chức</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                        autoComplete="off" 
                                        id='toChuc'
                                        defaultValue={editCustomer.tochuc}
                                    />
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Mã số thuế</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                        autoComplete="off" 
                                        id='maSoThue'
                                        defaultValue={editCustomer.masothue}
                                    />
                                </span>
                            </span>

                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông tin tổ chức</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Tài khoản ngân hàng</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} 
                                        autoComplete="off" 
                                        id='taiKhoanNganHang'
                                        defaultValue={editCustomer.taikhoannganhang}
                                        
                                    />
                                    <span className={styles.thonngTinWarningText}>Tài khoản ngân hàng không được để trống</span>
                                    <span className={styles.thonngTinWarningTextTwo}>TK ngân hàng chỉ chứa chữ số từ 0 - 9</span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Mở tại ngân hàng</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} 
                                        autoComplete="off" 
                                        defaultValue={editCustomer.motainganhang}
                                        id='moTaiNganHang'
                                    />
                                    <span className={styles.thonngTinWarningText}>Ngân hàng không được để trống</span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ngày thành lập</span>
                                <input className={styles.thongTinInput} id='ngayThanhLap'
                                type='date' 
                                placeholder="DD/MM/YYYY" 
                                autoComplete="off" 
                                defaultValue={editCustomer.ngaythanhlap}
                                />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Loại hình</span>
                                <TruongChonNhieu arr={LoaiHinh} id={'loaiHinh'} value={editCustomer.loaihinh} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Lĩnh vực</span>
                                <TruongChonNhieu arr={LinhVuc} id={'linhVuc'} value={editCustomer.linhvuc} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ngành nghề</span>
                                <TruongChonNhieu arr={NganhNghe} id={'nganhNghe'} value={editCustomer.nganhnghe} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>DoanhThu</span>
                                <TruongChonNhieu arr={DoanhThu} id={'doanhThu'} value={editCustomer.doanhthu} />
                            </span>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông địa chỉ</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Quốc gia</span>
                                <TruongChonNhieuQuocGia arr={QuocGia} id={'quocGia'} value={editCustomer.quocgia}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Tỉnh/Thành phố</span>
                                <TruongChonNhieuTinhThanh value={editCustomer.tinhthanhpho}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Quận/Huyện</span>
                                <TruongChonNhieuQuanHuyen value={editCustomer.quanhuyen}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Phường/Xã</span>
                                <TruongChonNhieuPhuongXa value={editCustomer.phuongxa}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Số nhà, Đường phố</span>
                                <HandleTypingNumberHome value={editCustomer.sonha}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Mã vùng</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                    autoComplete="off" 
                                    id='maVung'
                                    defaultValue={editCustomer.mavung}
                                    />
                                </span>
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
                                        defaultValue={editCustomer.mota}
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
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} 
                                        autoComplete="off" 
                                        id='maTiemNang' 
                                        defaultValue={editCustomer._id} 
                                    />
                                    <span className={styles.thonngTinWarningText}>Mã tiềm năng không được để trống</span>
                                </span>
                            </span>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default EditBody