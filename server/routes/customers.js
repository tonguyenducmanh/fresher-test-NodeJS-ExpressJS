import express from 'express'

import { getCustomer, countCustomer , createCustomer} from '../controllers/customers.js'

const router = express.Router()

router.get('/', getCustomer)
router.get('/count', countCustomer)
router.post('/', createCustomer)

export default router