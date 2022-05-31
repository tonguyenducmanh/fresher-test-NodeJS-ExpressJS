import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    _id: String,
    anh: String,
    xungho: String,
    hovadem: String,
    ten: String,
    phongban: String,
    chucdanh: String,
    dtdidong: Number,
    dtcoquan: Number,
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