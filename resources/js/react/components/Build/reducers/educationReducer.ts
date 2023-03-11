import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import { AnyAction } from 'redux'
import { profile_id } from "./profileReducer";
import { resumeState } from "./profileReducer";
import { getEducationIndex, URL_EDUCATION_CREATE, URL_EDUCATION_GET, URL_PROFILE_CREATE } from "../../../constants/ResumeUrls";
import axios from "axios";

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
    extraReducers (builder){
        builder.addCase(postEducation.fulfilled, (state, action)=>{
            state.unshift(action.payload);
        });

        builder.addCase(getEducation.fulfilled, (state, action)=>{
            // state = [...state, ...action.payload];
            state.unshift(...action.payload);
        });

    }


 });
 export const { add, remove , getRecord} = educationSlice.actions;
 export default educationSlice.reducer; 


 export const postEducation = createAsyncThunk(
    'education/add',
    async initialProfile => {
        initialProfile['profile_id'] = profile_id;
        const response = await axios.post(URL_EDUCATION_CREATE,  initialProfile);
        return response.data;
    }
 );

 export const getEducation = createAsyncThunk(
    'education/get',
    async() => {
        const response = await axios.get(getEducationIndex(profile_id));
        // console.log(response.data.prifile)
        return response.data;
    }
 )




