import React from "react";
import Dashboard from "../Dashboard/Index";
import BuildLayout from "./BuildLayout";
import { WithHOC } from "./WithHOC";
import { useForm } from "react-hook-form";

const Education = () => {


    const { register, handleSubmit, formState: {errors}} = useForm();

    const validationErrors = (key: string, value: string) => {

        return(
            <label className="block text-indigo-600 font-bold text-md">{ errors[key] && value +` is required`}</label>
        )
    }
    
    return(

        <BuildLayout>
        <div className="items-center gap-y-1">
         
            <div className="grid grid-cols-2 pb-3 shadow-lg bg-white  border borde2-spacing-0">
                <div className="col-span-2 border-l-4 border-b-2 border-blue-400 bg-white h-10 pr-28 py-2 mb-3 shadow-lg opacity-100 items-center align-middle">
                    <div className="grid grid-cols-2 items-center align-items-middle">
                        <button className="align-middle text-left pl-10"><span className="text-lg font-bold text-left"><i className="fa fa-plus"></i></span></button>
                        <h4 className="text-blue-800 font-bold text-xl text-right">Educational Details</h4>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-1 shadow-sm opacity-100 bg-white">
           

                <div className="px-10 space-y-2">
                    <AddEducation></AddEducation>
                </div> 

            </div>

        
        </div>
        </BuildLayout>
    )

}
export default Education;


const AddEducation = () => {
    const { register, handleSubmit, formState: {errors}} = useForm();

    return(
        <div className="grid grid-flow-col">
            <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black pl-1">Qualification Type</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-l-4 border-b-2" value=""  {...register('qualification_type', {required: true, maxLength:50})} placeholder="Qualification" name="qualification_type"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black pl-1">Insititute</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-l-4 border-b-2" value=""  {...register('institute', {required: true, maxLength:50})} placeholder="Institute" name="institute"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black pl-1">GPA/Marks</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-l-4 border-b-2" value=""  {...register('gpa_marks', {required: true, maxLength:50})} placeholder="GPA/Marks" name="gpa_marks"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black pl-1">Start Date</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-l-4 border-b-2" value=""  {...register('start_date', {required: true, maxLength:50})} placeholder="Start Date" name="start_date"></input>
                        </div>
            </div>
            <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black pl-1">End Date</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 bg-white  h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8 pl-1 block  text-black focus:outline-blue-400 focus:outline border-l-4 border-b-2" value=""  {...register('end_date', {required: true, maxLength:50})} placeholder="ENd Date" name="end_date"></input>
                        </div>
            </div>
            <div className="flex flex-row justify-center items-center p-1 w-full border-l-4">
                    <button className="align-middle text-left pl-10"><span className="text-lg text-blue-800 font-bold text-left"><i className="fa fa-plus"></i></span></button>
                    <button className="align-middle text-left pl-10"><span className="text-lg text-red-600 font-bold text-left"><i className="fa fa-minus"></i></span></button>

            </div>
            
        </div>
    )
}