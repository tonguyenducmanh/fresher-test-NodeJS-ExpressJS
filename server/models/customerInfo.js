import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    the: String,
    xungho: String,
    hovaten: String,
    chucdanh: String,
    dtdidong: String,
    dtcoquan: String,
    emailcoquan: String,
    emailcanhan: String,
    tochuc: String,
    diachi: String,
    tinhthanhpho: String,
    quanhuyen: String,
    phuongxa: String,
    nguongoc: String,
    loaihinh: String,
    linhvuc: String,
    mota: String,
    bocuc: String,
    chusohuu: String,
    doanhthu: String,
    dungchung: String,
    facebook: String,
})

var customerInfo = mongoose.model('customers', customerSchema)

export default customerInfo