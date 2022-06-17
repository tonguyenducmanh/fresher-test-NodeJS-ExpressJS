import { createSlice} from "@reduxjs/toolkit";

export const historySlice = createSlice ({
    name: 'history',
    initialState:{
        history:[],
        
    },
    reducers:{
        changeHistory: (state, action) => {
            state.history = action.payload
        },
    },
})

export const { changeHistory} = historySlice.actions

export const historyReducer = historySlice.reducer