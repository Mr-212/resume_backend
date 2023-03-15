import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import { AnyAction } from 'redux'
import { profile_id, resumeState } from "./profileReducer";
import axios from "axios";
import { getSKillIndexURL, postSkillURL, URL_SKILL_DELETE } from "../../../constants/ResumeUrls";


export const SkillReducer = createSlice({
    name: 'skills',
    initialState: {skills: resumeState.skills, skillList:[]},
    reducers : {
        add:(state, action: PayloadAction<object>) => {
            const skill = action.payload?.skill;
            // const payload  = action.payload;
            state.skills[skill] = action.payload;
        },
        
        update:(state, action: PayloadAction<object>) => {
             state.skills[action.payload.skill]['score'] = action.payload?.score;
        },

        remove: (state, action: PayloadAction<number>) => {
            // state.skills.splice(action.payload, 1);
            delete state.skills[action.payload];
        },

        getRecord: (state, action: PayloadAction<number>) => {
   
        },
    },

    extraReducers(builder){
        builder.addCase(postProfileSkills.fulfilled,(state,action)=>{
            // console.log(action.payload);
            state.skills = action.payload;

        });

        builder.addCase(getProfileSkills.fulfilled,(state, action)=>{
            state.skills = action.payload?.skills?action.payload?.skills:{};
            state.skillList = action.payload.skillsList;
        });

        builder.addCase(deleteProfileSkills.fulfilled,(state, action)=>{
            console.log(action.payload);
            if(action.payload.status == 200)
                delete state.skills[action.payload.skill];
                // remove(action.payload.skill);
                
              

        });

    }

 });

 export const { add, update, remove , getRecord} = SkillReducer.actions;
 export default SkillReducer.reducer;


 export const postProfileSkills = createAsyncThunk(
    'skill/add',
    async (profileSkills) => {
        // profileSkills['profile_id'] = profile_id;
        // console.log(profileSkills, postSkillURL(profile_id));
        const response = await axios.post(postSkillURL(profile_id),  profileSkills)
        // console.log(response.data);
        return response.data;
    }
 )

 export const getProfileSkills = createAsyncThunk(
    'skill/get',
    async (id: string) => {
        id = id ? id: profile_id;
        const response = await axios.get(getSKillIndexURL(profile_id));
        console.log(response.data)
        return response.data;
    }
 )
 export const deleteProfileSkills = createAsyncThunk(
    'skill/delete',
    async (val: string) => {
        const response = await axios.delete(URL_SKILL_DELETE + (val));
        // console.log(response.data)
        return {skill: val, status: response.data.status};
    }
 )