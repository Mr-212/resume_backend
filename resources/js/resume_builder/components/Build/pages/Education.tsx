import React, { useEffect, useReducer, useState } from "react";
import Dashboard from "../../Dashboard/Index";
import BuildLayout from "../BuildLayout";
import { WithHOC } from "../WithHOC";
import { useForm } from "react-hook-form";
// import { educationReducer } from "../../reducers/build/educationReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { add,updateRecord, remove, getRecord, postEducation, getEducation} from "../reducers/educationReducer";
import useHideShowComponent from "../partials/useHideShowComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { profile_id } from "../reducers/profileReducer";
// import { update } from "../reducers/skillReducer";







interface EducationProps<T> {
    qulificatin_type: string,
    institution: string,
    gpa_masks: string,
    start_date: string,
    end_date: string,

    education_list : T[],
}

const defaultValues = {
    qualification: "BSCS",
    institution: "UMT",
    gpa_marks: "3.0",
    start_date: "01/01/2014",
    end_date: "12/12/2018",
    address: "",
    // profile_id: profile_id,
}

const Education = <T extends EducationProps<T>> () => {


    // const { register, handleSubmit, formState: {errors}} = useForm();

    // const [education_list, setList] = useState([]);
    const educationList = useAppSelector(state => state.education);
    const dispatch = useAppDispatch();
    const validationErrors = (key: string, value: string) => {

        return(
            <label className="block text-indigo-600 text-md">{ errors[key] && value +` is required`}</label>
        )
    }

    const[data, setData] = useState([{}]);

    useEffect(() => {
        // dispatch(getEducation());
        // console.log(educationList);

    },[]);

    useEffect(() => {
        // console.log(educationList);

    },[educationList])
    
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
         
            <div className="grid grid-cols-2 border-slate-400">
                <div className="col-span-2  h-10 py-2 bg-blue-300 opacity-50 mb-3 shadow-lg  items-center align-middle">
                    <div className="grid grid-cols-2 border-slate-400 px-10">
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
//     qualification: string,
//     institution: string,
//     gpa_marks: string,
//     start_date: string,
//     end_date: string,
// };

interface EducationProps<T={}> {
    index?:string,
    education: T[],
    id?: T | null,
    profile_id?: T,
    // qualification: T,
    // institution: T,
    // gpa_marks: T,
    // start_date: T,
    // end_date: T,
    setData?: T|null,
    items?: {},
    hide?: boolean,
    hidden? : string
};




// function AddEducation<T> ({ setData, id }: EducationProps<T>) {
const AddEducation = <T extends EducationProps<T>>( {index, items}: T) => {

    const {hidden, setHideShow} = useHideShowComponent(true);

    const[dateValue, setDateValue] = useState(new Date());

   

    const[hide, setHide] = useState(false);
    // const[education, dispatch] = useReducer(educationReducer, []);
    const { register, handleSubmit, formState: {errors}, setValue}  = useForm({defaultValues: items});
    const dispatch = useAppDispatch();
    const education = useAppSelector(state => state.education[index]);
    // const profile_id = useAppSelector(state => state.profile.profile.id);

    useEffect(() => {
        setHideShow(hide);
    },[ hide, education ])

    const addRecord = handleSubmit(data => {
        // console.log(data);
        // data['profile_id'] = profile_id;
        data['index'] = index;
        console.log(data);
        dispatch(postEducation(data));
        // .then(resp => {
        //     // console.log(resp.payload);;
        //     const newD = { index: index, data: resp.payload}
        //     dispatch(updateRecord(newD));
        // });
        // dispatch(add(data));
    });
    

    const removeRecord = (id: number): void =>{
        // console.log(form.hide);
        
        // dispatch(remove(id));
    }

    // const editRecord = (id: number): void => {
    //     const record  = education[id];
    //     // console.log( profile_id);
    //     // Object.entries(record).map(([k,v]) => {
    //     //     setValue(k,v);
    //     // });

    //     setForm({hide: !form.hide});
    //     const hidden = form.hide? "hidden transition transition-opacity ease-in-out delay-700 duration-700":"transition transition-opacity ease-in-out delay-700 duration-700";
    //     setHidden(hidden);
    //    // setValue(record);
    // }
    const setHiddenProperty = (show: boolean): void => {
    
        // setHide(!hide);
        setHideShow(hide);

    }

    return(
    <div className="grid grid-row pt-0">
       <div className="grid grid-cols-2 border-b-2 border-slate-200 bg-white opacity-60 shadow-lg py-2"> 
               <div className="text-left text-black font-bold pl-12 space-x-4">
                     <span className="">{education.qualification}</span>
                     <span className="">{education.gpa_marks}</span>
                     <span className="">({education.institution} {education.city ? "-"+education.city:""})</span>
               </div>
               <div className="text-right pr-10">
                   {/* <button className="pl-4" onClick={() => removeRecord(index)}><span className="text-lg text-red-600"><i className="fa fa-minus"></i></span></button> */}
                   <button className="pl-4" onClick={(addRecord)}><span className="text-lg text-blue-800"><i className="fas fa-save"></i></span></button>

                   <button className="pl-4" onClick={() => setHide(!hide) } data-tooltip-target="tooltip-dark"><span className="text-lg text-black"><i className="fa fa-plus"></i></span></button>
                   {/* <div id="tooltip-dark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                         Tooltip content
                     <div className="tooltip-arrow" data-popper-arrow></div>
                    </div> */}
                  
               </div>
        </div>
        <div>
          
        </div>

        <div className={"grid grid-cols-2 border-slate-400 items-center justify-center shadow-md bg-white p-10 " + hidden}>   
           
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">Qualification</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "   {...register('qualification', {required: false, maxLength:50})} placeholder="" name="qualification"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">Insititute</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "   {...register('institution', {required: false, maxLength:50})} placeholder="" name="institution"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">Address</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "   {...register('address', {required: false, maxLength:50})} placeholder="" name="address"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">GPA/Marks</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "   {...register('gpa_marks', {required: false, maxLength:50})} placeholder="" name="gpa_marks"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">Start</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            {/* <input type="number" min={"1980"} max={"2030"} className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "  {...register('start_date', {required: true, maxLength:50})} placeholder="" name="start_date"></input> */}
                            <DatePicker onChange={() => setDateValue} yearItemNumber={9} selected={dateValue} dateFormat="yyyy"  showYearPicker  className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "  {...register('start_date', {required: false, maxLength:50})}/>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">End</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            {/* <input type="month" className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "   {...register('end_date', {required: true, maxLength:50})} placeholder="End Date" name="end_date"></input> */}
                            <DatePicker onChange={() => setDateValue} yearItemNumber={9} selected={dateValue} dateFormat="yyyy"  showYearPicker  className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "  {...register('end_date', {required: false, maxLength:50})} />

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
                         <div className="flex flex-col justify-center items-center border-l-2 border-slate-400 p-1 w-full" >
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