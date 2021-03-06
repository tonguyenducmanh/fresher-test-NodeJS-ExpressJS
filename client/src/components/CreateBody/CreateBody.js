import React, { useEffect }  from "react";
import styles from './CreateBody.module.css'

import {useDispatch, useSelector, shallowEqual } from "react-redux";
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
import { TiemNangValidate } from "./AutoComplete/FormValidate/TiemNangValidate";
import { MustHave } from "./AutoComplete/FormValidate/MustHave";
import { JustAtoZ } from "./AutoComplete/FormValidate/JustAtoZ";
import { Just0To9 } from "./AutoComplete/FormValidate/Just0To9";
import { EmailValidate } from "./AutoComplete/FormValidate/EmailValidate";
import { Input } from "./AutoComplete/FormValidate/Input";
import { ClearInputValue } from "./AutoComplete/FormValidate/ClearInputValue";
import { ClearMotaValue } from "./AutoComplete/FormValidate/ClearMotaValue";
import TiemNang from "./TiemNang/TiemNang";
const CreateBody = () =>{

    //ph???i ????? 15 ch??? s??? sau ch??? TN
    // ??ang generrate ra ti???m n??ng v???i ch??? s??? l???n h??n 1 ????n v??? so v???i ti???m n??ng
    // c?? s??? th??? t??? l???n nh???t
    useEffect(()=>{
        HandleImage()
        HandleCheck()
    },[])

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
                <form id='createCustomer' 
                    method="post" 
                    encType="multipart/form-data"
                    className={styles.form}
                >
                    <div className={styles.anhTiemNang}>
                        <div className={styles.thongTinGroupTitle}>???nh ti???m n??ng</div>
                        <div className={`${styles.thongTinGroupBody} ${styles.uploadImageBox}`}>
                            <input className={styles.thongTinImage} type='file' name='anhValue' id='anhValue'/>
                            <span className={styles.avatarImage} id='avatarValue'></span>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Th??ng tin chung</div>
                        <div className={styles.thongTinGroupBody}>
                        <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>X??ng h??</span>
                                <TruongChonNhieu arr={XungHo} id={'xungHo'} />
                            </span>
                            <span className={styles.thongTin} >
                                <span className={styles.thongTinTitle}>H??? v?? ?????m</span>
                                <span className={styles.thongTinInputFather}>
                                    <input  className={`${styles.thongTinInput} ${styles.thongtinMustHave} ${styles.thongtinAtoZ}`} autoComplete="new-password" id='firstName'
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
                                    <input  className={`${styles.thongTinInput} ${styles.thongtinMustHave} ${styles.thongtinAtoZ}`} autoComplete="new-password" id='lastName'
                                      onChange={ConnectName}
                                    />
                                    <span className={styles.thonngTinWarningText}>T??n kh??ng ???????c ????? tr???ng</span>
                                    <span className={styles.thonngTinWarningTextTwo}>T??n ch??? ch???a k?? t??? t??? a-z</span>
                                    <span className={styles.clearInput}></span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle} >H??? v?? t??n</span>
                                <span className={styles.thongTinHoVaTen} id='fullName'/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ph??ng ban</span>
                                <TruongChonNhieu arr={PhongBan} id={'phongBan'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ch???c danh</span>
                                <TruongChonNhieu arr={ChucDanh} id={'chucDanh'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>
                                    <span>??T di ?????ng</span>
                                    <span className={styles.iconInfo}>
                                    <span className={styles.iconToolTip}>??i???n tho???i di ?????ng</span>
                                    </span>
                                </span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} autoComplete="off" id='dienThoaiDiDong'/>
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
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} autoComplete="off" id='dienThoaiCoQuan'/>
                                    <span className={styles.thonngTinWarningText}>??t c?? quan kh??ng ???????c ????? tr???ng</span>
                                    <span className={styles.thonngTinWarningTextTwo}>??t c?? quan ch??? ch???a ch??? s??? t??? 0 - 9</span>
                                    <span className={styles.clearInput}></span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ngu???n g???c</span>
                                <TruongChonNhieu arr={NguonGoc} id={'nguonGoc'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Lo???i ti???m n??ng</span>
                                <TruongChonNhieuBox arr={LoaiTiemNang} />
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Zalo</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} autoComplete="off" id='zalo'/>
                                    <span className={styles.clearInput}></span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Email c?? nh??n</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} autoComplete="off" id='emailCaNhan'/>
                                    <span className={styles.thonngTinWarningTextThree}>Email ch??? c?? th??? ch???a k?? t??? ?????c bi???t @</span>
                                    <span className={styles.clearInput}></span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Email c?? quan</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} autoComplete="off" id='emailCoQuan'/>
                                    <span className={styles.thonngTinWarningTextThree}>Email ch??? c?? th??? ch???a k?? t??? ?????c bi???t @</span>
                                    <span className={styles.clearInput}></span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>T??? ch???c</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} autoComplete="off" id='toChuc'/>
                                    <span className={styles.clearInput}></span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>M?? s??? thu???</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} autoComplete="off" id='maSoThue'/>
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
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} autoComplete="off" id='taiKhoanNganHang'/>
                                    <span className={styles.thonngTinWarningText}>T??i kho???n ng??n h??ng kh??ng ???????c ????? tr???ng</span>
                                    <span className={styles.thonngTinWarningTextTwo}>TK ng??n h??ng ch??? ch???a ch??? s??? t??? 0 - 9</span>
                                    <span className={styles.clearInput}></span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>M??? t???i ng??n h??ng</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={`${styles.thongTinInput} ${styles.thongtinMustHave}`} autoComplete="off" id='moTaiNganHang'/>
                                    <span className={styles.thonngTinWarningText}>Ng??n h??ng kh??ng ???????c ????? tr???ng</span>
                                    <span className={styles.clearInput}></span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ng??y th??nh l???p</span>
                                <input type='date' placeholder="DD/MM/YYYY" autoComplete="off" className={styles.thongTinInput} id='ngayThanhLap'/>
                                <span className={styles.clearInput}></span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Lo???i h??nh</span>
                                <TruongChonNhieu arr={LoaiHinh} id={'loaiHinh'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>L??nh v???c</span>
                                <TruongChonNhieu arr={LinhVuc} id={'linhVuc'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ng??nh ngh???</span>
                                <TruongChonNhieu arr={NganhNghe} id={'nganhNghe'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>DoanhThu</span>
                                <TruongChonNhieu arr={DoanhThu} id={'doanhThu'}/>
                            </span>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Th??ng ?????a ch???</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Qu???c gia</span>
                                <TruongChonNhieuQuocGia arr={QuocGia} id={'quocGia'}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>T???nh/Th??nh ph???</span>
                                <TruongChonNhieuTinhThanh/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Qu???n/Huy???n</span>
                                <TruongChonNhieuQuanHuyen/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ph?????ng/X??</span>
                                <TruongChonNhieuPhuongXa/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>S??? nh??, ???????ng ph???</span>
                                <HandleTypingNumberHome/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>M?? v??ng</span>
                                <span className={styles.thongTinInputFather}>
                                    <input className={styles.thongTinInput} autoComplete="off" id='maVung'/>
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
                                        id='moTa'
                                    />
                                    <span className={styles.clearInputMota} title='X??a m?? t???'></span>
                            </span>
                            
                        </div>
                        <div className={styles.thongTinGroupTitle}>Th??ng tin Giao d???ch</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTinMoTa}>
                                <span className={`${styles.thongTinTitle} ${styles.thongTinMoTaTilte}`}>Danh s??ch giao d???ch</span>
                                    <textarea className={`${styles.thongTinInput} ${styles.thongTinMoTaInput}`}
                                        id='history'
                                        placeholder='C?? ph??p nh???p danh s??ch: giao d???ch A#t??n nh??n vi??n#ng??y giao d???ch;'
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
                                <span className={styles.iconCheck} id='dungChung'></span>
                            </span>
                            <TiemNang/>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default CreateBody