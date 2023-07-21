import React, { useCallback, useEffect, useReducer, useState } from "react";
import Dashboard from "../../Dashboard/Index";
import BuildLayout from "../BuildLayout";
import { WithHOC } from "../WithPDFPreview";
import { useForm } from "react-hook-form";
// import { educationReducer } from "../../reducers/build/educationReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { add,updateRecord, remove, getRecord, setHide, postExperience, deleteExperience, postSave, setArray} from "../reducers/experienceReducer";
import useHideShowComponent from "../partials/useHideShowComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { profile_id } from "../reducers/profileReducer";
import Skills from "./Skills";
import { Draggable } from "react-drag-reorder";


// import { update } from "../reducers/skillReducer";







interface EducationProps<T> {
 
}

let experienceDafault = {
    id:"",
    index: "",
    items: {},
    profile_id: "",
    company: "{} Brackets",
    job_title: "Full Stack Laravel/React",
    job_description: "",
    city: "Lahore/Chichawatni",
    country: "Pakistan",
    skills: [],
    start_date: "2017",
    end_date: "2019",
    is_current_working: true,
    hide: true,
    hidden: true
    // profile_id: profile_id,
}

const Experience = () => {
    const profile_id = useAppSelector(state => state.profile.profile_id);
    const experiences = useAppSelector(state => state.experience.experience);
    const dispatch = useAppDispatch();

    const[data, setData] = useState([{}]);

    useEffect(() => {
        // dispatch(getEducation());
        // console.log(educationList);

    },[]);

    useEffect(() => {
        // console.log(educationList);

    },[experiences])

    const handEducationRecord = () => {

    }; 

    const addExperience = () => {
        dispatch(add(experienceDafault));

    }; 


    const save = () => {
        dispatch(postSave({profile_id: profile_id, experienceArrayList: experiences}))
    }


    const getChangedPos = (currentPos, newPos) => {
        console.log(currentPos, newPos);
        // console.log(skillList);
        reArrangeIndex(currentPos, newPos);
        console.log(experiences);
      };

    const reArrangeIndex = (currentPos, newPos) => {
        
        let newArr = [...experiences];
        let temp = newArr[currentPos];
        // console.log(newArr);
        // newArr[currentPos] = newArr[newPos];
        // newArr[newPos] = temp;

        let newtemp = newArr.splice(currentPos,1);
        newArr.splice(newPos,0, newtemp[0]);
        console.log(newArr, newtemp);
        
        dispatch(setArray(newArr));

            
    } 

     
    const DragabbleExperienceList = useCallback(() => {
        return(
            <Draggable onPosChange={getChangedPos}>
               { experiences.length  > 0 && experiences.map((experience,key) => {
                    // counter++;
                    return  <AddExperienceComponent experience={experience}  index={key} key={key}></AddExperienceComponent>                
                     
                 })
            } 

            </Draggable>
        )
    },[experiences]);

    return(
        <div className="items-center gap-y-1">
            <div className="grid grid-cols-2 border-slate-400">
                <div className="col-span-2  h-10 py-2 bg-blue-200 opacity-100 mb-3 shadow-lg  items-center align-middle">
                    <div className="grid grid-cols-2 border-slate-400 px-10">
                        <h4 className="text-blue-800 text-md font-bold text-left">Experience</h4>
                        <div className="flex flex-row justify-end space-x-3">
                            <button className="text-right" onClick={addExperience}><span className="text-lg text-blue-800"><i className="fa fa-plus"></i></span></button>
                            <button className="text-green-600 font-bold" onClick={save}>Save</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="space-y-2">
                
                {/* { experiences.length  > 0 && experiences.map((experience,key) => {
                    console.log(experience);

                    return  <AddExperienceComponent experience={experience}  index={key} key={key}></AddExperienceComponent>
                                
                    
                })
                }  */}

                <DragabbleExperienceList></DragabbleExperienceList>            
            </div>

        
        </div>
        // {/* </BuildLayout> */}
    )

}
export default Experience;


interface EProps {
    id?:string,
    index: number,
    items: {},
    profile_id?: string,
    company: string,
    job_title: string,
    job_description: string,
    city: string,
    country: string,
    skills: [],
    start_date: string,
    end_date: string,
    hide?: boolean,
    hidden? : string
};


