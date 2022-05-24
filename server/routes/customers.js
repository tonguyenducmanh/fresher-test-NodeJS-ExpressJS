import express from 'express'

import { getCustomer, countCustomer , createCustomer, findCustomer} from '../controllers/customers.js'

const router = express.Router()

router.get('/', getCustomer)
router.get('/find',findCustomer)
router.get('/count', countCustomer)
router.post('/', createCustomer)

export default router