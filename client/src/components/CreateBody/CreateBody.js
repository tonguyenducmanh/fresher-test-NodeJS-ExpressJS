import React, {useEffect} from "react";
import styles from './CreateBody.module.css'

import { XungHo } from "./AutoComplete/XungHo";
import { PhongBan } from "./AutoComplete/PhongBan";
import { GioiTinh } from "./AutoComplete/GioiTinh";
import { ChucDanh } from "./AutoComplete/ChucDanh";
import { LoaiTiemNang } from "./AutoComplete/LoaiTiemNang";
import { DoanhThu } from "./AutoComplete/DoanhThu";
import { LinhVuc } from "./AutoComplete/LinhVuc";
import { LoaiHinh } from "./AutoComplete/LoaiHinh";
import { NganhNghe } from "./AutoComplete/NganhNghe";
import { NguonGoc } from "./AutoComplete/NguonGoc";



import UseAutocomplete from './AutoComplete/AutoComplete'

const CreateBody = () =>{
    const handleComboBox = (e) => {
            e.target.parentElement.children[1].style.display= 'block'
    }
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.form}>
                    <div className={styles.anhTiemNang}>
                        <div className={styles.thongTinGroupTitle}>Ảnh tiềm năng</div>
                        <div className={styles.thongTinGroupBody}>
                            <input className={styles.thongTinImage} type='file'/>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông tin chung</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Xưng hô</span>
                                <span className={styles.thongTinCombo}>
                                    <span className={styles.thongTinComboDefault} onClick={handleComboBox}>- Không chọn -</span>
                                    <span className={styles.thongTinComboBox}>
                                        <UseAutocomplete arr={XungHo} />
                                        <span className={styles.thongTinSearchIcon}></span>
                                    </span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Họ và đệm</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Tên</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle} >Họ và tên</span>
                                <input className={styles.thongTinInput} disabled={true}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Phòng ban</span>
                                <span className={styles.thongTinCombo}>
                                    <span className={styles.thongTinComboDefault} onClick={handleComboBox}>- Không chọn -</span>
                                    <span className={styles.thongTinComboBox}>
                                        <UseAutocomplete arr={PhongBan} />
                                        <span className={styles.thongTinSearchIcon}></span>
                                    </span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Chức danh</span>
                                <span className={styles.thongTinCombo}>
                                    <span className={styles.thongTinComboDefault} onClick={handleComboBox}>- Không chọn -</span>
                                    <span className={styles.thongTinComboBox}>
                                        <UseAutocomplete arr={ChucDanh} />
                                        <span className={styles.thongTinSearchIcon}></span>
                                    </span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>
                                    <span>ĐT di động</span>
                                    <span className={styles.iconInfo}>
                                    <span className={styles.iconToolTip}>Điện thoại di động</span>
                                    </span>
                                </span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>
                                    <span>ĐT cơ quan</span>
                                    <span className={styles.iconInfo}>
                                    <span className={styles.iconToolTip}>Điện thoại cơ quan </span>
                                    </span>
                                </span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Nguồn gốc</span>
                                <span className={styles.thongTinCombo}>
                                    <span className={styles.thongTinComboDefault} onClick={handleComboBox}>- Không chọn -</span>
                                    <span className={styles.thongTinComboBox}>
                                        <UseAutocomplete arr={NguonGoc} />
                                        <span className={styles.thongTinSearchIcon}></span>
                                    </span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Loại tiềm năng</span>
                                <span className={styles.thongTinCombo}>
                                    <span className={styles.thongTinComboDefault} onClick={handleComboBox}>- Không chọn -</span>
                                    <span className={styles.thongTinComboBox}>
                                        <UseAutocomplete arr={LoaiTiemNang} />
                                        <span className={styles.thongTinSearchIcon}></span>
                                    </span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Zalo</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Email cá nhân</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Email cơ quan</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Tổ chức</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Mã số thuế</span>
                                <input className={styles.thongTinInput}/>
                            </span>

                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông tin tổ chức</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Tài khoản ngân hàng</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Mở tại ngân hàng</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ngày thành lập</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Loại hình</span>
                                <span className={styles.thongTinCombo}>
                                    <span className={styles.thongTinComboDefault} onClick={handleComboBox}>- Không chọn -</span>
                                    <span className={styles.thongTinComboBox}>
                                        <UseAutocomplete arr={LoaiHinh} />
                                        <span className={styles.thongTinSearchIcon}></span>
                                    </span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Lĩnh vực</span>
                                <span className={styles.thongTinCombo}>
                                    <span className={styles.thongTinComboDefault} onClick={handleComboBox}>- Không chọn -</span>
                                    <span className={styles.thongTinComboBox}>
                                        <UseAutocomplete arr={LinhVuc} />
                                        <span className={styles.thongTinSearchIcon}></span>
                                    </span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Ngành nghề</span>
                                <span className={styles.thongTinCombo}>
                                    <span className={styles.thongTinComboDefault} onClick={handleComboBox}>- Không chọn -</span>
                                    <span className={styles.thongTinComboBox}>
                                        <UseAutocomplete arr={NganhNghe} />
                                        <span className={styles.thongTinSearchIcon}></span>
                                    </span>
                                </span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Doanh thu</span>
                                <span className={styles.thongTinCombo}>
                                    <span className={styles.thongTinComboDefault} onClick={handleComboBox}>- Không chọn -</span>
                                    <span className={styles.thongTinComboBox}>
                                        <UseAutocomplete arr={DoanhThu} />
                                        <span className={styles.thongTinSearchIcon}></span>
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông địa chỉ</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Quốc gia</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Tỉnh/Thành phố</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Quận/Huyện</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Phường/Xã</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Số nhà, Đường phố</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Mã vùng</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                            <span className={styles.thongTinDiaChi}>
                                <span className={`${styles.thongTinTitle}  ${styles.thongTinDiaChiTitle}`}>Địa chỉ</span>
                                <textarea className={`${styles.thongTinInput}  ${styles.thongTinInputDiaChi}`}/>
                            </span>
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông tin mô tả</div>
                        <div className={styles.thongTinGroupBody}>
                            <span className={styles.thongTinMoTa}>
                                <span className={`${styles.thongTinTitle} ${styles.thongTinMoTaTilte}`}>Mô tả</span>
                                <textarea className={`${styles.thongTinInput} ${styles.thongTinMoTaInput}`}/>
                            </span>
                            
                        </div>
                    </div>
                    <div className={styles.thongTinChung}>
                        <div className={styles.thongTinGroupTitle}>Thông tin hệ thống</div>
                        <div className={styles.thongTinGroupLastBody}>
                            <span className={`${styles.thongTin} ${styles.thongTinLast}`}>
                                <span className={styles.thongTinLastTitle}>Dùng chung</span>
                                <span className={styles.iconCheck}></span>
                            </span>
                            <span className={styles.thongTin}>
                                <span className={styles.thongTinTitle}>Mã tiềm năng</span>
                                <input className={styles.thongTinInput}/>
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateBody