import React from "react";
import { combineReducers } from '@reduxjs/toolkit';
import educationReducer  from "../components/Build/reducers/educationReducer";



export const rootReducer = combineReducers({
    education: educationReducer,
    
});


export type RootState = ReturnType<typeof rootReducer>;