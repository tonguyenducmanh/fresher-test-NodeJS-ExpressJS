import { createSlice } from "@reduxjs/toolkit";
import { DiaChi } from "../../components/CreateBody/AutoComplete/Array/DiaChi";

export const locationSlice = createSlice({
    name: 'location',
    initialState:{
        quocGia: '',
        tinhThanh: 0,
        quanHuyen: 0,
        phuongXa: 0,
        soNha:'',
    },
    reducers:{
        quocGia:(state,actions)=>{
            state.quocGia = actions.payload
        },
        addTinhThanh: (state, action) =>{
            state.tinhThanh = DiaChi.map(e => e.name).indexOf(action.payload)
        },
        addQuanHuyen: (state, action) =>{
            if(DiaChi[state.tinhThanh]){
                state.quanHuyen = DiaChi[state.tinhThanh].districts.map(e => e.name).indexOf(action.payload)
            }
        },
        addPhuongXa: (state, action) =>{
            if(DiaChi[state.tinhThanh]){
                if(DiaChi[state.tinhThanh].districts[state.quanHuyen]){
                    state.phuongXa = DiaChi[state.tinhThanh].districts[state.quanHuyen].wards.map(e => e.name).indexOf(action.payload)
                }
            }
        },
        addSoNha: (state, action) => {
            state.soNha = action.payload
        },
        resetLocation: (state) =>{
            state.quocGia = ''
            state.tinhThanh = 0
            state.quanHuyen = 0
            state.phuongXa = 0
            state.soNha = ''
        }
    }
})


export const {addTinhThanh, addQuanHuyen, addPhuongXa, addSoNha, quocGia, resetLocation} = locationSlice.actions

export const locationReducer = locationSlice.reducer