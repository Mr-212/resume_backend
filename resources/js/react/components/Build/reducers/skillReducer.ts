import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import { AnyAction } from 'redux'
import { resumeState } from "./profileReducer";


export const SkillReducer = createSlice({
    name: 'skills',
    initialState: {
         id: null,
         skills: resumeState.skills,
    },
    reducers : {
        add:(state, action: PayloadAction<object>) => {
            // console.log(state.skills);
            // const newObj = {action.payload.skill: action.payload}

            const skill = action.payload?.skill;
            const payload  = action.payload;

            // console.log(skill);
            // Object.assign(state.skills, skill )
            // if(state.skills[action.payload.skill])
            state.skills[skill] = action.payload;
            // console.log(state.skills)
            // state.skills = { ...state.skills, skill: payload};
            // Object.assign(state.skills, ...payload )
            // console.log(state.skills);
            
            // {...state.skills, action.payload }
        },
        update:(state, action: PayloadAction<object>) => {
             state.skills[action.payload.skill]['score'] = (action.payload.score);
        },

        remove: (state, action: PayloadAction<number>) => {
            state.skills.splice(action.payload, 1);
        },

        getRecord: (state, action: PayloadAction<number>) => {
   
        }
    },

 });

 export const { add, update, remove , getRecord} = SkillReducer.actions;
 export default SkillReducer.reducer;



