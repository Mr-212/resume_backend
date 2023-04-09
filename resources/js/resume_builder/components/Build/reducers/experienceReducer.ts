import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  getExperienceIndexURL, postExperienceURL, URL_EXPERIENCE_CREATE, URL_EXPERIENCE_DELETE, URL_EXPERIENCE_GET } from "../../../constants/ResumeUrls";
import axios from "axios";


export const experienceSlice = createSlice({
    name: 'experience',
    initialState: {experience:[], hide: true},
    reducers : {
        add:(state, action: PayloadAction<object>) => {
            state.experience.unshift(action.payload);
            // return [(action.payload), ...state];
        },

        updateRecord: (state, action: PayloadAction<object>) => {
            const { index, experience } = action.payload;
            // const item = state.filter((item,k) => { index == k ? item = data});
            state.experience[index] = experience;
             
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
            const {index, experience} = action.payload;
            state.experience[index] = experience;
        });

        builder.addCase(getExperience.fulfilled, (state, action)=>{
            // console.log(action.payload);
            // state.experience.push(...action.payload?.experiences);
            state.experience = action.payload?.experiences;

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
        const {index, profile_id} = experience;
        // console.log(index, experience)
        const response = await axios.post(postExperienceURL(profile_id), experience);
        return {index: index, experience: response.data?.experience};
    }
 );

 export const getExperience = createAsyncThunk(
    'experience/get',
    async(profile_id: string) => {
        const response = await axios.get(getExperienceIndexURL(profile_id));
        return response.data;
    }
 )
 export const deleteExperience = createAsyncThunk(
    'experience/delete',
    async(id: string) => {
        if(id){
            const response = await axios.delete(URL_EXPERIENCE_DELETE + id);
            return response.data;
        }
    }
 )


