import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/root";
import { AnyAction } from 'redux'

export const resumeSlice = createSlice({
    name: 'education',
    initialState: [],
    reducers : {
        add:(state, action: PayloadAction<object>) => {
             state.unshift(action.payload);
        },

        remove: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },

        getRecord: (state, action: PayloadAction<number>) => {
            //   const r = state.slice(action.payload, action.payload+1);
            //   const r = state.map((val,key )=> {
            //     console.log(key, val)
            //      if(key == action.payload)
            //         return val
            //   });
            //   console.log(r);
        }
    },

 });


 export const { add, remove , getRecord} = resumeSlice.actions;
 export default resumeSlice.reducer; 




