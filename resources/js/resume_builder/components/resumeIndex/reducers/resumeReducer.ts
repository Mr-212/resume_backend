import { createAsyncThunk, createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../../../store/store";
// import { hydrate } from "react-dom";

// const dispatch = useAppDispatch();

export const resumeSlice = createSlice({
    name: 'resume',
    initialState: {
        resumes: [],
        message :'',
        error: '',
    },
    reducers: {
        add:(state, action: PayloadAction<object>) => {
             state.resumes.unshift(...state, action.payload);
        },

        newResume: (state) => {
            const newResume = {title: 'Enter Resume Name ...'};
            state.resumes.unshift(newResume);
            
        } ,

        remove: (state, action: PayloadAction<number>) => {
            state.resumes.splice(action.payload, 1);
        },

        // update: (state, action: PayloadAction<object>) => {
        //     let resume =  state.filter(obj => obj.id == action.payload.resume.id);
        //     console.log(current(resume));
        //     resume = action.payload;
        // },

        getRecord: (state, action: PayloadAction<number>) => {
            //   const r = state.slice(action.payload, action.payload+1);
            //   const r = state.map((val,key )=> {
            //     console.log(key, val)
            //      if(key == action.payload)
            //         return val
            //   });
            //   console.log(r);
        },
        setMessage: (state,action: PayloadAction<string>)=> {
            state.message = action.payload
        }

    },

    extraReducers:(builder) => {
        builder.addCase(getResumes.fulfilled, (state, action) => {
            console.log(action.payload);

            if(action.payload.status_code = 200){
                    // state.push(...action.payload.resumes);
                     state.resumes =  [...action.payload.resumes];
                     return state
            }
        })

        builder.addCase(updateResumeTitle.fulfilled,(state,action)=>{
            if(action.payload.status_code == 200){
                const resume =  state.resumes.filter(obj => { return obj.id == action.payload.resume.id});
                // console.log(current(resume));
                return action.payload.resume;
                return state;
            }
           

        });

        builder.addCase(updateResume.fulfilled,(state, action)=>{
            if(action.payload.data.status_code == 200){
               state.resumes[action.payload.index] = action.payload.data.resume;
               state.message = "Resume updated";
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

 export const { add, remove, getRecord, newResume, setMessage} = resumeSlice.actions;
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
    async (resume,{dispatch}) => {
        const url = '/resume';
        const response = await axios.post(url, resume);
        // console.log(response.data);
        return response.data;
    }
)

export const updateResume = createAsyncThunk(
    'resume/update',
    async (resume,{dispatch}) => {
        const {index} = resume;
        const url = '/resume';
        const response = await axios.post(url, resume);
        // console.log(response.data);
        return {index: index, data:response.data};
        // if(response.data.ststu_code = 200)
            // dispatch(getResumes());
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
        if(response.data.ststu_code = 200){
            // dispatch(setMessage('Resume deleted.'))
            dispatch(getResumes());
        }
        //return response.data;
    }
 )




