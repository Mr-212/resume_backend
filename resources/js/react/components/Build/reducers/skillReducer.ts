import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import { AnyAction } from 'redux'
import { resumeState } from "./profileReducer";


export const SkillReducer = createSlice({
    name: 'skills',
    initialState: resumeState.skills,
    reducers : {
        add:(state, action: PayloadAction<object>) => {
            const skill = action.payload?.skill;
            // const payload  = action.payload;
            state[skill] = action.payload;
        },
        
        update:(state, action: PayloadAction<object>) => {
             state[action.payload.skill]['score'] = (action.payload.score);
        },

        remove: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },

        getRecord: (state, action: PayloadAction<number>) => {
   
        }
    },

 });

 export const { add, update, remove , getRecord} = SkillReducer.actions;
 export default SkillReducer.reducer;



