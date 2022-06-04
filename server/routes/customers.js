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

import { getCustomer, countCustomer , createCustomer, findCustomer, deleteCustomer, editCustomer} from '../controllers/customers.js'

const router = express.Router()

router.get('/', getCustomer)
router.get('/find',findCustomer)
router.get('/delete',deleteCustomer)
router.get('/count', countCustomer)
router.post('/', upload.single('anhValue') , createCustomer)
router.put('/edit', upload.single('anhValue') , editCustomer)

export default router