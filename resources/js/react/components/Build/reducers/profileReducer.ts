import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/rootReducer";
import { AnyAction } from 'redux'


export const resumeState = {
    
        id: null,
        profile: {},
        education: [],
        skills: {},
   
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

 });


//  export const profile_id = (state) => state.profile.id;
 export const { add, remove , getRecord} = profileSlice.actions;
 export default profileSlice.reducer;



