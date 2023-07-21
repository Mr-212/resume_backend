import React, { useCallback, useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { add,updateRecord, remove, getRecord, postEducation, getEducation, postSave,setArray, deleteEducation, setHide} from "../reducers/educationReducer";
import useHideShowComponent from "../partials/useHideShowComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Draggable from 'react-draggable'
import { Draggable } from "react-drag-reorder";


// import { update } from "../reducers/skillReducer";







interface EducationProps<T> {
    qulificatin_type: string,
    institution: string,
    gpa_masks: string,
    start_date: string,
    end_date: string,

    education_list : T[],
}

let defaultValues = {
    qualification: "",
    institution: "",
    gpa_marks: "",
    start_date: "",
    end_date: "",
    address: "",
    // profile_id: profile_id,
}
let counter = 0;

const Education = <T extends EducationProps<T>> () => {


    // const { register, handleSubmit, formState: {errors}} = useForm();

    // const [education_list, setList] = useState([]);
    const educationList = useAppSelector(state => state.education.education);
    const profile_id = useAppSelector(state => state.profile.profile_id);

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

    const save = () => {
        
        dispatch(postSave({profile_id: profile_id, educationArrayList: educationList}))
    }


    const getChangedPos = (currentPos, newPos) => {
        console.log(currentPos, newPos);
        // console.log(skillList);
        reArrangeIndex(currentPos, newPos);
        console.log(educationList);
      };

    const reArrangeIndex = (currentPos, newPos) => {
        
        let newArr = [...educationList];
        let temp = newArr[currentPos];
        // console.log(newArr);
        // newArr[currentPos] = newArr[newPos];
        // newArr[newPos] = temp;

        let newtemp = newArr.splice(currentPos,1);
        newArr.splice(newPos,0, newtemp[0]);
        console.log(newArr, newtemp);
        
        dispatch(setArray(newArr));

            
    } 
    
    
    const DragabbleEducationList = useCallback(() => {
        return(
            <Draggable onPosChange={getChangedPos}>
                { educationList.length  > 0 && educationList.map( (val,key) => {
                    counter++;
                    return <AddEducation items={val}  index={key} key={counter}></AddEducation>                  
                     
                 })
            } 

            </Draggable>
        )
    },[]);

    return(

        //<BuildLayout>
        <div className="items-center gap-y-1">
         
            <div className="grid grid-cols-2 border-slate-400">
                <div className="col-span-2  h-10 py-2 bg-blue-200 opacity-100 mb-3 shadow-lg  items-center align-middle">
                    <div className="grid grid-cols-2 border-slate-400 px-10">
                        <h4 className="text-blue-800 text-md font-bold text-justify">Educational Details</h4>
                        <div className="flex flex-row justify-end space-x-3">
                            <button className="" onClick={addEducation}><span className="text-lg text-blue-800"><i className="fa fa-plus"></i></span></button>
                            <button className="text-green-600 font-bold" onClick={save}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-rows-1">
                
                {/* { educationList.length  > 0 && educationList.map( (val,key) => {

                    counter++;
                    // console.log(counter);
                    // return (<AddEducation setData={setData} id={null}></AddEducation>)
                    return (
                       
                            <div key={counter}>             
                                    <AddEducation items={val}  index={key}></AddEducation>                  
                            </div>
                        )
                })
                }              */}

                <DragabbleEducationList></DragabbleEducationList>
            </div>

        
        </div>
        // {/* </BuildLayout> */}
    )

}
export default Education;


interface EProps {
    id?:string,
    index: number,
    items: {},
    profile_id?: string,
    qualification: string,
    institution: string,
    gpa_marks: string,
    start_date: string,
    end_date: string,
    hide?: boolean,
    hidden? : string
};

interface EducationProps<T> {
    index?:number,
    education?: T[],
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
 function AddEducation( {index, items}: props ) {

    const {hidden, setHideShow} = useHideShowComponent(true);
    const [startDate, setStartDate] = useState(new Date());

    // const hide = useAppSelector(state => state.education.hide);

    const[hide, setHide] = useState(false);
    const education = items;
    const { register, handleSubmit, formState: {errors}, setValue}  = useForm({defaultValues: education});
    const dispatch = useAppDispatch();
    const[arrowClass, setArrorClass]  = useState("fa fa-arrow-up");
    const profile_id = useAppSelector(state => state.profile.profile_id);

    useEffect(() => {
        Object.entries(education).map(([k,v]) => {
                        setValue(k,v);
            });
    },[])
    useEffect(() => {
        // console.log(education);
        setHideShow(hide);
        hide? setArrorClass("fa fa-arrow-up") : setArrorClass("fa fa-arrow-down")
        // console.log(education)
        // Object.entries(education).map(([k,v]) => {
        //             setValue(k,v);
        // });
    },[ hide ])

    const addRecord = handleSubmit(data => {
        data['index'] = index;
        data['profile_id'] = profile_id;
        // console.log(data, education);

        dispatch(postEducation(data));
    
    });
    

    const removeRecord = (index: number): void =>{
        // console.log(form.hide);
        const id = education.id;
        
        dispatch(deleteEducation(id));
        dispatch(remove(index));
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
        setHideShow(hide);

    }

    return(
    <div className="grid grid-row pt-0">
       <div className="grid grid-flow-row border-b-2 border-b-white bg-black opacity-80 shadow-lg py-2"> 
            <div className="flex flex-row w-full justify-between items-center px-10">
 
                <div className="text-left font-bold text-white">
                        <p><span className="pr-2">{education.qualification}</span><strong className="text-blue-400 font-bold">( {education.gpa_marks} )</strong></p>
                        <p><small className="italic pr-2">{education.institution}</small><small className="pr-2">{" - "+ education.address}</small><small className="text-blue-400">( {education.start_date +'-'+education.end_date} )</small></p>
                </div>
                <div className="text-right">
                    <button className="px-4 py-1 opacity-100 text-md text-green-600 font-bold" onClick={(addRecord)} >Save</button>

                    <button className="pl-4" onClick={() => removeRecord(index)}><span className="text-lg text-red-600"><i className="fa fa-minus"></i></span></button>
                    {/* <button className="pl-4" onClick={(addRecord)} ><span className="text-lg text-blue-800"><i className="fas fa-save"></i></span></button> */}

                    <button className="pl-4" onClick={() => setHide(!hide)} data-tooltip-target="tooltip-dark"><span className="text-lg text-white"><i className={arrowClass}></i></span></button>
                    
                    {/* <div id="tooltip-dark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Tooltip content
                        <div className="tooltip-arrow" data-popper-arrow></div>
                        </div> */}
                    
                </div>
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
                            <input type="number" min={"1950"} max={"2300"} className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "  {...register('start_date', {required: true, maxLength:50})} placeholder="" name="start_date"></input>
                            {/* <DatePicker onChange={(date) => setStartDate(date)} selected={startDate} dateFormat="yyyy"  showYearPicker  className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "  {...register('start_date', {required: false})} name="start_date"/> */}
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                        <label className="block text-sm text-gray-400 pl-1 font-bold">End</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="number" min={"1950"} max={"2300"} className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "   {...register('end_date', {required: true, maxLength:50})} placeholder="End Date" name="end_date"></input>
                            {/* <DatePicker selected={startDate} dateFormat="yyyy"  showYearPicker onChange={(startDate) => setStartDate(startDate)}   className="w-full h-8 pl-1 block  text-black focus:outline-none border-b-2 "  {...register('end_date', {required: false})} name="end_date" /> */}

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