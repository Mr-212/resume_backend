import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAction } from 'redux'
import { profile_id, resumeState } from "./profileReducer";
import { getEducationIndex, getEducationIndexURL, postEducationURL, URL_EDUCATION_CREATE, URL_EDUCATION_DELETE, URL_EDUCATION_GET, URL_PROFILE_CREATE } from "../../../constants/ResumeUrls";
import axios from "axios";
import { update } from "./skillReducer";


export const educationSlice = createSlice({
    name: 'education',
    initialState: {education : resumeState.education, hide: true},
    reducers : {
        add:(state, action: PayloadAction<object>) => {
            state.education.unshift(action.payload);
            // return [(action.payload), ...state];
        },

        updateRecord: (state, action: PayloadAction<object>) => {
            const { index, data } = action.payload;
            // const item = state.filter((item,k) => { index == k ? item = data});
            state.education[index] = data;

        },

        remove: (state, action: PayloadAction<number>) => {
            state.education.splice(action.payload, 1);
        },


        getRecord: (state, action: PayloadAction<number>) => {

        },

        setHide: (state, action: PayloadAction<boolean>)=>{
            state.hide = action.payload;
        },
        resetEducation: (state)=>{
            state.education = [];
        },

        setArray:(state,action: PayloadAction<Array<Object>>) => {
            state.education = action.payload;
        }
    },

    extraReducers (builder){
        builder.addCase(postEducation.fulfilled, (state, action)=>{
            const {index, data} = action.payload;
            // [...state.slice(0, index-1), action.payload.data, ...state.slice(index)]
            state.education[index] = data;
        });

        builder.addCase(getEducation.fulfilled, (state, action)=>{
            //[...state, ...action.payload];
            // console.log(action.payload)
            // state.education.push(...action.payload);
            state.education = action.payload;
            // return action.payload;
        });

        builder.addCase(deleteEducation.fulfilled, (state, action)=>{
            console.log(action.payload.status == 200)
                // getEducation();


        });

        builder.addCase(postSave.fulfilled, (state, action)=>{
            console.log(action.payload.status == 200)
                //state.education =


        });


    }


 });

 export const education = state => state.education;
 export const { add, updateRecord , remove, getRecord, setHide, resetEducation, setArray} = educationSlice.actions;
 export default educationSlice.reducer;


 export const postEducation = createAsyncThunk(
    'education/add',
    async (educationObject) => {
        const {index, profile_id} = educationObject;
        // console.log(index, educationObject)
        const response = await axios.post(postEducationURL(profile_id), educationObject);
        // // return {data: response.data};
        return {index: index, data: response.data};
    }
 );
 export const postSave = createAsyncThunk(
    'education/save',
    async (educationObjectArray) => {
        const { profile_id, educationArrayList} = educationObjectArray;
        // console.log(index, educationObject)
        const url = '/resume/profile/'+profile_id+'/education/save';
        const response = await axios.post(url, educationArrayList);
        // // return {data: response.data};
        return  response.data;
    }
 );

 export const getEducation = createAsyncThunk(
    'education/get',
    async(profile_id: string) => {
        const url = getEducationIndexURL(profile_id);
        console.log(url.toString());
        const response = await axios.get(`${url.toString()}`);
        return response.data;
    }
 )
 export const deleteEducation = createAsyncThunk(
    'education/delete',
    async(id: string) => {
        if(id){
            const response = await axios.delete(URL_EDUCATION_DELETE + id);
            // console.log(response.data.prifile)
            return response.data;
        }
    }
 )


