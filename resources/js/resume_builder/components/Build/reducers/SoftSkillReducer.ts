import { createAsyncThunk, createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { profile_id, resumeState } from "./profileReducer";
import axios from "axios";
import { getSKillIndexURL, postSkillURL, URL_SKILL_DELETE } from "../../../constants/ResumeUrls";


export const SoftSkillReducer = createSlice({
    name: 'softskills',
    initialState: {softskills: [], skillList:[]},
    reducers : {
        add:(state, action: PayloadAction<object>) => {
            state.softskills.unshift(action.payload);
        },
        
        update:(state, action: PayloadAction<object>) => {
             //state.skills[action.payload.index]['score'] = action.payload?.score;
        },
        updateScore:(state, action: PayloadAction<object>) => {
            //  state.SoftSkills[action.payload.index]['score'] = action.payload?.score;
        },

        remove: (state, action: PayloadAction<number>) => {
            // state.skills.splice(action.payload, 1);
            // delete state.skills[action.payload];
            state.softskills.splice(action.payload,1);
        },

        getRecord: (state, action: PayloadAction<number>) => {
   
        },

        resetSkills: (state) => {
            state.softskills = [];
        }
    },

    extraReducers(builder){
        builder.addCase(postProfileSoftSkills.fulfilled,(state,action)=>{
            // console.log(action.payload);
            if(action.payload.status_code == 200)
                state.softskills = action.payload.softSkillData;

        });

        builder.addCase(getProfileSoftSkills.fulfilled,(state, action)=>{
            state.softskills = action.payload?.softskills? action.payload?.softskills: {};
            // state.skillList = action.payload.skillsList;
        });

        builder.addCase(deleteProfileSoftSkills.fulfilled,(state, action)=>{
          
            if(action.payload.status == 200){

            }  
        });

    }

 });

 export const { add, update, remove , getRecord, updateScore, resetSkills} = SoftSkillReducer.actions;
 export default SoftSkillReducer.reducer;


 export const postProfileSoftSkills = createAsyncThunk(
    'softskills/add',
    async (profileSkills) => {
        const {profile_id, skillList} = profileSkills;
        // profileSkills['profile_id'] = profile_id;
        // console.log(profileSkills, postSkillURL(profile_id));
        const url = '/resume/profile/'+profile_id +'/softskill'
        const response = await axios.post(url, skillList)
        // console.log(response.data);
        return response.data;
    }
 )

 export const getProfileSoftSkills = createAsyncThunk(
    'softskills/get',
    async (profile_id: string) => {

        // console.log(profile_id)
        // const url = getSKillIndexURL(profile_id);
        const url = '/resume/profile/'+(profile_id)+'/softskill';

        // console.log(url);
        const response = await axios.get(url);
        // console.log(response.data)
        return response.data;
    }
 )
 export const deleteProfileSoftSkills = createAsyncThunk(
    'softskills/delete',
    async (id: string) => {
        const url = '/resume/profile/softskill'+id;
        const response = await axios.delete(url);
        // console.log(response.data)
        return response.data;
        // return {id: id, status: 200};
    }
 )