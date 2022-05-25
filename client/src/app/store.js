import { configureStore } from '@reduxjs/toolkit'
import {paginationReducer, customersReducer, countReducer, findReducer, deleteRducer} from '../features/customers/customersSlice'

export default configureStore({
    reducer: {
      pagination: paginationReducer,
      customers: customersReducer,
      count: countReducer,
      find : findReducer,
      delete: deleteRducer
    }
  })