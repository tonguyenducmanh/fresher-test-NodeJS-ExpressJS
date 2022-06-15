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

export const editFilter = createAsyncThunk('filters/editFilters', async (data) => {
    const respone = await filterAPI.put(`/edit`,data,{validateStatus() { return true } })
    return respone.data
})

export const editFiltersSlice = createSlice ({
    name:'editFilter',
    initialState:{
        filter:'',
        status: 'idle',
        error: null
    },
    reducers:{

    },
    extraReducers(builder){
        builder
            .addCase(editFilter.pending, (state, action) =>{
                state.status = 'loading'
            })
            .addCase(editFilter.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.filter = action.payload

            })
            .addCase(editFilter.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const createFilter = createAsyncThunk('filters/createFilter', async (path) => {
    const respone = await filterAPI.post('',path,  {validateStatus() { return true } } )
    return respone.data
})

export const createFilterSlice = createSlice({
    name: 'createFilter',
    initialState:{
        createFilter:{
            name:'',
            xunghoString: '',
            xunghoCondition: '',
            hovademString: '',
            hovademCondition: '',
            tenString: '',
            tenCondition: '',
            phongbanString: '',
            phongbanCondition: '',
            chucdanhString: '',
            chucdanhCondition: '',
            dtdidongString: '',
            dtdidongCondition: '',
            dtcoquanString: '',
            dtcoquanCondition: '',
            loaitiemnangString: '',
            loaitiemnangCondition: '',
            theString: '',
            theCondition: '',
            nguongocString: '',
            nguongocCondition:'',
            zaloString: '',
            zaloCondition: '',
            emailcanhanString: '',
            emailcanhanCondition: '',
            emailcoquanString: '',
            emailcoquanCondition: '',
            tochucString: '',
            tochucCondition: '',
            masothueString: '',
            masothueCondition: '',
            taikhoannganhangString: '',
            taikhoannganhangCondition: '',
            motainganhangString: '',
            motainganhangCondition: '',
            ngaythanhlapString: '',
            ngaythanhlapCondition: '',
            loaihinhString: '',
            loaihinhCondition: '',
            linhvucString: '',
            linhvucCondition: '',
            nganhngheString: '',
            nganhngheCondition: '',
            doanhthuString: '',
            doanhthuCondition: '',
            quocgiaString: '',
            quocgiaCondition: '',
            tinhthanhphoString: '',
            tinhthanhphoCondition: '',
            quanhuyenString: '',
            quanhuyenCondition: '',
            phuongxaString: '',
            phuongxaCondition: '',
            sonhaString: '',
            sonhaCondition: '',
            motaString: '',
            motaCondition:'',
            dungchungString: '',
            dungchungCondition: '',
        },
        status: 'idle',
        error: null
    }
    , reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(createFilter.pending, (state, action) =>{
            state.status = 'loading'
        })
        .addCase(createFilter.fulfilled, (state, action) =>{
            state.status = 'succeeded'
            state.createFilter._id = action.payload
        })
        .addCase(createFilter.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const createFilterReducer = createFilterSlice.reducer
export const editFilterReducer = editFiltersSlice.reducer
export const deleteFilterReducer = deleteFiltersSlice.reducer
export const filterReducer = filtersSlice.reducer