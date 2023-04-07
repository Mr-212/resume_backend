import { createAsyncThunk, createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
// import { hydrate } from "react-dom";

export const resumeSlice = createSlice({
    name: 'resume',
    initialState: [],
    reducers: {
        add:(state, action: PayloadAction<object>) => {
             state.unshift(...state, action.payload);
        },

        remove: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },

        getRecord: (state, action: PayloadAction<number>) => {
            //   const r = state.slice(action.payload, action.payload+1);
            //   const r = state.map((val,key )=> {
            //     console.log(key, val)
            //      if(key == action.payload)
            //         return val
            //   });
            //   console.log(r);
        },
    },

    extraReducers:(builder) => {
        builder.addCase(getResumes.fulfilled, (state, action) => {
            console.log(action.payload);
            // console.log('here');

            if(action.payload.status_code = 200){
                    // state.push(...action.payload.resumes);
                    return action.payload.resumes;
            }
        })

        // builder.addCase(postResume.fulfilled,(state,action)=>{
        //     // console.log(action.payload);
        //     state = action.payload;

        // });

        
        // builder.addCase(deleteResume.fulfilled,(state, action)=>{
        //     // console.log(action.payload);
        //     // let obj= state.skills.filter((k) => console.log(current(k)) );
        //     // console.log(current(obj.id));
        //     if(action.payload.status_code == 200){}

            
        // });
    },

 });

 export const { add, remove, getRecord} = resumeSlice.actions;
 export default resumeSlice.reducer; 



//  export const postResume = createAsyncThunk(
//     'resume/add',
//     async (resume) => {
//         // const response = await axios.post(postSkillURL(profile_id), resume)
//         // console.log(response.data);
//         // return response.data;
//     }
//  )

 export const getResumes = createAsyncThunk(
    'resumes',
    async () => {
        const url = '/resume';
        const response = await axios.get(url);
        // console.log(response.data);
        // add(response.data.resumes);
        return response.data;
    }
 )
//  export const deleteResume = createAsyncThunk(
//     'resume/delete',
//     async (id: string) => {
//         // const response = await axios.delete(URL_SKILL_DELETE + (id));
//         // console.log(response.data)
//         // return response.data;
//     }
//  )




