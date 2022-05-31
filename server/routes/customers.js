import express from 'express'
import multer from 'multer'
const upload = multer({dest: 'uploads/'})

import { getCustomer, countCustomer , createCustomer, findCustomer, deleteCustomer} from '../controllers/customers.js'

const router = express.Router()

router.get('/', getCustomer)
router.get('/find',findCustomer)
router.get('/delete',deleteCustomer)
router.get('/count', countCustomer)
router.post('/', upload.single('anhValue') , createCustomer)

export default router