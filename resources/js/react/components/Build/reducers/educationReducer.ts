import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import { AnyAction } from 'redux'
import { profile_id } from "./profileReducer";
import { resumeState } from "./profileReducer";
import { getEducationIndex, getEducationIndexURL, postEducationURL, URL_EDUCATION_CREATE, URL_EDUCATION_GET, URL_PROFILE_CREATE } from "../../../constants/ResumeUrls";
import axios from "axios";
import { update } from "./skillReducer";

export const educationSlice = createSlice({
    name: 'education',
    initialState: resumeState.education,
    reducers : {
        add:(state, action: PayloadAction<object>) => {
             state.unshift(action.payload);
        },

        updateRecord: (state, action: PayloadAction<object>) => {
            const { index, data } = action.payload;
            // const item = state.filter((item,k) => { index == k ? item = data});
            state[index] = data;
             
        },

        remove: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },
        

        getRecord: (state, action: PayloadAction<number>) => {
    
        }
    },
    extraReducers (builder){
        builder.addCase(postEducation.fulfilled, (state, action)=>{
            const {index, data} = action.payload;
            // [...state.slice(0, index-1), action.payload.data, ...state.slice(index)]
            state[index] = data;
        });

        builder.addCase(getEducation.fulfilled, (state, action)=>{
            // state = [...state, ...action.payload];
            state.unshift(...action.payload);
        });

    }


 });
 export const { add, updateRecord , remove, getRecord} = educationSlice.actions;
 export default educationSlice.reducer; 


 export const postEducation = createAsyncThunk(
    'education/add',
    async (educationObject) => {
        const {index} = educationObject;
        educationObject['profile_id'] = profile_id;
        // console.log(index, educationObject)
        const response = await axios.post(postEducationURL(profile_id), educationObject);
        // return {data: response.data};
        return {index: index, data: response.data};
    }
 );

 export const getEducation = createAsyncThunk(
    'education/get',
    async() => {
        const response = await axios.get(getEducationIndexURL(profile_id));
        // console.log(response.data.prifile)
        return response.data;
    }
 )


