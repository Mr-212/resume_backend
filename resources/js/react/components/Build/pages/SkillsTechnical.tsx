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

const SKillTechnical = <T extends EducationProps<T>> () => {


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
                        <h4 className="text-blue-800 text-md font-bold text-left">Tachnical Skills</h4>
                        <button className="text-right" onClick={add}><span className="text-lg text-blue-800"><i className="fa fa-plus"></i></span></button>

                    </div>
                </div>
            </div>

            <div className="grid grid-rows-1">
                            
            </div>

        
        </div>

    )

}
export default SKillTechnical;




interface Props<T> {
    education: T[],
    id?: T | null,
    profile_id?: T,
    // start_date: T,
    // end_date: T,
    setData?: T|null,
    items?: {},
    hide?: boolean,
};

