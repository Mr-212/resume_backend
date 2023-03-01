import React, { useReducer, useState } from "react";
import Dashboard from "../Dashboard/Index";
import BuildLayout from "./BuildLayout";
import { WithHOC } from "./WithHOC";
import { useForm } from "react-hook-form";
// import { educationReducer } from "../../reducers/build/educationReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { add, remove, getRecord} from "./reducers/educationReducer";





interface EducationProps<T> {
    qulificatin_type: string,
    institute: string,
    gpa_masks: string,
    start_date: string,
    end_date: string,

    education_list : T[],
}

const defaultValues = {
    qualification_type: "BSCS",
    institute: "UMT",
    gpa_marks: "3.0",
    start_date: "01/01/2014",
    end_date: "12/12/2018",
    // profile_id: profile_id,
}

const Education = <T extends EducationProps<T>> () => {


    // const { register, handleSubmit, formState: {errors}} = useForm();

    const [education_list, setList] = useState([]);
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

    }; 

    const addEducation = () => {
            setList([...education_list, defaultValues])
    }; 

    return(

        //<BuildLayout>
        <div className="items-center gap-y-1">
         
            <div className="grid grid-cols-2 shadow-lg bg-white  border-b-2 border-blue-400">
                <div className="col-span-2  bg-white h-10 pr-28 py-2 mb-3 shadow-lg opacity-100 items-center align-middle">
                    <div className="grid grid-cols-2 items-center align-items-middle">
                        <button className="align-middle text-left pl-10" onClick={addEducation}><span className="text-lg text-left"><i className="fa fa-plus"></i></span></button>
                        <h4 className="text-blue-800 text-xl font-bold text-right">Educational Details</h4>
                    </div>
                </div>
            </div>

            <div className="grid grid-rows-1 px-10">
                { education_list.length  > 0 && education_list.map( (val,key) => {
                    // console.log(key);
                    // return (<AddEducation setData={setData} id={null}></AddEducation>)
                    return (<AddEducation items={val}  index={key}></AddEducation>)
                })
                }             
            </div>

        
        </div>
        // {/* </BuildLayout> */}
    )

}
export default Education;


// interface EducationProps {
//     profile_id?: string,
//     qualification_type: string,
//     institute: string,
//     gpa_marks: string,
//     start_date: string,
//     end_date: string,
// };

interface EducationProps<T> {
    education: T[],
    id?: T | null,
    profile_id?: T,
    // qualification_type: T,
    // institute: T,
    // gpa_marks: T,
    // start_date: T,
    // end_date: T,
    setData?: T|null,
    items?: {},
};




// function AddEducation<T> ({ setData, id }: EducationProps<T>) {
const AddEducation = <T extends EducationProps<T>>( {index, items}: any) =>{

   

    const[from, setForm] = useState<T>();
    // const[education, dispatch] = useReducer(educationReducer, []);
    const { register, handleSubmit, formState: {errors}, setValue}  = useForm<EducationProps<T>>({defaultValues: items});
    const dispatch = useAppDispatch();
    const education = useAppSelector(state => state.educationSlice);
    const profile_id = useAppSelector(state => state.profile.profile.id);

    const addRecord = handleSubmit(data => {
        dispatch(add(data));
    });

    const removeRecord = (id: number): void =>{
        console.log(id);
        dispatch(remove(id));
    }

    const editRecord = (id: number): void => {
        const record  = education[id];
        console.log( profile_id);
        Object.entries(record).map(([k,v]) => {
            setValue(k,v);
        })
       // setValue(record);
    }

    return(
        <div className="grid grid-row space-y-3 p-5">

<       div className="grid grid-cols-2 shadow-lg opacity-100 bg-gray  border-blue-400 p-5">
               
               <div className="justify-items-center items-end text-left">

               </div>
               <div className="text-right">
                   <button className="pl-10" onClick={()=>editRecord(0)}><span className="text-lg text-blue-800 text-left"><i className="fa fa-plus"></i></span></button>
                   <button className="pl-10" onClick={() => removeRecord(index)}><span className="text-lg text-red-600"><i className="fa fa-minus"></i></span></button>
               </div>

        </div>
        <div className="grid grid-cols-2 items-center justify-center shadow-lg opacity-100 bg-gray  border-blue-400 p-5">   
           
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-black pl-1">Qualification</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-b-2"   {...register('qualification_type', {required: true, maxLength:50})} placeholder="" name="qualification_type"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-black pl-1">Insititute</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-b-2"   {...register('institute', {required: true, maxLength:50})} placeholder="" name="institute"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-black pl-1">City</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-b-2"   {...register('institute', {required: true, maxLength:50})} placeholder="" name="institute"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-black pl-1">GPA/Marks</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-b-2"   {...register('gpa_marks', {required: true, maxLength:50})} placeholder="" name="gpa_marks"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-black pl-1">Start</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-b-2"  {...register('start_date', {required: true, maxLength:50})} placeholder="" name="start_date"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-black pl-1">End</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-b-2"   {...register('end_date', {required: true, maxLength:50})} placeholder="End Date" name="end_date"></input>
                        </div>
            </div>


          
            
        </div>


        {/* <div className="flex flex-row justify-center items-center w-full shadow-sm opacity-100 bg-white"> */}
        {/* {education.length > 0 && education.map((val,key) => {
                    return(
                        <div className="flex flex-row justify-center items-center w-full shadow-sm opacity-100 bg-white">
                             <div className="flex flex-col justify-center items-center p-1 w-24">{key+1}</div>
                        { Object.entries(val).map(([k,v])=>{
                        return(
                            <div className="flex flex-col justify-center items-start p-1">
                                <span key={k}>{v}</span>
                            </div>

                        );

                        })}
                        { education.length>0 &&
                         <div className="flex flex-col justify-center items-center border-l-2 p-1 w-full" >
                            <button className="pl-10" onClick={() => removeRecord(key)}><span className="text-lg text-red-600"><i className="fa fa-minus"></i></span></button>
                            <button className=" pl-10" onClick={() => editRecord(key)}><span className="text-lg text-blue-600 text-left"><i className="fa fa-plus"></i></span></button>

                        </div>
                        }

                        </div>
                   
                    )
                    
                })} */}

            {/* </div> */}
    </div>

    )
}