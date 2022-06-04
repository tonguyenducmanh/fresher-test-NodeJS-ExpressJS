import { configureStore } from '@reduxjs/toolkit'
import {paginationReducer, customersReducer, countReducer, findReducer, deleteRducer, createReducer} from '../features/customers/customersSlice'
import { locationReducer } from '../features/location/locationSlice'
import { tempCustomerReducer } from '../features/customers/customersSlice'
export default configureStore({
    reducer: {
      pagination: paginationReducer,
      customers: customersReducer,
      count: countReducer,
      find : findReducer,
      delete: deleteRducer,
      location: locationReducer,
      create: createReducer,
      tempCustomer: tempCustomerReducer
    }
  })