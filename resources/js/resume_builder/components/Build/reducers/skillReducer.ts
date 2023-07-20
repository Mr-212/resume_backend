import { createAsyncThunk, createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { profile_id, resumeState } from "./profileReducer";
import axios from "axios";
import { getSKillIndexURL, postSkillURL, URL_SKILL_DELETE } from "../../../constants/ResumeUrls";


export const SkillReducer = createSlice({
    name: 'skills',
    initialState: {skills: resumeState.skills, skillList:[]},
    reducers : {
        add:(state, action: PayloadAction<object>) => {
            // const skill = action.payload?.skill;
            // const payload  = action.payload;
            state.skills.unshift(action.payload);
        },
        
        update:(state, action: PayloadAction<object>) => {
             //state.skills[action.payload.index]['score'] = action.payload?.score;
        },
        updateScore:(state, action: PayloadAction<object>) => {
             state.skills[action.payload.index]['score'] = action.payload?.score;
        },

        remove: (state, action: PayloadAction<number>) => {
            // state.skills.splice(action.payload, 1);
            // delete state.skills[action.payload];
            state.skills.splice(action.payload,1);
        },

        getRecord: (state, action: PayloadAction<number>) => {
   
        },

        resetSkills: (state) => {
            state.skills = [];
        },

        setArray: (state, action: PayloadAction<Array<Object>>) =>{
            state.skills = action.payload;
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
            // console.log(action.payload);
            // let obj= state.skills.filter((k) => console.log(current(k)) );
            // console.log(current(obj.id));
            if(action.payload.status == 200){}
                // remove(action.payload.id);
                // delete state.skills[action.payload.skill];
                // remove(action.payload.skill);
                
              

        });

    }

 });

 export const { add, update, remove , getRecord, updateScore, resetSkills,setArray} = SkillReducer.actions;
 export default SkillReducer.reducer;


 export const postProfileSkills = createAsyncThunk(
    'skill/add',
    async (profileSkills) => {
        const {profile_id, skillList} = profileSkills;
        // profileSkills['profile_id'] = profile_id;
        // console.log(profileSkills, postSkillURL(profile_id));
        const response = await axios.post(postSkillURL(profile_id),  skillList)
        // console.log(response.data);
        return response.data;
    }
 )

 export const getProfileSkills = createAsyncThunk(
    'skill/get',
    async (profile_id: string) => {

        // console.log(profile_id)
        const url = getSKillIndexURL(profile_id);
        // console.log(url);
        const response = await axios.get(url);
        // console.log(response.data)
        return response.data;
    }
 )
 export const deleteProfileSkills = createAsyncThunk(
    'skill/delete',
    async (id: string) => {
        const response = await axios.delete(URL_SKILL_DELETE + (id));
        // console.log(response.data)
        return response.data;
        // return {id: id, status: 200};
    }
 )