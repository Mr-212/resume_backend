import React, { useEffect } from "react";
import { useAppDispatch } from "../../../store/store";
import { getResumes } from "../reducers/resumeReducer";
import { useAppSelector } from "../../../store/hooks";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";



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

    console.log(resumes)

    return(
        <div className="grid grid-flow-col space-x-5 px-10">
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

    // console.log(resume);
    return(
        <div className="flex flex-col items-start bg-white rounded-md shadow-md opacity-100 justify-between border-2 h-44 ">
           
            <div className="flex flex-row justify-between  w-full px-4 pt-3 border-b bg-slate-300 h-16 rounded-md">
               <h5 className="font-bold text-lg text-gray-900 italic ">{resume.job_title}</h5>
               <Link to={`${resume.id}/profile`} className="text-xl"><i className="fa fa-arrow-right"></i></Link>
            </div>
            <div className="flex flex-col justify-center items-start w-full  py-2 p-2">
                     <input type='text' className="w-full text-md font-bold border-0" value={resume.title}></input>
               
           </div>
           <div className="flex flex-row items-end justify-end w-full  py-2 p-2">
                    <button className="text-red-600"><i className="fa fa-minus"></i></button>
            </div>
         
         
        </div>
    )

}

// document.getElementById('resume',<ResumeIndex />);
// ReactDOM.render(<ResumeIndex/>, document.getElementById('resume'));