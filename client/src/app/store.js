import { configureStore } from '@reduxjs/toolkit'
import {customersReducer, countReducer} from '../features/customers/customersSlice'

export default configureStore({
    reducer: {
      customers: customersReducer,
      count: countReducer
    }
  })