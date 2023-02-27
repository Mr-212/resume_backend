import React from "react";
import { combineReducers } from '@reduxjs/toolkit';
import educationSlice  from "../components/Build/reducers/educationReducer";
import profileReducer from "../components/Build/reducers/profileReducer";



export const rootReducer = combineReducers({
    educationSlice,
    profile: profileReducer,
});


export type RootState = ReturnType<typeof rootReducer>;