import React from "react";
import { combineReducers } from '@reduxjs/toolkit';
import educationSlice  from "../components/Build/reducers/educationReducer";
import profileReducer from "../components/Build/reducers/profileReducer";
import skillReducer from "../components/Build/reducers/skillReducer";



export const rootReducer = combineReducers({
    education: educationSlice,
    profile: profileReducer,
    skills: skillReducer,
});


export type RootState = ReturnType<typeof rootReducer>;