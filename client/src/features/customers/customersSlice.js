import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerAPI from '../../api/customerAPI'

export const fetchCustomersList = createAsyncThunk('customers/fetchCustomersList', async () =>{
    const respone = await customerAPI.get('/')
    return respone.data
})

export const customersSlice = createSlice ({
    name: 'customers',
    initialState:{
        customers: [],
        status: 'idle',
        error: null
    },
    reducers:{
        
    }
    ,
    extraReducers(builder){
        builder
            .addCase(fetchCustomersList.pending, (state, action) =>{
                state.status = 'loading'
            })
            .addCase(fetchCustomersList.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.customers = state.customers.concat(action.payload)
            })
            .addCase(fetchCustomersList.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
        }
    })
    
    
export const fetchCustomersCount = createAsyncThunk('customers/fetchCustomersCount', async () =>{
    const respone = await customerAPI.get('/count')
    return respone.data
})


export const countSlice = createSlice({
    name: 'count',
    initialState:{
        count: '0',
        status: 'idle',
        error: null
    },
    reducers: {

    },
    extraReducers(builder){
        builder
            .addCase(fetchCustomersCount.pending, (state, action) =>{
                state.status = 'loading'
            }) 
            .addCase(fetchCustomersCount.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.count = action.payload
            })
            .addCase(fetchCustomersCount.rejected, (state, action) =>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const customersReducer = customersSlice.reducer
export const countReducer = countSlice.reducer