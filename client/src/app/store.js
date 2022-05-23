import { configureStore } from '@reduxjs/toolkit'
import {paginationReducer, customersReducer, countReducer} from '../features/customers/customersSlice'

export default configureStore({
    reducer: {
      pagination: paginationReducer,
      customers: customersReducer,
      count: countReducer
    }
  })