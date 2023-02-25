import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/root";
import React from "react";
import { AnyAction } from 'redux'

 export const educationSlice = createSlice =({
    name: 'education',
    initialState : [],

    reducers : {
        addEducation : (state:[], action: PayloadAction<object>) => {
            [...state, action.payload]

        }
    },

 });


 export const { addEducation } = educationSlice.actions;
 export default educationSlice.reducers; 




