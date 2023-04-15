import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/store";
import { getResumes, deleteResume, updateResumeTitle } from "../reducers/resumeReducer";
import { useAppSelector } from "../../../store/hooks";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PdfTemplate from "../../Build/templates/PdfTemplate";
import { setProfileId } from "../../Build/reducers/profileReducer";



const ResumeIndex = () => {

    const dispatch = useAppDispatch();
    const resumes = useAppSelector(state => state.resume);

    useEffect(() => {
        const res = dispatch(getResumes());
        
        // res.then(res=> {
        //     console.log(res);
        // })
        // console.log(res);
    }, []);

     useEffect(() => {
      
    }, [resumes]);

    // console.log(resumes)

    return(
        <div className="grid grid-flow-row grid-cols-3 gap-4 p-3 bg-slate-200 shadow-md">
            { resumes.map((v,k) => {
                return(
                    // <div className="" key={k}>
                        <ResumeComponent resume={v}></ResumeComponent>
                    // </div>
                )
             })
            }
               


        </div>
    )
}


export default ResumeIndex;

const ResumeComponent = ({resume} :any) => {

    const [title, setTitle] = useState("");
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTitle(resume.title);
        dispatch(setProfileId(resume.id));
    }, [resume])


    const deleteRes = (id: string) => {
            dispatch(deleteResume(id));
    }
    const updateTitle = (id: string) => {
        dispatch(updateResumeTitle({id, title}));
    }

    // console.log(resume);
    return(
        <>
        <div className="flex flex-col items-start bg-white rounded-md shadow-md opacity-100 justify-between h-32">
           
            <div className="flex flex-row justify-between items-center w-full px-4 border-b bg-blue-200 opacity-100 h-16">
               <h5 className="font-bold text-lg text-blue-700 italic ">{resume.job_title}</h5>
               <Link to={`${resume.id}/profile`} className="text-xl"><i className="fa fa-arrow-right"></i></Link>
            </div>
            <div className="flex flex-row justify-between items-center w-full h-full px-4">
                <input  type='text' className="w-2/3 text-md font-bold text-blue-400 outline-none  border-gray-400" onChange={(e) => setTitle(e.currentTarget.value)} value={title}></input>
                <div className="space-x-6">
                    <button onClick={ () => updateTitle(resume.id)} className="text-blue-600 font-bold"><i className="fa fa-pencil"></i></button>
                    <button onClick={() => deleteRes(resume.id)} className="text-red-600 font-bold text-xl"><i className="fa fa-minus"></i></button>
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