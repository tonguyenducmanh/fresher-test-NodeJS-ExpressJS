import express from 'express'

import { getCustomer, countCustomer , createCustomer, findCustomer, deleteCustomer} from '../controllers/customers.js'

const router = express.Router()

router.get('/', getCustomer)
router.get('/find',findCustomer)
router.get('/delete',deleteCustomer)
router.get('/count', countCustomer)
router.post('/', createCustomer)

export default router