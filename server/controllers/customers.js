import express from 'express'

import customerInfo from '../models/customerInfo.js'
import fs from 'fs'
//dùng fs để xóa file ảnh trong thư mục uploads

const router = express.Router()

export const getCustomer = async (req, res) => {
    try{
        // limit và startIndex được lấy yêu cầu từ frontend qua đây hihi
        // searchString nếu không có thì để là rỗng, mà tìm chuỗi rỗng thì
        // có nghĩa là tìm hết còn gì
        const startIndex = parseInt(req.query.startIndex)
        const limit = parseInt(req.query.limit)
        let searchString 
        req.query.searchString ? (searchString =  req.query.searchString) :
        (searchString = '')
        const queryString = new RegExp(`${searchString}`, "i")
        const customerInfos = await customerInfo.find(
            {
                $or: [
                    {'hovadem': queryString},
                    {'ten': queryString},
                ]
            }
        ).limit(limit).skip(startIndex)
        res.status(200).json(customerInfos)
    } catch (error) {
        res.status(404).json( { message: error.message })
    }
}


export const lastCustomer = async (req, res) => {
    try{
        const customerInfos =  await customerInfo.find().sort({_id:-1}).limit(1);
        // cú pháp sort trên sẽ sắp xếp theo thứ tự _id giảm dần
        // thì thằng đầu tiên sẽ là thằng cao nhất
        res.status(200).json(customerInfos)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

export const checkCustomerExist = async (req, res) => {
    try{
        const customerInfos =  await customerInfo.find({ _id: req.query.findID})
        res.status(200).json(customerInfos)
    } catch (error){
        res.status(404).json({ message: error.message })
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

        for(let i = 0 ; i< customerInfosDeleted.length; i++){
            if(customerInfosDeleted[i].anh.split('').length>10){
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
        let searchString 
        req.query.searchString ? (searchString =  req.query.searchString) :
        (searchString = '')
        const queryString = new RegExp(`${searchString}`, "i")
        const customerInfos = await customerInfo.count(
            {
                $or: [
                    {'hovadem': queryString},
                    {'ten': queryString},
                ]
            }
        )

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


export const editCustomer = async (req,res) => {
    let anhValue
    typeof req.file !== 'undefined' ? anhValue = req.file.filename : anhValue
    // nếu không có ảnh up lên thì mặc định không để giá trị, để loại nó đi
    const ID = req.body._id
    const newValues = {
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

    }


    try{


        
        const editCustomerInfo = await customerInfo.updateOne({_id: ID},newValues)

        const anhCu = req.body.anhCuValue
        if(anhCu.split('').length>10){
            // chỉ xét trường hợp có ảnh mới mới xóa ảnh cũ thôi
            // bên client document đăng ảnh mới thì kệ
            // vì ảnh mặc định thêm vào trước tên thời gian đăng, nên chắc chắn dài hơn
            // 10 ký tự
            let imagePath = `uploads/${anhCu}`
            fs.unlink(imagePath, (err) => {
                if (err) {
                    res.status(404).json({ message: err.message })
                }
                //file removed
            })
        }
        


        res.status(201).json(editCustomerInfo);
    }
    catch (error){
        res.status(409).json({message: error.message})
    }
}


export default router;