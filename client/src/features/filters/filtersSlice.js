import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import filterAPI from '../../api/filtersAPI'

export const fetchFiltersList = createAsyncThunk('filters/fetchFiltersList', async()=>{
    const respone = await filterAPI.get('/')
    return respone.data
})

export const filtersSlice = createSlice ({
    name: 'filters',
    initialState:{
        filters:[],
        status: 'idle',
        error: null
    },
    reducers:{

    },
    extraReducers(builder){
        builder
            .addCase(fetchFiltersList.pending, (state, action) =>{
                state.status = 'loading'
            })
            .addCase(fetchFiltersList.fulfilled, (state, action)=>{
                state.status = 'succeeded'
                state.filters = action.payload
            })
            .addCase(fetchFiltersList.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const deleteFilters = createAsyncThunk('filters/deleteFilters', async (path) => {
    const respone = await filterAPI.get(`/delete${path}`)
    return respone.data
})

export const deleteFiltersSlice = createSlice ({
    name:'deletedFilter',
    initialState:{
        deleteFilters: [],
        status: 'idle',
        error: null
    },
    reducers:{

    },
    extraReducers(builder){
        builder
            .addCase(deleteFilters.pending, (state, action) =>{
                state.status = 'loading'
            })
            .addCase(deleteFilters.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.deleteFilters = action.payload
            })
            .addCase(deleteFilters.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const deleteReducer = deleteFiltersSlice.reducer
export const filterReducer = filtersSlice.reducer