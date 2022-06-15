import express from 'express'
import customerFilter from '../models/customerFilter.js'

const router = express.Router()

export const getFilter = async (req, res) =>{
    try{
        const customerFilters = await customerFilter.find()
        res.status(200).json(customerFilters)
    } catch (error){
        res.status(404).json({message: error.message})
    }
}

export const deleteFilter = async (req, res) => {
    try{
        //lấy mảng được trả về từ bên frontend

        const deleteArray = req.query.deleteArray.split(',')

        const customerFilters =  await customerFilter.deleteMany({ _id:{$in: deleteArray} });

        res.status(200).json(customerFilters)
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

export const editFilter = async (req,res) =>{
    const ID = req.body.id
    const newName = req.body.newName
    try {
        const editFilter = await customerFilter.updateOne({_id:ID}, 
            {$set: {name: newName}},
        )
        res.status(201).json(editFilter)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const createFilter = async (req,res) =>{
    const post = {
        name : req.body.name,
        filter : {
            xunghoString: req.body.xunghoString,
            xunghoCondition: req.body.xunghoCondition,
            hovademString: req.body.hovademString,
            hovademCondition: req.body.hovademCondition,
            tenString: req.body.tenString,
            tenCondition: req.body.tenCondition,
            phongbanString: req.body.phongbanString,
            phongbanCondition: req.body.phongbanCondition,
            chucdanhString: req.body.chucdanhString,
            chucdanhCondition: req.body.chucdanhCondition,
            dtdidongString: req.body.dtdidongString,
            dtdidongCondition: req.body.dtdidongCondition,
            dtcoquanString: req.body.dtcoquanString,
            dtcoquanCondition: req.body.dtcoquanCondition,
            loaitiemnangString: req.body.loaitiemnangString,
            loaitiemnangCondition: req.body.loaitiemnangCondition,
            theString: req.body.theString,
            theCondition: req.body.theCondition,
            nguongocString: req.body.nguongocString,
            nguongocCondition:req.body.nguongocCondition,
            zaloString: req.body.zaloString,
            zaloCondition: req.body.zaloCondition,
            emailcanhanString: req.body.emailcanhanString,
            emailcanhanCondition: req.body.emailcanhanCondition,
            emailcoquanString: req.body.emailcoquanString,
            emailcoquanCondition: req.body.emailcoquanCondition,
            tochucString: req.body.tochucString,
            tochucCondition: req.body.tochucCondition,
            masothueString: req.body.masothueString,
            masothueCondition: req.body.masothueCondition,
            taikhoannganhangString: req.body.taikhoannganhangString,
            taikhoannganhangCondition: req.body.taikhoannganhangCondition,
            motainganhangString: req.body.motainganhangString,
            motainganhangCondition: req.body.motainganhangCondition,
            ngaythanhlapString: req.body.ngaythanhlapString,
            ngaythanhlapCondition: req.body.ngaythanhlapCondition,
            loaihinhString: req.body.loaihinhString,
            loaihinhCondition: req.body.loaihinhCondition,
            linhvucString: req.body.linhvucString,
            linhvucCondition: req.body.linhvucCondition,
            nganhngheString: req.body.nganhngheString,
            nganhngheCondition: req.body.nganhngheCondition,
            doanhthuString: req.body.doanhthuString,
            doanhthuCondition: req.body.doanhthuCondition,
            quocgiaString: req.body.quocgiaString,
            quocgiaCondition: req.body.quocgiaCondition,
            tinhthanhphoString: req.body.tinhthanhphoString,
            tinhthanhphoCondition: req.body.tinhthanhphoCondition,
            quanhuyenString: req.body.quanhuyenString,
            quanhuyenCondition: req.body.quanhuyenCondition,
            phuongxaString: req.body.phuongxaString,
            phuongxaCondition: req.body.phuongxaCondition,
            sonhaString: req.body.sonhaString,
            sonhaCondition: req.body.sonhaCondition,
            motaString: req.body.motaString,
            motaCondition:req.body.motaCondition,
            dungchungString: req.body.dungchungString,
            dungchungCondition: req.body.dungchungCondition,
        },
    }

    const newCustomerFilter = new customerFilter({...post})
    try {
        await newCustomerFilter.save()
        res.status(201).json(newCustomerFilter)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export default router