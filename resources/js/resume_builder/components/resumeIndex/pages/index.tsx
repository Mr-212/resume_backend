import React, { useEffect } from "react";
import { useAppDispatch } from "../../../store/store";
import { getResumes } from "../reducers/resumeReducer";
import { useAppSelector } from "../../../store/hooks";
import ReactDOM from "react-dom";



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
        <div className="flex flex-col items-center justify-start space-y-2">
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

    console.log(resume);
    return(
        <div className="flex flex-row items-start justify-start border-b-2 w-full p-1">
            <h5>{resume.title}</h5>
            <button className="">delete</button>
        </div>
    )

}

// document.getElementById('resume',<ResumeIndex />);
// ReactDOM.render(<ResumeIndex/>, document.getElementById('resume'));