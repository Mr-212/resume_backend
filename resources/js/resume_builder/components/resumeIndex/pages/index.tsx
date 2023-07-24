import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/store";
import { getResumes, deleteResume, updateResumeTitle, remove, updateResume } from "../reducers/resumeReducer";
import { useAppSelector } from "../../../store/hooks";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PdfTemplate from "../../Build/templates/PdfTemplate";
import { setProfileId } from "../../Build/reducers/profileReducer";
import { toast } from 'react-toastify';
import Header from "../../Build/partials/commonHeader";



const toastF = (func, message="updated") => {
    toast.promise(
        func,
        {
        pending: {
            render(){
              return "I'm loading"
            },
            icon: false,
          },
          success: {
            render(message){
              return `Updated..`
            },
             icon: true
          },
        },
        { position: toast.POSITION.TOP_LEFT, type: toast.TYPE.SUCCESS, autoClose: 2000}
    )
}

const newResume = {
    title: 'Enter CV name...'
}

const ResumeIndex = () => {


    const dispatch = useAppDispatch();
    const messgae = useAppSelector(state => state.resume.message);

    const resumes = useAppSelector(state => state.resume.resumes);
    const notify = () => toast(messgae, { position: toast.POSITION.TOP_CENTER, });


    useEffect(() => {
        const res = dispatch(getResumes());
         toast.promise(
            res,
            {
            pending: {
                render(){
                  return "I'm loading"
                },
                icon: false,
              },
            //   success: {
            //     render(){
            //       return ``
            //     },
            //     // other options
            //     icon: "🟢",
            //   },
            },
            { position: toast.POSITION.TOP_CENTER }
        )
        
    }, []);

     useEffect(() => {
        // notify();
      
    }, [resumes, messgae]);

    // console.log(resumes)

    return(
        <>
        {/* <Header></Header> */}
        <div className="grid grid-flow-row grid-cols-3 gap-4 p-3 bg-slate-200 shadow-md">
            { resumes.map((v,k) => {
                return(
                    // <div className="" key={k}>
                        <ResumeComponent resume={v} index={k} key={k}></ResumeComponent>
                    // </div>
                )
             })
            }
               


        </div>
        </>

    )
}


export default ResumeIndex;

const ResumeComponent = ({resume, index} :any) => {

    const [title, setTitle] = useState("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTitle(resume.title);
        dispatch(setProfileId(resume.id));
    }, [])


    const deleteResumeById = (id) => {
            if(id != undefined){
                 dispatch(deleteResume(id));
                 toast.warn('Record deleted..');
            }
            else
                deleteResumeByIndex(index);     
    }
    const deleteResumeByIndex = (index) => {
        dispatch(remove(index));
}
    const updateTitle = (id) => {
        // console.log(id)
        // dispatch(updateResume({id, title, index}));
        toastF(dispatch(updateResume({id, title, index})))
    }

    // console.log(resume);
    // const deleteMethod = resume.id ? deleteRes(resume.id) : deleteResumeByIndex(index);

    return(
        <>
        <div className="flex flex-col items-start bg-white shadow-md opacity-100 justify-between h-32">
           
            <div className="flex flex-row justify-between items-center w-full px-3 border-b bg-black h-16">
                <div className="flex justify-start space-x-1">
                    <label className="font-bold text-xs text-gray-200 italic">Title</label>
                    <h5 className="font-bold text-lg text-white">{resume.job_title}</h5>
                </div>
              
               {resume.id &&
                 <Link to={`${resume.id}/profile`} className="text-xl font-extrabold text-slate-200 hover:text-green-700"><i className="fa fa-arrow-right"></i></Link>
               }
            </div>
            <div className="flex flex-row justify-between items-center w-full h-full px-4">
                <div className="flex justify-start space-x-1">
                    <label className="font-bold text-xs text-slate-600 italic">CV Title</label>
                    <input  type='text' className="w-2/3 h-8 text-sm text-center italic font-extrabold text-black outline-none border-blue-200 border-b" onChange={(e) => setTitle(e.currentTarget.value)} value={title}></input>
               </div>
                <div className="space-x-4">
                    {/* <button onClick={ () => updateTitle(resume.id)} className="text-blue-600 font-bold"><i className="fa fa-pencil"></i></button> */}
                    <button onClick={ () => updateTitle(resume.id)} className="text-green-600 font-bold text-sm">Save</button>

                    {/* <button onClick={() => deleteRes(resume.id)} className="text-red-600 font-bold text-xl"><i className="fa fa-minus"></i></button> */}
                    <button onClick={ () => deleteResumeById(resume.id)} className="text-red-600 font-bold text-sm">Delete</button>

                </div>
               
           </div>

           {/* <div className="flex flex-row items-end justify-end w-full py-2 p-2 px-4">
                    <button onClick={() => deleteRes(resume.id)} className="text-red-600"><i className="fa fa-minus"></i></button>
            </div> */}
         
         
        </div>
        {/* <div className="w-full">
        <PdfTemplate /> 
        </div> */}
                  
     </>

    )

}

// document.getElementById('resume',<ResumeIndex />);
// ReactDOM.render(<ResumeIndex/>, document.getElementById('resume'));