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

import { Input } from "./AutoComplete/FormValidate/Input";
import { ClearInputValue } from "./AutoComplete/FormValidate/ClearInputValue";
import { ClearMotaValue } from "./AutoComplete/FormValidate/ClearMotaValue";

import { The } from "./The/The";

const EditBody = () =>{
    const editCustomer = useSelector(state => state.tempCustomer.editCustomer)
    const image = `url(http://localhost:5000/${editCustomer.anh})`
    let urlImage
    if(editCustomer.anh != '-' && editCustomer.anh != ''){
        urlImage = image
    }else{
        urlImage = ''
    }
    let history
    if(editCustomer.history) {
        history = editCustomer.history.join(';\n')
    }else{
        history =''
    }
    useEffect(()=>{
        HandleImage()
        HandleCheck()
    })

    useEffect(()=>{
        MustHave()
        JustAtoZ()
        Just0To9()
        EmailValidate()
        Input()
        ClearInputValue()
        ClearMotaValue()
    },[])
    
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <form id='EditCustomer' 
                    method="post" 
                    encType="multipart/form-data"
                    className={styles.form}
                >
                    <div className={styles.anhTiemNang}>
                        <div className={styles.thongTinGroupTitle}>???nh ti???m n??ng</div>
                        <div className={`${styles.thongTinGroupBody} ${styles.uploadImageBox}`}>
                            <input className={styles.thongTinImage} type='file' name='anhEditValue' id='anhEditValue'/>
                            <span className={styles.avatarImage} id='avatarEditValue' 
                               style= {urlImage != '' ? {
                                   backgroundImage: urlImage,
                                   backgroundPosition : 0,
                                   backgroundSize: 'cover'
                                }
                                : {
                                    display: 'block'
                                }}
                                ></span>
                            <The editCustomer={editCustomer}/>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Th??ng tin chung</div>
                        <div className={styles.thongTinGroupBody}>
                        <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>X??ng h??</span>
                                <TruongChonNhieu arr={XungHo} id={'xungHoEdit'} value={editCustomer.xungho} />
                            </span>
                            <span className={styles.thongTin} >
                                <span className={styles.thongTinTitle}>H??? v?? ?????m</span>
                                <span className={styles.thongTinInputFather}>
                                    <input  className={`${styles.thongTinInput} ${styles.thongtinMustHave} ${styles.thongtinAtoZ}`} 
                                        autoComplete="new-password" 
                                        id='firstNameEdit'
                                        defaultValue={editCustomer.hovadem}
                                        onChange={ConnectName}
                                    />
                                    <span className={styles.thonngTinWarningText}>H??? v?? ?????m kh??ng ???????c ????? tr???ng</span>
                                    <span className={styles.thonngTinWarningTextTwo}>H??? v?? ?????m ch??? ch???a k?? t??? t??? a-z</span>
                                    <span className={styles.clearInput}></span>

                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle} >T??n</span>
                                <span className={styles.thongTinInputFather}>
                                    <input  className={`${styles.thongTinInput} ${styles.thongtinMustHave} ${styles.thongtinAtoZ}`} 
                                        autoComplete="new-password" 
                                        id='lastNameEdit'
                                        defaultValue={editCustomer.ten}
                                        onChange={ConnectName}
                                    />
                                    <span className={styles.thonngTinWarningText}>T??n kh??ng ???????c ????? tr???ng</span>
                                    <span className={styles.thonngTinWarningTextTwo}>T??n ch??? ch???a k?? t??? t??? a-z</span>
                                    <span className={styles.clearInput}></span>

                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle} >H??? v?? t??n</span>
                                <span className={styles.thongTinHoVaTen} id='fullNameEdit'>
                                {`${editCustomer.hovadem} ${editCustomer.ten}`}
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ph??ng ban</span>
                                <TruongChonNhieu arr={PhongBan} id={'phongBanEdit'} value={editCustomer.phongban} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ch???c danh</span>
                                <TruongChonNhieu arr={ChucDanh} id={'chucDanhEdit'} value={editCustomer.chucdanh} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>
                                    <span>??T di ?????ng</span>
                                    <span className={styles.iconInfo}>
                                    <span className={styles.iconToolTip}>??i???n tho???i di ?????ng</span>
                                    </span>
                                </span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} 
                                        autoComplete="off" 
                                        id='dienThoaiDiDongEdit'
                                        defaultValue={editCustomer.dtdidong}    
                                    />
                                    <span className={styles.thonngTinWarningText}>??t di ?????ng kh??ng ???????c ????? tr???ng</span>
                                    <span className={styles.thonngTinWarningTextTwo}>??t di ?????ng ch??? ch???a ch??? s??? t??? 0 - 9</span>
                                    <span className={styles.clearInput}></span>

                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>
                                    <span>??T c?? quan</span>
                                    <span className={styles.iconInfo}>
                                    <span className={styles.iconToolTip}>??i???n tho???i c?? quan </span>
                                    </span>
                                </span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} 
                                        autoComplete="off" 
                                        id='dienThoaiCoQuanEdit'
                                        defaultValue={editCustomer.dtcoquan}
                                    />
                                    <span className={styles.thonngTinWarningText}>??t c?? quan kh??ng ???????c ????? tr???ng</span>
                                    <span className={styles.thonngTinWarningTextTwo}>??t c?? quan ch??? ch???a ch??? s??? t??? 0 - 9</span>
                                    <span className={styles.clearInput}></span>

                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ngu???n g???c</span>
                                <TruongChonNhieu arr={NguonGoc} id={'nguonGocEdit'} value={editCustomer.nguongoc} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Lo???i ti???m n??ng</span>
                                <TruongChonNhieuBox arr={LoaiTiemNang} value={editCustomer.loaitiemnang}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Zalo</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                        autoComplete="off" 
                                        id='zaloEdit'
                                        defaultValue={editCustomer.zalo}
                                    />
                                    <span className={styles.clearInput}></span>

                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Email c?? nh??n</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                        autoComplete="off" 
                                        id='emailCaNhanEdit'
                                        defaultValue={editCustomer.emailcanhan}
                                    />
                                    <span className={styles.thonngTinWarningTextThree}>Email ch??? c?? th??? ch???a k?? t??? ?????c bi???t @</span>
                                    <span className={styles.clearInput}></span>

                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Email c?? quan</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                        autoComplete="off" 
                                        id='emailCoQuanEdit'
                                        defaultValue={editCustomer.emailcoquan}
                                    />
                                    <span className={styles.thonngTinWarningTextThree}>Email ch??? c?? th??? ch???a k?? t??? ?????c bi???t @</span>
                                    <span className={styles.clearInput}></span>

                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>T??? ch???c</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                        autoComplete="off" 
                                        id='toChucEdit'
                                        defaultValue={editCustomer.tochuc}
                                    />
                                    <span className={styles.clearInput}></span>

                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>M?? s??? thu???</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                        autoComplete="off" 
                                        id='maSoThueEdit'
                                        defaultValue={editCustomer.masothue}
                                    />
                                    <span className={styles.clearInput}></span>

                                </span>
                            </span>

                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Th??ng tin t??? ch???c</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>T??i kho???n ng??n h??ng</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} 
                                        autoComplete="off" 
                                        id='taiKhoanNganHangEdit'
                                        defaultValue={editCustomer.taikhoannganhang}
                                        
                                    />
                                    <span className={styles.thonngTinWarningText}>T??i kho???n ng??n h??ng kh??ng ???????c ????? tr???ng</span>
                                    <span className={styles.thonngTinWarningTextTwo}>TK ng??n h??ng ch??? ch???a ch??? s??? t??? 0 - 9</span>
                                    <span className={styles.clearInput}></span>

                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>M??? t???i ng??n h??ng</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} 
                                        autoComplete="off" 
                                        defaultValue={editCustomer.motainganhang}
                                        id='moTaiNganHangEdit'
                                    />
                                    <span className={styles.thonngTinWarningText}>Ng??n h??ng kh??ng ???????c ????? tr???ng</span>
                                    <span className={styles.clearInput}></span>
                                    
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ng??y th??nh l???p</span>
                                <input className={styles.thongTinInput} id='ngayThanhLapEdit'
                                type='date' 
                                placeholder="DD/MM/YYYY" 
                                autoComplete="off" 
                                defaultValue={editCustomer.ngaythanhlap}
                                />
                                <span className={styles.clearInput}></span>

                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Lo???i h??nh</span>
                                <TruongChonNhieu arr={LoaiHinh} id={'loaiHinhEdit'} value={editCustomer.loaihinh} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>L??nh v???c</span>
                                <TruongChonNhieu arr={LinhVuc} id={'linhVucEdit'} value={editCustomer.linhvuc} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ng??nh ngh???</span>
                                <TruongChonNhieu arr={NganhNghe} id={'nganhNgheEdit'} value={editCustomer.nganhnghe} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>DoanhThu</span>
                                <TruongChonNhieu arr={DoanhThu} id={'doanhThuEdit'} value={editCustomer.doanhthu} />
                            </span>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Th??ng ?????a ch???</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Qu???c gia</span>
                                <TruongChonNhieuQuocGia arr={QuocGia} id={'quocGiaEdit'} value={editCustomer.quocgia}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>T???nh/Th??nh ph???</span>
                                <TruongChonNhieuTinhThanh value={editCustomer.tinhthanhpho}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Qu???n/Huy???n</span>
                                <TruongChonNhieuQuanHuyen value={editCustomer.quanhuyen}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ph?????ng/X??</span>
                                <TruongChonNhieuPhuongXa value={editCustomer.phuongxa}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>S??? nh??, ???????ng ph???</span>
                                <HandleTypingNumberHome value={editCustomer.sonha}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>M?? v??ng</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} 
                                    autoComplete="off" 
                                    id='maVungEdit'
                                    defaultValue={editCustomer.mavung}
                                    />
                                    <span className={styles.clearInput}></span>

                                </span>
                            </span>
                            <span className={styles.thongTinDiaChi}>
                                <span className={`${styles.thongTinTitle}  ${styles.thongTinDiaChiTitle}`}>?????a ch???</span>
                                <DiaChiTongHop/>
                            </span>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Th??ng tin m?? t???</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTinMoTa}>
                                <span className={`${styles.thongTinTitle} ${styles.thongTinMoTaTilte}`}>M?? t???</span>
                                    <textarea className={`${styles.thongTinInput} ${styles.thongTinMoTaInput}`}
                                        id='moTaEdit'
                                        defaultValue={editCustomer.mota}
                                    />
                                    <span className={styles.clearInputMota} title='X??a m?? t???'></span>

                            </span>
                            
                        </div>
                        <div className={styles.thongTinGroupTitle}>Th??ng tin Giao d???ch</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTinMoTa}>
                                <span className={`${styles.thongTinTitle} ${styles.thongTinMoTaTilte}`}>Danh s??ch giao d???ch</span>
                                    <textarea className={`${styles.thongTinInput} ${styles.thongTinMoTaInput}`}
                                        id='historyEdit'
                                        defaultValue={history}
                                    />
                                    <span className={styles.clearInputMota} title='X??a danh s??ch giao d???ch'></span>
                            </span>
                            
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Th??ng tin h??? th???ng</div>
                        <div className={styles.thongTinGroupLastBody}>
                            <span className={`${styles.thongTin} ${styles.thongTinLast}`}>
                                <span className={styles.thongTinLastTitle}>D??ng chung</span>
                                <span className={editCustomer.dungchung ? `${styles.iconChecked}` : `${styles.iconCheck}`} id='dungChungEdit'></span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle} >M?? ti???m n??ng</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} 
                                        autoComplete="off" 
                                        id='maEditTiemNang' 
                                        defaultValue={editCustomer._id} 
                                        disabled={true}
                                    />
                                    <span className={styles.maTiemNangNotify}>M?? ti???m n??ng kh??ng th??? thay ?????i v???i m???i kh??ch h??ng</span>
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