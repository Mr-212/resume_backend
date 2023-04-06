import React from "react";
import { combineReducers } from '@reduxjs/toolkit';
import educationSlice  from "../components/Build/reducers/educationReducer";
import profileReducer from "../components/Build/reducers/profileReducer";
import skillReducer from "../components/Build/reducers/skillReducer";
import experienceReducer from "../components/Build/reducers/experienceReducer";
import resumeReducer from "../components/resumeIndex/reducers/resumeReducer";



export const rootReducer = combineReducers({
    resume: resumeReducer,
    education: educationSlice,
    profile: profileReducer,
    skills: skillReducer,
    experience: experienceReducer,
});


export type RootState = ReturnType<typeof rootReducer>;