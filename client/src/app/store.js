import { configureStore } from '@reduxjs/toolkit'
import { locationReducer } from '../features/location/locationSlice'
import {paginationReducer, customersReducer, countReducer, 
  findReducer, deleteRducer, createReducer,
  tempCustomerReducer, checkCustomerReducer, lastIDReducer
} from '../features/customers/customersSlice'

import { historyReducer } from '../features/history/historySlice'
import { filterReducer,deleteFilterReducer,editFilterReducer, createFilterReducer } from '../features/filters/filtersSlice'

export default configureStore({
    reducer: {
      pagination: paginationReducer,
      customers: customersReducer,
      count: countReducer,
      find : findReducer,
      delete: deleteRducer,
      location: locationReducer,
      create: createReducer,
      tempCustomer: tempCustomerReducer,
      check: checkCustomerReducer,
      lastID: lastIDReducer,
      filters: filterReducer,
      deleteFilter: deleteFilterReducer,
      eidtFilter:editFilterReducer,
      createFilter: createFilterReducer,
      history: historyReducer,
    }
  })