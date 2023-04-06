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
        <div className="flex">
            {resumes.map((v,k) => {
                console.log(v,k)
                return(
                    <div key={k}>
                        <ResumeComponent resume={v}></ResumeComponent>

                    </div>
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
        <div>
            <h5>{resume.title}</h5>
            <button className="">delete</button>
        </div>
    )

}

// document.getElementById('resume',<ResumeIndex />);
// ReactDOM.render(<ResumeIndex/>, document.getElementById('resume'));