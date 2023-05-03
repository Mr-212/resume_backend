import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import { AnyAction } from 'redux'
import axios from "axios";
import { Action } from "@remix-run/router";
import { URL_PROFILE_CREATE, URL_PROFILE_GET } from "../../../constants/ResumeUrls";


export const resumeState = {
    
        profile_id: "",
        profile: {},
        profile_links:[],
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
        setProfileId:(state, action: PayloadAction<string>) => {
             state.profile_id = action.payload;
        },

        remove: (state, action: PayloadAction<number>) => {
            //state.profile.splice(action.payload, 1);
        },

        resetProfile: (state) => {
            state.profile = {},
            state.profile_id = '';
            console.log('here');
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
            state.profile =  action.payload;
            console.log(action.payload)
        });
        builder.addCase(postProfileImage.fulfilled, (state, action)=>{
            state.profile = {...action.payload};
            // console.log(action.payload)
        });



    }

 });

//  export const profile = state => state.profile;
//  export const profile_id = "11aa6084-a71c-4602-98db-bc4617704979";
 export const profile_id = state  => state.profile_id;

 export const { add, remove , getRecord, setProfileId, resetProfile} = profileSlice.actions;
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
        const response = await axios.get(URL_PROFILE_GET + id );
        // console.log(response.data.prifile)
        return response.data.profile;
    }
 )

 export const postProfileImage = createAsyncThunk(
    'profile/image',
    async (data) => {

        try{
            const config = {
                headers: {
                "Content-Type": "multipart/form-data",
                },
            };
            const formData = new FormData();
            formData.append('file', JSON.stringify(data.imageList));
            const url = '/resume/'+ data.profile_id +'/image';
            const response = await axios.post(url, formData, config);
            return response.data.profile;
        }
        catch(err){
            console.log(err);
        }
    }
 );


 export const postProfileLinks = createAsyncThunk(
    'profile/links',
    async initialProfile => {
        const response = await axios.post("/resume/"+initialProfile.profile_id, initialProfile);
        return response.data;
    }
 );

 



