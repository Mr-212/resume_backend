import React, { useReducer, useState } from "react";
import Dashboard from "../../Dashboard/Index";
import BuildLayout from "../BuildLayout";
import { WithHOC } from "../WithHOC";
import { useForm } from "react-hook-form";
// import { educationReducer } from "../../reducers/build/educationReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { add, remove, getRecord} from "../reducers/educationReducer";





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

    // const [education_list, setList] = useState([]);
    const educationList = useAppSelector(state=>state.educationSlice);
    const dispatch = useAppDispatch();
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
        dispatch(add(defaultValues));

    }; 

    return(

        //<BuildLayout>
        <div className="items-center gap-y-1">
         
            <div className="grid grid-cols-2 border-blue-300">
                <div className="col-span-2  bg-slate-400 h-10 py-2 border-blue-300 mb-3 shadow-lg  items-center align-middle">
                    <div className="grid grid-cols-2 border-blue-300 px-10">
                        <h4 className="text-blue-800 text-md font-bold text-left">Educational Details</h4>
                        <button className="text-right" onClick={addEducation}><span className="text-lg text-blue-800"><i className="fa fa-plus"></i></span></button>

                    </div>
                </div>
            </div>

            <div className="grid grid-rows-1">
                { educationList.length  > 0 && educationList.map( (val,key) => {
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
    hide?: boolean,
};




// function AddEducation<T> ({ setData, id }: EducationProps<T>) {
const AddEducation = <T extends EducationProps<T>>( {index, items}: any) =>{

   

    const[form, setForm] = useState<EducationProps<T>>({hide: false});
    const[hidden, setHidden] = useState<EducationProps<T>>({hidden: ""});
    // const[education, dispatch] = useReducer(educationReducer, []);
    const { register, handleSubmit, formState: {errors}, setValue}  = useForm<EducationProps<T>>({defaultValues: items});
    const dispatch = useAppDispatch();
    const education = useAppSelector(state => state.educationSlice[index]);
    const profile_id = useAppSelector(state => state.profile.profile.id);

    const addRecord = handleSubmit(data => {
        dispatch(add(data));
    });

    const removeRecord = (id: number): void =>{
        // console.log(form.hide);
        
        dispatch(remove(id));
    }

    const editRecord = (id: number): void => {
        const record  = education[id];
        // console.log( profile_id);
        // Object.entries(record).map(([k,v]) => {
        //     setValue(k,v);
        // });

        setForm({hide: !form.hide});
        const hidden = form.hide? "hidden transition transition-opacity ease-in-out delay-700 duration-700":"transition transition-opacity ease-in-out delay-700 duration-700";
        setHidden(hidden);
       // setValue(record);
    }

    return(
    <div className="grid grid-row pt-0">
       <div className="grid grid-cols-2 border-blue-300 bg-white opacity-50 shadow-md py-5"> 
               <div className="text-left pl-12 space-x-4">
                     <span className="">{education.qualification_type}</span>
                     <span className="">{education.gpa_marks}</span>
                     <span className="">({education.institute} {education.city ? "-"+education.city:""})</span>

               </div>

               <div className="text-right pr-10">
                   <button className="pl-4" onClick={() => removeRecord(index)}><span className="text-lg text-red-600"><i className="fa fa-minus"></i></span></button>
                   <button className="pl-4" onClick={() => editRecord(0)}><span className="text-lg text-blue-800"><i className="fa fa-plus"></i></span></button>
               </div>
        </div>
        <div className={"grid grid-cols-2 border-blue-300 items-center justify-center shadow-md bg-white p-10 " + hidden}>   
           
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">Qualification</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-sky-700 focus:outline-none border-b-2 border-blue-300"   {...register('qualification_type', {required: true, maxLength:50})} placeholder="" name="qualification_type"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">Insititute</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-sky-700 focus:outline-none border-b-2 border-blue-300"   {...register('institute', {required: true, maxLength:50})} placeholder="" name="institute"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">City</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-sky-700 focus:outline-none border-b-2 border-blue-300"   {...register('city', {required: true, maxLength:50})} placeholder="" name="city"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">GPA/Marks</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-sky-700 focus:outline-none border-b-2 border-blue-300"   {...register('gpa_marks', {required: true, maxLength:50})} placeholder="" name="gpa_marks"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">Start</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8 pl-1 block  text-sky-700 focus:outline-none border-b-2 border-blue-300"  {...register('start_date', {required: true, maxLength:50})} placeholder="" name="start_date"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">End</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8 pl-1 block  text-sky-700 focus:outline-none border-b-2 border-blue-300"   {...register('end_date', {required: true, maxLength:50})} placeholder="End Date" name="end_date"></input>
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
                         <div className="flex flex-col justify-center items-center border-l-2 border-blue-300 p-1 w-full" >
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