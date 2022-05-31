import express from 'express'

import customerInfo from '../models/customerInfo.js'

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
    const anhValue = req.file

    const post = {
        _id: '123',
        anhValue: anhValue
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