import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerAPI from '../../api/customerAPI'

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        limit: 10,
        startIndex: 0,
        count: 0,
        status: 'idle',
        error: null
    },
    reducers:{
        limitTen: (state) => {
            if(state.count < 10){
                state.limit = state.count
            } else{
                state.limit = 10
            }
        },
        limitTwenty: (state) => {
            if(state.count < 20){
                state.limit = state.count
            } else{
                state.limit = 20
            }
            if(state.startIndex + state.limit > state.count){
                state.startIndex = state.count - state.limit
            }
        },
        limitFifty: (state) => {
            if(state.count < 50){
                state.limit = state.count
            } else{
                state.limit = 50
            }
            if(state.startIndex + state.limit > state.count){
                state.startIndex = state.count - state.limit
            }
        },
        limitOneHundred: (state) => {
            if(state.count < 100){
                state.limit = state.count
            } else{
                state.limit = 100
            }
            if(state.startIndex + state.limit > state.count){
                state.startIndex = state.count - state.limit
            }
        },
        firstIndex: (state) => {
            state.startIndex = 0
        },
        lastIndex: (state) =>{
            if(state.count < state.limit){
                state.startIndex = 0
            }else{
                state.startIndex = state.count - state.limit
            }
        },
        nextPagination: (state) => {
            if(state.startIndex < state.count - state.limit *2){
                state.startIndex += state.limit
            } else{
                state.startIndex = state.count - state.limit
            }
        },
        previousPagination: (state) => {
            if(state.startIndex >state.limit){
                state.startIndex -= state.limit
            }else{
                state.startIndex = 0
            }
        },
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
    
export const fetchCustomersList = createAsyncThunk('customers/fetchCustomersList', async (path) =>{
    const respone = await customerAPI.get(`/${path}`)
    return respone.data
})

export const customersSlice = createSlice ({
    name: 'customers',
    initialState:{
        customers: [],
        searchString : '',
        customerFilter : {
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
        limit : 0,
        startIndex : 0,
        status: 'idle',
        error: null
},
reducers:{
    addSearchString: (state, action) => {
        state.searchString = action.payload
    },
    addLimit: (state, action) => {
        state.limit = action.payload
    },
    addStartIndex: (state, action) => {
        state.startIndex = action.payload
    },
    addCustomerFilter: (state,action) =>{
        state.customerFilter = action.payload
    },
    clearCustomerFilter: (state) =>{
        state.customerFilter= {
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
        }
    }
},
extraReducers(builder){
    builder
        .addCase(fetchCustomersList.pending, (state, action) =>{
            state.status = 'loading'
        })
        .addCase(fetchCustomersList.fulfilled, (state, action) =>{
            state.status = 'succeeded'
            state.customers = action.payload
        })
        .addCase(fetchCustomersList.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})
    
    
export const fetchCustomersCount = createAsyncThunk('customers/fetchCustomersCount', async (path) =>{
    const respone = await customerAPI.get(`/count${path}`)
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

    
export const fetchLastID = createAsyncThunk('customers/fetchLastID', async () =>{
    const respone = await customerAPI.get('/last')
    return respone.data
})


export const lastIDSlice = createSlice({
    name: 'lastID',
    initialState:{
        ID: '',
        status: 'idle',
        error: null
    },
    reducers: {

    },
    extraReducers(builder){
        builder
            .addCase(fetchLastID.pending, (state, action) =>{
                state.status = 'loading'
            }) 
            .addCase(fetchLastID.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.ID = action.payload
            })
            .addCase(fetchLastID.rejected, (state, action) =>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const fetchCheckCustomerExist = createAsyncThunk('customers/checkCustomerExist', async (path) =>{
    const respone = await customerAPI.get(`/check${path}`)
    return respone.data
})


export const checkCustomer = createSlice({
    name: 'check',
    initialState:{
        check: [],
        status: 'idle',
        error: null
    },
    reducers: {

    },
    extraReducers(builder){
        builder
            .addCase(fetchCheckCustomerExist.pending, (state, action) =>{
                state.status = 'loading'
            }) 
            .addCase(fetchCheckCustomerExist.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.check = action.payload
            })
            .addCase(fetchCheckCustomerExist.rejected, (state, action) =>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const fetchCustomersFind = createAsyncThunk('customers/fetchCustomersFind', async (path) => {
    const respone = await customerAPI.get(`/find${path}`)
    return respone.data
})

export const findCustomersSlice = createSlice ({
    name:'find',
    initialState:{
        findCustomers: [],
        status: 'idle',
        error: null
    },
    reducers:{

    },
    extraReducers(builder){
        builder
            .addCase(fetchCustomersFind.pending, (state, action) =>{
                state.status = 'loading'
            })
            .addCase(fetchCustomersFind.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.findCustomers = action.payload
            })
            .addCase(fetchCustomersFind.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const deleteCustomers = createAsyncThunk('customers/deleteCustomer', async (path) => {
    const respone = await customerAPI.get(`/delete${path}`)
    return respone.data
})

export const deleteCustomersSlice = createSlice ({
    name:'delete',
    initialState:{
        deleteCustomers: [],
        status: 'idle',
        error: null
    },
    reducers:{

    },
    extraReducers(builder){
        builder
            .addCase(deleteCustomers.pending, (state, action) =>{
                state.status = 'loading'
            })
            .addCase(deleteCustomers.fulfilled, (state, action) =>{
                state.status = 'succeeded'
                state.deleteCustomers = action.payload
            })
            .addCase(deleteCustomers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const createCustomer = createAsyncThunk('customers/createCustomer', async (path) => {
    const respone = await customerAPI.post('',path,  {validateStatus() { return true } } )
    return respone.data

    //{validateStatus() { return true } } phải có dòng này
})

export const createCustomerSlice = createSlice({
    name: 'create',
    initialState:{
        createCustomer: {
            _id: '',
            anh: '',
            xungho: '',
            hovadem: '',
            ten: '',
            phongban: '',
            chucdanh: '',
            dtdidong: '',
            dtcoquan: '',
            dtkhac: '',
            loaitiemnang: '',
            the: '',
            nguongoc: '',
            khonggoidien: '',
            khongguiemail: '',
            zalo: '',
            emailcanhan: '',
            emailcoquan: '',
            tochuc: '',
            masothue: '',
            taikhoannganhang: '',
            motainganhang: '',
            ngaythanhlap: '',
            loaihinh: '',
            linhvuc: '',
            nganhnghe: '',
            doanhthu: '',
            quocgia: '',
            tinhthanhpho: '',
            quanhuyen: '',
            phuongxa: '',
            sonha: '',
            mavung: '',
            mota: '',
            dungchung: '',
        },
        status: 'idle',
        error: null
    }
    , reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(createCustomer.pending, (state, action) =>{
            state.status = 'loading'
        })
        .addCase(createCustomer.fulfilled, (state, action) =>{
            state.status = 'succeeded'
            state.createCustomer._id = action.payload
        })
        .addCase(createCustomer.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const editCustomer = createAsyncThunk('customers/editCustomer', async (path) => {
    const respone = await customerAPI.put('/edit',path,  {validateStatus() { return true } } )
    return respone.data

    //{validateStatus() { return true } } phải có dòng này
})


export const editCustomerSlice = createSlice({
    name: 'edit',
    initialState:{
        createCustomer: {
            _id: '',
            anh: '',
            xungho: '',
            hovadem: '',
            ten: '',
            phongban: '',
            chucdanh: '',
            dtdidong: '',
            dtcoquan: '',
            dtkhac: '',
            loaitiemnang: '',
            the: '',
            nguongoc: '',
            khonggoidien: '',
            khongguiemail: '',
            zalo: '',
            emailcanhan: '',
            emailcoquan: '',
            tochuc: '',
            masothue: '',
            taikhoannganhang: '',
            motainganhang: '',
            ngaythanhlap: '',
            loaihinh: '',
            linhvuc: '',
            nganhnghe: '',
            doanhthu: '',
            quocgia: '',
            tinhthanhpho: '',
            quanhuyen: '',
            phuongxa: '',
            sonha: '',
            mavung: '',
            mota: '',
            dungchung: '',
        },
        status: 'idle',
        error: null
    }
    , reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(editCustomer.pending, (state, action) =>{
            state.status = 'loading'
        })
        .addCase(editCustomer.fulfilled, (state, action) =>{
            state.status = 'succeeded'
            state.editCustomer._id = action.payload
        })
        .addCase(editCustomer.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const tempCustomerSlice = createSlice({
    name: 'tempCustomer',
    initialState:{
        editCustomer:{}
    },
    reducers:{
        addTempCustomer: (state,action) => {
            state.editCustomer = action.payload
        },
        removeTempCustomer: (state) =>{
            state.editCustomer = {}
        }
    }
})

export const { nextPagination, previousPagination, limitTen, limitFifty, limitOneHundred, limitTwenty,firstIndex , lastIndex } = paginationSlice.actions
export const paginationReducer = paginationSlice.reducer
export const { addSearchString, addLimit, addStartIndex, addCustomerFilter, clearCustomerFilter} = customersSlice.actions
export const customersReducer = customersSlice.reducer
export const countReducer = countSlice.reducer
export const findReducer = findCustomersSlice.reducer
export const deleteRducer = deleteCustomersSlice.reducer
export const createReducer = createCustomerSlice.reducer
export const editReducer = editCustomerSlice.reducer
export const { addTempCustomer, removeTempCustomer } = tempCustomerSlice.actions
export const tempCustomerReducer = tempCustomerSlice.reducer
export const checkCustomerReducer = checkCustomer.reducer
export const lastIDReducer = lastIDSlice.reducer