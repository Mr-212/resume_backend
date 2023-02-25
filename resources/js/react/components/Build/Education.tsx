import React, { useReducer, useState } from "react";
import Dashboard from "../Dashboard/Index";
import BuildLayout from "./BuildLayout";
import { WithHOC } from "./WithHOC";
import { useForm } from "react-hook-form";
// import { educationReducer } from "../../reducers/build/educationReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { add, remove} from "./reducers/educationReducer";


interface EducationProps {
    qulificatin_type: string,
    institute: string,
    gpa_masks: string,
    start_date: string,
    end_date: string,
}

const Education: React.FC<EducationProps> = () => {


    // const { register, handleSubmit, formState: {errors}} = useForm();

    const validationErrors = (key: string, value: string) => {

        return(
            <label className="block text-indigo-600 text-md">{ errors[key] && value +` is required`}</label>
        )
    }
    const[data, setData] = useState([{}]);
    
    // const { register, handleSubmit, formState: {errors}} = useForm<EducationProps>();

    // const submitForm = handleSubmit(data => {

    //         setEducation([...education, data])
    //         console.log(education);

    // });

    const handEducationRecord = () => {

    }
    { console.log(data)}

    
    return(

        <BuildLayout>
        <div className="items-center gap-y-1">
         
            <div className="grid grid-cols-2 shadow-lg bg-white  border-b-2 border-blue-400">
                <div className="col-span-2  bg-white h-10 pr-28 py-2 mb-3 shadow-lg opacity-100 items-center align-middle">
                    <div className="grid grid-cols-2 items-center align-items-middle">
                        <button className="align-middle text-left pl-10"><span className="text-lg text-left"><i className="fa fa-plus"></i></span></button>
                        <h4 className="text-blue-800 text-xl font-bold text-right">Educational Details</h4>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-1 px-10">
                <AddEducation setData={setData}></AddEducation>
                
            </div>

        
        </div>
        </BuildLayout>
    )

}
export default Education;


interface EducationProps {
    qulificatin_type: string,
    institute: string,
    gpa_masks: string,
    start_date: string,
    end_date: string,
    setEducation : () => void,
}


const AddEducation: React.FC<EducationProps | any> = ({setData}) => {
 // const[education, setEducation] = useState([]);
    // const[education, dispatch] = useReducer(educationReducer, []);
    const { register, handleSubmit, formState: {errors}} = useForm<EducationProps>();
    const dispatch = useAppDispatch();
    let education = useAppSelector(state => state.educationSlice);

    const addRecord = handleSubmit(data => {
        dispatch(add(data));
    });

    const removeRecord = (id: number): void =>{
        dispatch(remove(id));
    }

    return(
        <div className="grid grid-row w-full space-y-3 pt-5">

            
        <div className="flex flex-row items-center justify-center shadow-lg opacity-100 bg-gray border-y-0 border-blue-400">   
            <div className="flex flex-col justify-center items-start p-1 w-24">
                       
            </div>

            <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block text-sm text-black pl-1">Qualification Type</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-b-2"   {...register('qualification_type', {required: true, maxLength:50})} placeholder="" name="qualification_type"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block text-sm text-black pl-1">Insititute</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-b-2"   {...register('institute', {required: true, maxLength:50})} placeholder="" name="institute"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block text-sm text-black pl-1">GPA/Marks</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-b-2"   {...register('gpa_marks', {required: true, maxLength:50})} placeholder="" name="gpa_marks"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block text-sm text-black pl-1">Start Date</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-b-2"    {...register('start_date', {required: true, maxLength:50})} placeholder="Start Date" name="start_date"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block text-sm text-black pl-1">End Date</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-b-2"   {...register('end_date', {required: true, maxLength:50})} placeholder="End Date" name="end_date"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-center p-1 w-full border-l-4 pt-4">
                    <button className="pl-10" onClick={addRecord}><span className="text-lg text-blue-800 text-left"><i className="fa fa-plus"></i></span></button>
                    {/* <button className="align-middle text-left pl-10"><span className="text-lg text-red-600 text-left"><i className="fa fa-minus"></i></span></button> */}

            </div>
            
        </div>


        {/* <div className="flex flex-row justify-center items-center w-full shadow-sm opacity-100 bg-white"> */}
        {education.length > 0 && education.map((val,key) => {
                    return(
                        <div className="flex flex-row justify-center items-center w-full shadow-sm opacity-100 bg-white">
                             <div className="flex flex-col justify-center items-center p-1 w-24">{key+1}</div>
                        { Object.entries(val).map(([k,v])=>{
                        return(
                            <div className="flex flex-col justify-center items-start p-1 w-full">
                                <span key={k}>{v}</span>
                            </div>

                        );

                        })}
                        { education.length>0 &&
                         <div className="flex flex-col justify-center items-center border-l-2 p-1 w-full" >
                            <button className="pl-10" onClick={() => removeRecord(key)}><span className="text-lg text-red-600"><i className="fa fa-minus"></i></span></button>

                        </div>
                        }

                        </div>
                   
                    )
                    
                })}

            {/* </div> */}
    </div>

    )
}