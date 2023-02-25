import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/root";
import { AnyAction } from 'redux'

export const educationSlice = createSlice({
    name: 'education',
    initialState: [],
    reducers : {
        add:(state, action: PayloadAction<object>) => {
             state.unshift(action.payload);
        },

        remove: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        }
    },

 });


 export const { add, remove } = educationSlice.actions;
 export default educationSlice.reducer; 




