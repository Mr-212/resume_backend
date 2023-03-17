import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import { AnyAction } from 'redux'
import axios from "axios";
import { Action } from "@remix-run/router";
import { URL_PROFILE_CREATE, URL_PROFILE_GET } from "../../../constants/ResumeUrls";


export const resumeState = {
    
        id: null,
        profile: {},
        education: [],
        skills: [],
   
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState: resumeState,

    reducers : {
        add:(state, action: PayloadAction<object>) => {
             state.profile = action.payload;
        },

        remove: (state, action: PayloadAction<number>) => {
            //state.profile.splice(action.payload, 1);
        },

        getRecord: (state, action: PayloadAction<number>) => {
            //   const r = state.slice(action.payload, action.payload+1);
            //   const r = state.map((val,key )=> {
            //     console.log(key, val)
            //      if(key == action.payload)
            //         return val
            //   });
            //   console.log(r);
        }
    },

    extraReducers (builder){
        builder.addCase(postProfile.fulfilled, (state, action)=>{
            state.profile = action.payload;
        })
        builder.addCase(getProfile.fulfilled, (state, action)=>{
            state.profile = {...state.profile, ...action.payload};
            console.log(action.payload)
        })

    }

 });

//  export const profile = state => state.profile;
//  export const profile_id = state  => state.profile.profile.id ? state.profile.profile.id :"0d8b8b7b-1171-4af1-ada7-b6f4105064cd";
 export const profile_id = "11aa6084-a71c-4602-98db-bc4617704979";
 export const { add, remove , getRecord} = profileSlice.actions;
 export default profileSlice.reducer;



 export const postProfile = createAsyncThunk(
    'profile/add',
    async initialProfile => {
        const response = await axios.post(URL_PROFILE_CREATE, initialProfile);
        return response.data;
    }
 );

//  export const getProfile = (profile: string) => createAsyncThunk(
 export const getProfile = createAsyncThunk(
    'profile/get',
    async (id: string) => {
        id = id ? id: profile_id;
        const response = await axios.get(URL_PROFILE_GET + id );
        // console.log(response.data.prifile)
        return response.data.profile;
    }
 )

 



