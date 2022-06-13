import express from 'express';

import { getFilter, createFilter, deleteFilter } from '../controllers/filters.js';

const router = express.Router()

router.get('/', getFilter)
router.get('/delete', deleteFilter)
router.post('/', createFilter)

export default router