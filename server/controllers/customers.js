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

export const countCustomer = async (req,res) => {
    try{
        const customerInfos = await customerInfo.count()

        res.status(200).json(customerInfos)
    } catch (error) {
        res.status(404).json( { message: error.message })
    }
}

export const createCustomer = async (req, res) => {
    const post = req.body;
    const newCustomerInfo = new customerInfo({...post})

    try{
        await newCustomerInfo.save()

        res.status(201).json(newCustomerInfo);
    } catch (error){
        res.status(409).json({message: error.message})
    }
}

export default router;