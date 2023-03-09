import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/root";
import { AnyAction } from 'redux'


export const SkillsTechnicalSlice = createSlice({
    name: 'technicalskills',
    initialState: {
         id: null,
         skills_technical: {},
    },
    reducers : {
        add:(state, action: PayloadAction<object>) => {
             state.skills_technical = action.payload;
        },

        remove: (state, action: PayloadAction<number>) => {
            //state.profile.splice(action.payload, 1);
        },

        getRecord: (state, action: PayloadAction<number>) => {
   
        }
    },

 });

 export const { add, remove , getRecord} = SkillsTechnicalSlice.actions;
 export default SkillsTechnicalSlice.reducer;



