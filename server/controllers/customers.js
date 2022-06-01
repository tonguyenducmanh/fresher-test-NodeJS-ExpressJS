import express from 'express'

import customerInfo from '../models/customerInfo.js'
import fs from 'fs'
//dùng fs để xóa file ảnh trong thư mục uploads

const router = express.Router()

export const getCustomer = async (req, res) => {
    try{
        // limit và startIndex được lấy yêu cầu từ frontend qua đây hihi
        const startIndex = parseInt(req.query.startIndex)
        const limit = parseInt(req.query.limit)

        const customerInfos = await customerInfo.find().limit(limit).skip(startIndex)

        res.status(200).json(customerInfos)
    } catch (error) {
        res.status(404).json( { message: error.message })
    }
}

export const findCustomer = async (req, res) => {
    try{
        //lấy mảng được trả về từ bên frontend
        const findArray = req.query.findArray.split(',')
        const customerInfos =  await customerInfo.find({ _id:{$in : findArray}})
        res.status(200).json(customerInfos)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}
export const deleteCustomer = async (req, res) => {
    try{
        //lấy mảng được trả về từ bên frontend

        const deleteArray = req.query.deleteArray.split(',')
        const customerInfosDeleted =  await customerInfo.find({ _id:{$in : deleteArray}})
        //xóa ảnh kèm theo. đường path này được tính từ server rồi nên không cần phải thêm nữa
        //phải gọi vào mongodb để xem tên ảnh là gì rồi xóa em nó trước. sau đó mới xóa hẳn
        // em nó trong database đi

        for(var i = 0 ; i< customerInfosDeleted.length; i++){
            if(customerInfosDeleted[i].anh !=='-'){
                // chỉ xét trường hợp có ảnh mới xóa thôi
                // bên client những document đăng không kèm ảnh thì
                // trường ảnh được để thành giá trị '-'
                let imagePath = `uploads/${customerInfosDeleted[i].anh}`
                fs.unlink(imagePath, (err) => {
                    if (err) {
                        res.status(404).json({ message: err.message })
                        return
                    }
                    //file removed
                })
            }
        }

        const customerInfos =  await customerInfo.deleteMany({ _id:{$in: deleteArray} });

        res.status(200).json(customerInfos)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

export const countCustomer = async (req,res) => {
    try{
        const customerInfos = await customerInfo.count()

        res.status(200).json(customerInfos)
    } catch (error) {
        res.status(404).json( { message: error.message })
    }
}

export const createCustomer = async (req, res) => {
    let anhValue
    typeof req.file !== 'undefined' ? anhValue = req.file.filename : anhValue = '-'
    // nếu không có ảnh up lên thì mặc định để giá trị '-'
    const post = {
        _id: req.body._id,
        xungho: req.body.xungHo,
        anh: anhValue,
        hovadem: req.body.hoVaDem,
        ten: req.body.ten,
        phongban: req.body.phongBan,
        chucdanh: req.body.chucDanh,
        dtdidong: req.body.dienThoaiDiDong,
        dtcoquan: req.body.dienThoaiCoQuan,
        nguongoc: req.body.nguonGoc,
        zalo: req.body.zalo,
        emailcanhan: req.body.emailCaNhan,
        emailcoquan: req.body.emailCoQuan,
        tochuc: req.body.toChuc,
        masothue: req.body.maSoThue,
        taikhoannganhang: req.body.taiKhoanNganHang,
        motainganhang: req.body.moTaiNganHang,
        ngaythanhlap: req.body.ngayThanhLap,
        loaihinh: req.body.loaiHinh,
        linhvuc: req.body.linhVuc,
        nganhnghe: req.body.nganhNghe,
        doanhthu: req.body.doanhThu,
        quocgia: req.body.quocGia,
        tinhthanhpho: req.body.tinhThanh,
        quanhuyen: req.body.quanHuyen,
        phuongxa: req.body.phuongXa,
        sonha: req.body.soNha,
        mavung: req.body.maVung,
        mota: req.body.moTa,
        loaitiemnang: req.body.loaiTiemNang,
        dungchung: req.body.dungChung

        // cấu trúc schema lấy từ file createBar.js bên client
        // và models customer ở file customerInfo.js bên server
        // lưu tên file vào trong database sau này dùng để hiển thị bên web
    };
    const newCustomerInfo = new customerInfo({...post})

    try{
        await newCustomerInfo.save()

        res.status(201).json(newCustomerInfo);
    } catch (error){
        res.status(409).json({message: error.message})
    }
}

export default router;