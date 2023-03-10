import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/root";
import { AnyAction } from 'redux'
// import { profile_id } from "./profileReducer";
import { resumeState } from "./profileReducer";

export const educationSlice = createSlice({
    name: 'education',
    initialState: resumeState.education,
    reducers : {
        add:(state, action: PayloadAction<object>) => {
             state.unshift(action.payload);
        },

        remove: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },

        getRecord: (state, action: PayloadAction<number>) => {
    
        }
    },

 });
 export const { add, remove , getRecord} = educationSlice.actions;
 export default educationSlice.reducer; 




