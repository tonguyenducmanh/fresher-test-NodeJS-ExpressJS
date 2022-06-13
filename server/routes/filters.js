import express from 'express';

import { getFilter, createFilter, deleteFilter, editFilter } from '../controllers/filters.js';

const router = express.Router()

router.get('/', getFilter)
router.get('/delete', deleteFilter)
router.post('/', createFilter)
router.put('/edit', editFilter)

export default router