// function AddEducation<T> ({ setData, id }: EducationProps<T>) {
 function AddExperienceComponent( {index, experience}: any ) {

    const {hidden, setHideShow} = useHideShowComponent(true);
    const [startDate, setStartDate] = useState(new Date());
    const[hide, setHide] = useState(false);
    const profile_id = useAppSelector(state => state.profile.profile_id);
    
    const { register, handleSubmit, formState: {errors}, setValue}  = useForm({defaultValues: experience});
    const dispatch = useAppDispatch();
    const[arrowClass, setArrorClass]  = useState("fa fa-arrow-up");

    useEffect(() => {
        // Object.entries(experience).map(([k,v]) => {
        //                 setValue(k,v);
        //     });
    },[]);

    useEffect(() => {
        setHideShow(hide);
        // console.log(hidden);
        hide? setArrorClass("fa fa-arrow-up") : setArrorClass("fa fa-arrow-down")
    },[ hide ]);


    const addRecord = handleSubmit(data => {
        // console.log(data, experience);
        const id = experience.id;
        data['index'] = index;
        data['id'] = id;
        data['profile_id'] = profile_id;
        // console.log(data);
        dispatch(postExperience(data));
    
    });
    

    const removeRecord = (index: number): void =>{
        // console.log(form.hide);
        const id = experience.id;
        
        // dispatch(deleteExperience(id));
        dispatch(remove(index));
    }

    const setHiddenProperty = (show: boolean): void => {
        setHideShow(hide);

    }

    return(

        <>
            <div className="grid grid-flow-row grid-rows-1 border-b bg-gray-400 opacity-100 shadow-lg py-2"> 
                <div className="flex flex-row w-full justify-between">

                        <div className="text-left pl-10 font-bold text-gray-700">
                            <span className="">{experience.job_title}</span>
                            {/* <span><h5 className="italic">{experience.company}</h5><small>{experience.start_date + '-' + experience.is_currently_working ? "Presnt" : experience.end_date}</small></span> */}
                            <p><strong className="italic pr-2">{experience.company}</strong><small className="text-blue-600">{experience.start_date + ' - ' + (experience.is_currently_working ? 'Present' :  experience.end_date)}</small></p>

                        </div>
                        <div className="text-right pr-10 pt-2">
                            {/* <button className="pl-4" onClick={() => removeRecord(index)}><span className="text-lg text-red-600"><i className="fa fa-minus"></i></span></button> */}
                            {/* <button className="pl-4" onClick={addRecord} ><span className="text-lg text-blue-800"><i className="fas fa-save"></i></span></button> */}
                            <button className="px-4 py-1 opacity-100 text-md text-green-600 font-bold" onClick={addRecord}>Save</button>
                            <button className="pl-4" onClick={() => setHide(!hide)} data-tooltip-target="tooltip-dark"><span className="text-lg text-black"><i className={arrowClass}></i></span></button>
                            
                        </div>
                </div>
            </div>

            <div className={"flex flex-col w-full items-center justify-center shadow-md bg-white p-5 gap-x-3 gap-y-3 " + hidden}>   
            
                <div className="flex flex-row w-full">
                    <div className="flex flex-col justify-center items-start p-1 w-full">
                                <label className="block text-sm text-gray-400 pl-1 font-bold">Job title</label>
                                <div className="inline-flex items-center justify-start ">
                                    <input type="text" className=" h-8 pl-1 block  text-black focus:outline-none border-b "   {...register('job_title', {required: false, maxLength:50})} placeholder="" name="job_title"></input>
                                </div>
                    </div>

                    <div className="flex flex-row items-center justify-between p-1 w-full">
                        <div className="flex flex-col  justify-center items-start">
                                <label className="block text-sm text-gray-400 pl-1 font-bold">Start</label>
                                <input type="number" min={"1950"} max={"2300"} className="h-8 pl-1 block  text-black focus:outline-none border-b "  {...register('start_date', {required: false, maxLength:50})} placeholder="" name="start_date"></input>
                                
                        </div>
                        <div className={"flex flex-col justify-center items-start"}>
                                    <label className="block text-sm text-gray-400 pl-1 font-bold">End</label>
                                    <input type="number" min={"1950"} max={"2300"} className="h-8 pl-1 block text-black focus:outline-none border-b disabled"  {...register('end_date', {required: false, maxLength:50})} name="end_date"></input>

                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-4">
                                    <label className="block text-sm text-gray-400 pl-1 font-bold">Current?</label>
                                    <input type="checkbox"  className="block h-4 lock  text-black focus:outline-none border-b "   {...register('is_currently_working', {required: false, maxLength:50})} name="is_currently_working"></input>
                        </div>
                </div>
                </div>
                
                <div className="flex flex-row justify-between w-full p-1">
                    <div className="flex flex-col justify-center items-start">
                                <label className="block text-sm text-gray-400 pl-1 font-bold">Company</label>
                                <input type="text" className=" h-8 pl-1 block  text-black focus:outline-none border-b "   {...register('company', {required: false, maxLength:50})} placeholder="" name="company"></input>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                                <label className="block text-sm text-gray-400 pl-1 font-bold">City</label>
                                <input type="text" className=" h-8 pl-1 block  text-black focus:outline-none border-b "   {...register('city', {required: false, maxLength:50})} placeholder="" name="city"></input>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                                <label className="block text-sm text-gray-400 pl-1 font-bold">Country</label>
                                <input type="text" className=" h-8 pl-1 block  text-black focus:outline-none border-b "   {...register('country', {required: false, maxLength:50})} placeholder="" name="country"></input>
                    </div>

                    
                </div>

                <div className="flex flex-row w-full p-1">
                    <div className="flex flex-col justify-center items-start w-full">
                        <label className="block text-md text-gray-600 pl-1 font-bold">Describe your experience</label>
                        <textarea className="w-full h-40 pl-1 block  text-black focus:outline-none border-b "   {...register('description', {required: false, maxLength:1000})} placeholder="" name="description"></textarea>
                    </div>

                </div>
        </div>

        </>

    )
}