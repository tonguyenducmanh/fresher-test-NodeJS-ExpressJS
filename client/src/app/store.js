import { configureStore } from '@reduxjs/toolkit'
import {paginationReducer, customersReducer, countReducer, findReducer} from '../features/customers/customersSlice'

export default configureStore({
    reducer: {
      pagination: paginationReducer,
      customers: customersReducer,
      count: countReducer,
      find : findReducer
    }
  })