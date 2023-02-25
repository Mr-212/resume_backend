import React from "react";
import { combineReducers } from '@reduxjs/toolkit';
import educationSlice  from "../components/Build/reducers/educationReducer";



export const rootReducer = combineReducers({
    educationSlice,
});


export type RootState = ReturnType<typeof rootReducer>;