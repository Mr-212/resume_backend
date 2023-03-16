import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import { AnyAction } from 'redux'
import { profile_id } from "./profileReducer";
import { resumeState } from "./profileReducer";
import {  getExperienceIndexURL, postExperienceURL, URL_EXPERIENCE_CREATE, URL_EXPERIENCE_DELETE, URL_EXPERIENCE_GET } from "../../../constants/ResumeUrls";
import axios from "axios";
import { update } from "./skillReducer";


export const experienceSlice = createSlice({
    name: 'experience',
    initialState: {experience:[], hide: true},
    reducers : {
        add:(state, action: PayloadAction<object>) => {
            state.experience.unshift(action.payload);
            // return [(action.payload), ...state];
        },

        updateRecord: (state, action: PayloadAction<object>) => {
            const { index, data } = action.payload;
            // const item = state.filter((item,k) => { index == k ? item = data});
            state.experience[index] = data;
             
        },

        remove: (state, action: PayloadAction<number>) => {
            state.experience.splice(action.payload, 1);
        },
        

        getRecord: (state, action: PayloadAction<number>) => {
    
        }, 

        setHide: (state, action: PayloadAction<boolean>)=>{
            state.hide = action.payload;
        }
    },
    extraReducers (builder){
        builder.addCase(postExperience.fulfilled, (state, action)=>{
            const {index, data} = action.payload;
            state.experience[index] = data;
        });

        builder.addCase(getExperience.fulfilled, (state, action)=>{
            state.experience.push(...action.payload);
        });

        builder.addCase(deleteExperience.fulfilled, (state, action)=>{
            console.log(action.payload.status == 200)

        });


    }


 });

 export const experience = state => state.experience;
 export const { add, updateRecord , remove, getRecord, setHide} = experienceSlice.actions;
 export default experienceSlice.reducer; 


 export const postExperience = createAsyncThunk(
    'experience/add',
    async (experience) => {
        const {index} = experience;
        experience['profile_id'] = profile_id;
        console.log(index, experience)
        const response = await axios.post(postExperienceURL(profile_id), experience);
        // // return {data: response.data};
        return {index: index, data: response.data};
    }
 );

 export const getExperience = createAsyncThunk(
    'experience/get',
    async() => {
        const response = await axios.get(getExperienceIndexURL(profile_id));
        return response.data;
    }
 )
 export const deleteExperience = createAsyncThunk(
    'experience/delete',
    async(id: string) => {
        if(id){
            const response = await axios.delete(URL_Experience_DELETE + id);
            // console.log(response.data.prifile)
            return response.data;
        }
    }
 )


