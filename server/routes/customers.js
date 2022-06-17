import express from 'express'
import multer from 'multer'

const fileStorageEngine = multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null, './uploads')
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + '--' + file.originalname)
    }
})
const upload = multer({storage: fileStorageEngine})

import { getCustomer, countCustomer ,lastCustomer, createCustomer, findCustomer, checkCustomerExist , deleteCustomer, editCustomer} from '../controllers/customers.js'

const router = express.Router()

//phải luôn có tham số middleware ở giữa nếu dùng formdata
router.post('/all', upload.single('anhValue'), getCustomer)
router.get('/last', lastCustomer)
router.post('/find', upload.single('anhValue'),findCustomer)
router.get('/check',checkCustomerExist)
router.post('/delete', upload.single('anhValue'),deleteCustomer)
router.post('/count', upload.single('anhValue'), countCustomer)
router.post('/', upload.single('anhValue') , createCustomer)
router.put('/edit', upload.single('anhValue') , editCustomer)

export default router