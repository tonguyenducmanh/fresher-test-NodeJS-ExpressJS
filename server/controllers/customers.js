import express from 'express'

import customerInfo from '../models/customerInfo.js'
import fs from 'fs'
//dùng fs để xóa file ảnh trong thư mục uploads

const router = express.Router()

export const getCustomer = async (req, res) => {
        // limit và startIndex được lấy yêu cầu từ frontend qua đây hihi
        // searchString nếu không có thì để là rỗng, mà tìm chuỗi rỗng thì
        // có nghĩa là tìm hết còn gì
        const startIndex = parseInt(req.body.startIndex)
        const limit = parseInt(req.body.limit)

        //từ khóa tìm kiếm

        let searchString 
        req.body.searchString ? (searchString =  req.body.searchString) :
        (searchString = '')
        searchString = new RegExp(`${searchString}`, "i")

        //từ khóa lọc

        let xunghoString = req.body.xunghoString
        let xunghoCondition = req.body.xunghoCondition
        let hovademString = req.body.hovademString
        let hovademCondition = req.body.hovademCondition
        let tenString = req.body.tenString
        let tenCondition = req.body.tenCondition
        let phongbanString = req.body.phongbanString
        let phongbanCondition = req.body.phongbanCondition
        let chucdanhString = req.body.chucdanhString
        let chucdanhCondition = req.body.chucdanhCondition
        let dtdidongString = req.body.dtdidongString
        let dtdidongCondition = req.body.dtdidongCondition
        let dtcoquanString = req.body.dtcoquanString
        let dtcoquanCondition = req.body.dtcoquanCondition
        let loaitiemnangString = req.body.loaitiemnangString
        let loaitiemnangCondition = req.body.loaitiemnangCondition
        let theString = req.body.theString
        let theCondition = req.body.theCondition
        let nguongocString = req.body.nguongocString
        let nguongocCondition = req.body.nguongocCondition
        let zaloString = req.body.zaloString
        let zaloCondition = req.body.zaloCondition
        let emailcanhanString = req.body.emailcanhanString
        let emailcanhanCondition = req.body.emailcanhanCondition
        let emailcoquanString = req.body.emailcoquanString
        let emailcoquanCondition = req.body.emailcoquanCondition
        let tochucString = req.body.tochucString
        let tochucCondition = req.body.tochucCondition
        let masothueString = req.body.masothueString
        let masothueCondition = req.body.masothueCondition
        let taikhoannganhangString = req.body.taikhoannganhangString
        let taikhoannganhangCondition = req.body.taikhoannganhangCondition
        let motainganhangString = req.body.motainganhangString
        let motainganhangCondition = req.body.motainganhangCondition
        let ngaythanhlapString = req.body.ngaythanhlapString
        let ngaythanhlapCondition = req.body.ngaythanhlapCondition
        let loaihinhString = req.body.loaihinhString
        let loaihinhCondition = req.body.loaihinhCondition
        let linhvucString = req.body.linhvucString
        let linhvucCondition = req.body.linhvucCondition
        let nganhngheString = req.body.nganhngheString
        let nganhngheCondition = req.body.nganhngheCondition
        let doanhthuString = req.body.doanhthuString
        let doanhthuCondition = req.body.doanhthuCondition
        let quocgiaString = req.body.quocgiaString
        let quocgiaCondition = req.body.quocgiaCondition
        let tinhthanhphoString = req.body.tinhthanhphoString
        let tinhthanhphoCondition = req.body.tinhthanhphoCondition
        let quanhuyenString = req.body.quanhuyenString
        let quanhuyenCondition = req.body.quanhuyenCondition
        let phuongxaString = req.body.phuongxaString
        let phuongxaCondition = req.body.phuongxaCondition
        let sonhaString = req.body.sonhaString
        let sonhaCondition = req.body.sonhaCondition
        let motaString = req.body.motaString
        let motaCondition = req.body.motaCondition
        let dungchungString = req.body.dungchungString
        let dungchungCondition = req.body.dungchungCondition


        //chức năng lọc theo từ khóa

        function getFilter (string, condition){
            let filterString
            let filterCondition = parseInt(condition)
    
            switch (filterCondition) {
                case 1:
                    //trường hợp là
                    filterString = string
                    break;
                case 2:
                    //trường hợp không là
                    filterString = { $not: { $eq: string } }
                    break;
                case 3:
                    //trường hợp chứa, dùng thêm cả $options: 'i' để không phân biệt hoa thường
                    filterString = {$regex:`${string}`, $options: 'i'}
                    break;
                case 4:
                    //trường hợp không chứa, dùng thêm cả $options: 'i' để phân biệt hoa thường
                    filterString = { $not: {$regex:`${string}`, $options: 'i'}}
                    break;
                case 5:
                    //trường hợp trống, mặc định code bên kia trống sẽ chứa cái này khi lưu
                    filterString = ''
                    break;
                case 6:
                    //trường hợp không trống, tức là khác rỗng
                    filterString = {$not: { $eq: '' }}
                    break;
                case 7:
                    //trường hợp giá trị true false, trả về true hoặc false
                    filterString = string
                    break;
            
                default:
                    //nếu không giống bất kỳ cái nào thì cứ hiện ra toàn bộ danh sách thôi
                    //cái dưới có nghĩa là tồn tại
                    filterString = {$exists: true}
                    break;
            }

            return filterString
    
        }

    try{
        
        const customerInfos = await customerInfo.find(
            {
                $or: [
                    {'hovadem': searchString},
                    {'ten': searchString},
                ],
                $and: [
                    {'xungho': getFilter(xunghoString,xunghoCondition)},
                    {'hovadem': getFilter(hovademString,hovademCondition)},
                    {'ten': getFilter(tenString,tenCondition)},
                    {'phongban': getFilter(phongbanString,phongbanCondition)},
                    {'chucdanh': getFilter(chucdanhString,chucdanhCondition)},
                    {'dtdidong': getFilter(dtdidongString,dtdidongCondition)},
                    {'dtcoquan': getFilter(dtcoquanString,dtcoquanCondition)},
                    {'loaitiemnang': getFilter(loaitiemnangString,loaitiemnangCondition)},
                    {'the': getFilter(theString,theCondition)},
                    {'nguongoc': getFilter(nguongocString,nguongocCondition)},
                    {'zalo': getFilter(zaloString,zaloCondition)},
                    {'emailcanhan': getFilter(emailcanhanString,emailcanhanCondition)},
                    {'emailcoquan': getFilter(emailcoquanString,emailcoquanCondition)},
                    {'tochuc': getFilter(tochucString,tochucCondition)},
                    {'masothue': getFilter(masothueString,masothueCondition)},
                    {'taikhoannganhang': getFilter(taikhoannganhangString,taikhoannganhangCondition)},
                    {'motainganhang': getFilter(motainganhangString,motainganhangCondition)},
                    {'ngaythanhlap': getFilter(ngaythanhlapString,ngaythanhlapCondition)},
                    {'loaihinh': getFilter(loaihinhString,loaihinhCondition)},
                    {'linhvuc': getFilter(linhvucString,linhvucCondition)},
                    {'nganhnghe': getFilter(nganhngheString,nganhngheCondition)},
                    {'doanhthu': getFilter(doanhthuString,doanhthuCondition)},
                    {'quocgia': getFilter(quocgiaString,quocgiaCondition)},
                    {'tinhthanhpho': getFilter(tinhthanhphoString,tinhthanhphoCondition)},
                    {'quanhuyen': getFilter(quanhuyenString,quanhuyenCondition)},
                    {'phuongxa': getFilter(phuongxaString,phuongxaCondition)},
                    {'sonha': getFilter(sonhaString,sonhaCondition)},
                    {'mota': getFilter(motaString,motaCondition)},
                    {'dungchung': getFilter(dungchungString,dungchungCondition)},
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
        const findArray = req.body.idsString
        const customerInfos =  await customerInfo.find({ _id:{$in : findArray}})
        res.status(200).json(customerInfos)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}
export const deleteCustomer = async (req, res) => {

    try{
        //lấy mảng được trả về từ bên frontend

        const deleteArray = req.body.idsString
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
         //từ khóa tìm kiếm

         let searchString 
         req.body.searchString ? (searchString =  req.body.searchString) :
         (searchString = '')
         searchString = new RegExp(`${searchString}`, "i")
 
         //từ khóa lọc
 
         let xunghoString = req.body.xunghoString
         let xunghoCondition = req.body.xunghoCondition
         let hovademString = req.body.hovademString
         let hovademCondition = req.body.hovademCondition
         let tenString = req.body.tenString
         let tenCondition = req.body.tenCondition
         let phongbanString = req.body.phongbanString
         let phongbanCondition = req.body.phongbanCondition
         let chucdanhString = req.body.chucdanhString
         let chucdanhCondition = req.body.chucdanhCondition
         let dtdidongString = req.body.dtdidongString
         let dtdidongCondition = req.body.dtdidongCondition
         let dtcoquanString = req.body.dtcoquanString
         let dtcoquanCondition = req.body.dtcoquanCondition
         let loaitiemnangString = req.body.loaitiemnangString
         let loaitiemnangCondition = req.body.loaitiemnangCondition
         let theString = req.body.theString
         let theCondition = req.body.theCondition
         let nguongocString = req.body.nguongocString
         let nguongocCondition = req.body.nguongocCondition
         let zaloString = req.body.zaloString
         let zaloCondition = req.body.zaloCondition
         let emailcanhanString = req.body.emailcanhanString
         let emailcanhanCondition = req.body.emailcanhanCondition
         let emailcoquanString = req.body.emailcoquanString
         let emailcoquanCondition = req.body.emailcoquanCondition
         let tochucString = req.body.tochucString
         let tochucCondition = req.body.tochucCondition
         let masothueString = req.body.masothueString
         let masothueCondition = req.body.masothueCondition
         let taikhoannganhangString = req.body.taikhoannganhangString
         let taikhoannganhangCondition = req.body.taikhoannganhangCondition
         let motainganhangString = req.body.motainganhangString
         let motainganhangCondition = req.body.motainganhangCondition
         let ngaythanhlapString = req.body.ngaythanhlapString
         let ngaythanhlapCondition = req.body.ngaythanhlapCondition
         let loaihinhString = req.body.loaihinhString
         let loaihinhCondition = req.body.loaihinhCondition
         let linhvucString = req.body.linhvucString
         let linhvucCondition = req.body.linhvucCondition
         let nganhngheString = req.body.nganhngheString
         let nganhngheCondition = req.body.nganhngheCondition
         let doanhthuString = req.body.doanhthuString
         let doanhthuCondition = req.body.doanhthuCondition
         let quocgiaString = req.body.quocgiaString
         let quocgiaCondition = req.body.quocgiaCondition
         let tinhthanhphoString = req.body.tinhthanhphoString
         let tinhthanhphoCondition = req.body.tinhthanhphoCondition
         let quanhuyenString = req.body.quanhuyenString
         let quanhuyenCondition = req.body.quanhuyenCondition
         let phuongxaString = req.body.phuongxaString
         let phuongxaCondition = req.body.phuongxaCondition
         let sonhaString = req.body.sonhaString
         let sonhaCondition = req.body.sonhaCondition
         let motaString = req.body.motaString
         let motaCondition = req.body.motaCondition
         let dungchungString = req.body.dungchungString
         let dungchungCondition = req.body.dungchungCondition
 
 
         //chức năng lọc theo từ khóa
 
         function getFilter (string, condition){
             let filterString
             let filterCondition = parseInt(condition)
     
             switch (filterCondition) {
                 case 1:
                     //trường hợp là
                     filterString = string
                     break;
                 case 2:
                     //trường hợp không là
                     filterString = { $not: { $eq: string } }
                     break;
                 case 3:
                     //trường hợp chứa, dùng thêm cả $options: 'i' để không phân biệt hoa thường
                     filterString = {$regex:`${string}`, $options: 'i'}
                     break;
                 case 4:
                     //trường hợp không chứa, dùng thêm cả $options: 'i' để phân biệt hoa thường
                     filterString = { $not: {$regex:`${string}`, $options: 'i'}}
                     break;
                 case 5:
                     //trường hợp trống, mặc định code bên kia trống sẽ chứa cái này khi lưu
                     filterString = ''
                     break;
                 case 6:
                     //trường hợp không trống, tức là khác rỗng
                     filterString = {$not: { $eq: '' }}
                     break;
                 case 7:
                     //trường hợp giá trị true false, trả về true hoặc false
                     filterString = string
                     break;
             
                 default:
                     //nếu không giống bất kỳ cái nào thì cứ hiện ra toàn bộ danh sách thôi
                     //cái dưới có nghĩa là tồn tại
                     filterString = {$exists: true}
                     break;
             }
 
             return filterString
     
         }
 
    try{
        const customerInfos = await customerInfo.count(
            {
                $or: [
                    {'hovadem': searchString},
                    {'ten': searchString},
                ],
                $and: [
                    {'xungho': getFilter(xunghoString,xunghoCondition)},
                    {'hovadem': getFilter(hovademString,hovademCondition)},
                    {'ten': getFilter(tenString,tenCondition)},
                    {'phongban': getFilter(phongbanString,phongbanCondition)},
                    {'chucdanh': getFilter(chucdanhString,chucdanhCondition)},
                    {'dtdidong': getFilter(dtdidongString,dtdidongCondition)},
                    {'dtcoquan': getFilter(dtcoquanString,dtcoquanCondition)},
                    {'loaitiemnang': getFilter(loaitiemnangString,loaitiemnangCondition)},
                    {'the': getFilter(theString,theCondition)},
                    {'nguongoc': getFilter(nguongocString,nguongocCondition)},
                    {'zalo': getFilter(zaloString,zaloCondition)},
                    {'emailcanhan': getFilter(emailcanhanString,emailcanhanCondition)},
                    {'emailcoquan': getFilter(emailcoquanString,emailcoquanCondition)},
                    {'tochuc': getFilter(tochucString,tochucCondition)},
                    {'masothue': getFilter(masothueString,masothueCondition)},
                    {'taikhoannganhang': getFilter(taikhoannganhangString,taikhoannganhangCondition)},
                    {'motainganhang': getFilter(motainganhangString,motainganhangCondition)},
                    {'ngaythanhlap': getFilter(ngaythanhlapString,ngaythanhlapCondition)},
                    {'loaihinh': getFilter(loaihinhString,loaihinhCondition)},
                    {'linhvuc': getFilter(linhvucString,linhvucCondition)},
                    {'nganhnghe': getFilter(nganhngheString,nganhngheCondition)},
                    {'doanhthu': getFilter(doanhthuString,doanhthuCondition)},
                    {'quocgia': getFilter(quocgiaString,quocgiaCondition)},
                    {'tinhthanhpho': getFilter(tinhthanhphoString,tinhthanhphoCondition)},
                    {'quanhuyen': getFilter(quanhuyenString,quanhuyenCondition)},
                    {'phuongxa': getFilter(phuongxaString,phuongxaCondition)},
                    {'sonha': getFilter(sonhaString,sonhaCondition)},
                    {'mota': getFilter(motaString,motaCondition)},
                    {'dungchung': getFilter(dungchungString,dungchungCondition)},
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
    typeof req.file !== 'undefined' ? anhValue = req.file.filename : anhValue = ''
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
        the: req.body.the,
        dungchung: req.body.dungChung,
        history: req.body.history,

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
        the: req.body.the,
        dungchung: req.body.dungChung,
        history: req.body.history,

    }


    try{


        
        const editCustomerInfo = await customerInfo.updateOne({_id: ID},newValues)

        const anhCu = req.body.anhCuValue
        if(anhCu){
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
        }
        


        res.status(201).json(editCustomerInfo);
    }
    catch (error){
        res.status(409).json({message: error.message})
    }
}


export default router;