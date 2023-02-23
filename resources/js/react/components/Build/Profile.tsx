import axios from "axios";
import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { useForm } from "react-hook-form";
import { URL_PROFILE_CREATE } from "../../constants/ResumeUrls";
import Dashboard from "../Dashboard/Index";
import BuildLayout from "./BuildLayout";
import { WithHOC } from "./WithHOC";

interface ProfileProps {
    job_title : string,
    job_description: string,
    first_name: string, 
    last_name: string,
    email: string,
    phone: string,
    dob: string,
    linkedin_url?: string,
    github_url?: string,
    twitter_url?: string,
    address: string,
}

type props= {
    submitForm?: () => void,
}



const Profile: React.FC<ProfileProps> = () => {

    const[formValues, setFormValues] = useState<ProfileProps >();

    const { register, handleSubmit, formState: {errors}} = useForm<ProfileProps>();

    const validationErrors = (key: string, value: string) => {

        return(
            <label className="block text-indigo-600 font-bold text-md">{ errors[key] && value +` is required`}</label>
        )
    }
    const handleFormChange = (e: ChangeEvent< HTMLInputElement | HTMLTextAreaElement | undefined>): void => {
        const{name, value} = e.currentTarget;
        // const key  = e.target.key;
        // const value  = e.target.value;
        setFormValues( {...formValues, [name]: value} );
        
    }

    // const submitForm = (e: FormEvent) => {
    const submitForm  = handleSubmit(data => {
        console.log(data)
    }) 
    
        
        // console.log(formValues)
        // axios.post(URL_PROFILE_CREATE,{formValues})
        // .then(res => {
        //     console.log(res);
        // });
        //console.log(formValues)
    
    
    return(
        
        <BuildLayout saveFunction={submitForm}>
        
        <div className="gap-y-2 w-4/5">
            <form >
            <div className="grid grid-cols-2 pb-3 shadow-lg bg-white  border border-spacing-0">
                <div className="col-span-2 border-b-2 border-blue-400 bg-white h-12 pr-28 py-2 mb-3 shadow-lg opacity-100">
                        <h4 className="text-blue-800 font-bold text-xl text-right ">Profile</h4>
                </div>
                <div className="px-10">
                    <div className="border border-gray-400 border-dashed h-5/6 w-4/6">
                        <label className="text-left">Upload Profile Photo</label>
                        <input type="file"></input>
                    </div>

                </div> 

                <div className="px-10 items-start justify-items-start space-y-3">
                    <div className="flex flex-col justify-start items-start">
                        <label className="font-bold text-md text-black">Job Title</label>
                        {validationErrors('job_title', 'Title')}
                        <div className="inline-flex items-start justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <input  className="w-full h-8 pl-8 pt-2 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.job_title} onChange={handleFormChange} placeholder="Add you job Title e.g. Full Stack Developer" {...register('job_title', { required: true, maxLength: 20 })} name="job_title"></input>
                        </div> 
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <label className="font-bold text-md text-black">Who are you?</label>
                        {validationErrors('job_description', 'Description')}

                        <div className="inline-flex items-start justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <textarea  className="w-full h-32 pl-8 pt-2 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.job_description} onChange={handleFormChange} placeholder="Tell about yourself!" {...register('job_description', {required: true, maxLength:100})}  name="job_description"></textarea>
                        </div> 
                    </div>
                </div>

            </div>  
            




            <div className="grid grid-cols-2 justify-items-stretch border shadow-sm opacity-100 bg-white space-y-5">
           
                <div className="col-span-2 border-t-2 border-blue-400 shadow-lg bg-white h-12 pt-2 pr-28">
                        <h4 className="text-blue-800 font-bold text-xl text-right">Basic Information</h4>
                </div>

                <div className="px-10 space-y-2">
                   
                    <div className="flex flex-col items-start justify-center p-1">
                        
                            <label className="block font-bold text-md text-black">First Name</label>
                            {validationErrors('first_name', 'First Name')}
                            {/* <label className="block text-red-600 font-bold text-md">{errors.first_name && "First name is required"}</label> */}
                        

                        <div className="inline-flex items-center justify-start w-full">
                            <span className="absolute w-8 bg-white rounde h-8 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline border-b-2"  onChange={handleFormChange} placeholder="Name" {...register('first_name', {required: true, maxLength:20})} name="first_name"></input>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-start p-1 w-full">
                       
                            <label className="block font-bold text-sm text-black">Last Name</label>
                            {validationErrors('last_name', 'Last Name')}

                      

                        <div className="inline-flex items-center justify-start w-full">
                            <span className="absolute w-8 bg-white rounde h-8 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.last_name} onChange={handleFormChange} {...register('last_name', {required: true, maxLength:20})} placeholder="Name" name="last_name"></input>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Email</label>
                        {validationErrors('email', 'Email')}

                        <div className="inline-flex items-center justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.email} onChange={handleFormChange}  {...register('email', {required: true, maxLength:50})} placeholder="Email" name="email"></input>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Phone</label>
                        {validationErrors('phone', 'Phone')}

                        <div className="inline-flex items-center justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-phone" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.phone} onChange={handleFormChange} {...register('phone', {required: true, maxLength:20})}  placeholder="Phone" name="phone"></input>
                        </div>
                       
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Date of Birth</label>
                        {validationErrors('dob', 'Date of Birth')}

                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 pl-2 bg-white rounded h-8 pt-3"><i className="fa fa-calendar" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8 pl-8 rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.dob} onChange={handleFormChange} {...register('dob', {required: true})}  placeholder="Date of birth" name="dob"></input>
                        </div>
                    </div>
                </div> 

                
                <div className="px-10 space-y-2">
                    <div className="flex flex-col justify-start items-start p-1">
                        <label className="basis block font-bold text-sm text-black">LinkedIn</label>
                        <div className="inline-flex justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa-brands fa-linkedin" aria-hidden="true"></i> </span>
                            <input type="text" className=" w-full h-8 pl-8 block rounded-sm text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.linkedin_url} onChange={handleFormChange} placeholder="LinkedIn URL" name="linkedin_url"></input>
                        </div> 
                        
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                   
                        <label className="block font-bold text-sm text-black">Github</label>
                        
                        <div className="inline-flex items-center justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa-brands fa-github" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.github_url} onChange={handleFormChange} placeholder="Github URL" name="github_url"></input>
                        </div> 
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                   
                        <label className="block font-bold text-sm text-black">Twitter</label>
                        
                        <div className="inline-flex items-center justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa-brands fa-twitter" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.twitter_url} onChange={handleFormChange} placeholder="Twitter" name="twitter_url"></input>
                        </div> 
                    </div>

                </div> 

                <div className="col-span-2 px-10 pb-6">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                        <label className="block font-bold text-sm text-black">Address</label>
                        {validationErrors('address', 'Address')}

                        <div className="inline-flex items-start justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <textarea  className="w-full h-16 pl-8 pt-2 block rounded text-black focus:outline-blue-500 focus:outline border-b-2" value={formValues?.address} onChange={handleFormChange} {...register('address', {required: true, maxLength:100})}  placeholder="Address" name="address"></textarea>
                        </div> 

                    </div>
               </div>
  

            </div>

         </form>
    </div>
    </BuildLayout>
    )
}
 
// Profile.layout = page => <Dashboard children={page}></Dashboard>;
// Profile.layout = (page) =>  <Dashboard><BuildLayout children={ page } saveFunction={page.handleSubmit}></BuildLayout></Dashboard>;
// Profile.layout = page =>  <BuildLayout children={ page }></BuildLayout>;

export default (Profile);
// export default Profile;