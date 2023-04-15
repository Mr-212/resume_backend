import { createAsyncThunk, createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../../../store/store";
// import { hydrate } from "react-dom";

// const dispatch = useAppDispatch();

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

        update: (state, action: PayloadAction<object>) => {
            let resume =  state.filter(obj => obj.id == action.payload.resume.id);
            console.log(current(resume));
            resume = action.payload;
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

            if(action.payload.status_code = 200){
                    // state.push(...action.payload.resumes);
                    return action.payload.resumes;
            }
        })

        builder.addCase(updateResumeTitle.fulfilled,(state,action)=>{
            if(action.payload.status_code == 200){
                const resume =  state.filter(obj => { return obj.id == action.payload.resume.id});
                // console.log(current(resume));
                resume.title = action.payload.resume.title;
                return state;
            }

        });

        
        // builder.addCase(deleteResume.fulfilled,(state, action)=>{
        //     // console.log(action.payload);
        //     // let obj= state.skills.filter((k) => console.log(current(k)) );
        //     // console.log(current(obj.id));
        //     if(action.payload.status_code == 200){}

            
        // });
    },

 });

 export const { add, remove, getRecord, update} = resumeSlice.actions;
 export default resumeSlice.reducer; 



//  export const postResume = createAsyncThunk(
//     'resume/add',
//     async (resume) => {
//         // const response = await axios.post(postSkillURL(profile_id), resume)
//         // console.log(response.data);
//         // return response.data;
//     }
//  )

export const updateResumeTitle = createAsyncThunk(
    'resume/title',
    async (resume) => {
        const url = '/resume/'+resume.id;
        const response = await axios.put(url, resume);
        // console.log(response.data);
        return response.data;
    }
     )

 export const getResumes = createAsyncThunk(
    'resumes',
    async () => {
        const url = '/resume';
        const response = await axios.get(url);
        return response.data;
    }
 )
 export const deleteResume = createAsyncThunk(
    'resume/delete',
    async (id: string,{dispatch}) => {
        const url = '/resume/' + id;
        const response = await axios.delete(url);
        // console.log(response.data)
        if(response.data.ststu_code = 200)
            dispatch(getResumes());
        //return response.data;
    }
 )




