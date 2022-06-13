import mongoose from "mongoose";
// để phục vụ cho quá trình lọc và tìm theo từng ký tự
// kể cả giá trị số như số điện thoại cũng lưu dưới dạng string chuỗi
// để có thể dùng biểu thức chính quy
const customerSchema = mongoose.Schema({
    anh: String,
    xungho: String,
    hovadem: String,
    ten: String,
    phongban: String,
    chucdanh: String,
    dtdidong: String,
    dtcoquan: String,
    dtkhac: String,
    loaitiemnang: Array,
    nguongoc: String,
    khonggoidien: Boolean,
    khongguiemail: Boolean,
    zalo: String,
    emailcanhan: String,
    emailcoquan: String,
    tochuc: String,
    masothue: String,
    taikhoannganhang: String,
    motainganhang: String,
    ngaythanhlap: String,
    loaihinh: String,
    linhvuc: String,
    nganhnghe: String,
    doanhthu: String,
    quocgia: String,
    tinhthanhpho: String,
    quanhuyen: String,
    phuongxa: String,
    sonha: String,
    mavung: String,
    mota: String,
    dungchung: Boolean,
})

var customerInfo = mongoose.model('customers', customerSchema)

export default customerInfo