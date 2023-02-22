import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
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



const Profile: React.FC<ProfileProps> = () => {

    const[formValues, setFormValues] = useState<ProfileProps>();


    const handleFormChange = (e: ChangeEvent< HTMLInputElement | HTMLTextAreaElement>): void => {
        const{name, value} = e.currentTarget;
        // const key  = e.target.key;
        // const value  = e.target.value;
        // console.log(name, value);
        // setFormValues({...formValues, [name]: value});
        
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault;
        console.log(formValues)
    }
    
    return(
        // <BuildLayout saveFunction={handleSubmit}>
        
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
                        <div className="inline-flex items-start justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <input  className="w-full h-8 pl-8 pt-2 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.job_title} onChange={handleFormChange} placeholder="Add you job Title e.g. Full Stack Developer" name="job_title"></input>
                        </div> 
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <label className="font-bold text-md text-black">Who are you?</label>
                        <div className="inline-flex items-start justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <textarea  className="w-full h-32 pl-8 pt-2 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.job_description} onChange={handleFormChange} placeholder="Tell about yourself!" name="job_description"></textarea>
                        </div> 
                    </div>
                </div>

            </div>  
            




            <div className="grid grid-cols-2 justify-items-stretch border shadow-sm opacity-100 bg-white space-y-5">
           
                <div className="col-span-2 border-t-2 border-blue-400 shadow-lg bg-white h-12 pt-2 pr-28">
                        <h4 className="text-blue-800 font-bold text-xl text-right">Basic Information</h4>
                </div>

                <div className="px-10 space-y-2">
                   
                    <div className="grid grid-cols-1 items-center justify-items-stretch p-1">
                        <div className="text-left">
                            <label className="block font-bold text-sm text-black">First Name</label>
                        </div>

                        <div className="inline-flex items-center justify-start w-full">
                            <span className="absolute w-8 bg-white rounde h-8 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline border-b-2"  onChange={handleFormChange} placeholder="Name" name="first_name"></input>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <div className="">
                        <label className="block font-bold text-sm text-black">Last Name</label>
                        </div>

                        <div className="inline-flex items-center justify-start w-full">
                            <span className="absolute w-8 bg-white rounde h-8 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.last_name} onChange={handleFormChange} placeholder="Name" name="first_name"></input>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Email</label>
                        <div className="inline-flex items-center justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.email} onChange={handleFormChange} placeholder="Email" name="email"></input>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Phone</label>
                        <div className="inline-flex items-center justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-phone" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.phone} onChange={handleFormChange} placeholder="Phone" name="phone"></input>
                        </div>
                       
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Date of Birth</label>
                        <div className="inline-flex items-center justify-start w-full">
                            {/* <span className="absolute w-8 pl-2 bg-white rounded h-8 pt-3"><i className="fa fa-calendar" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8 pl-8 rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.dob} onChange={handleFormChange}  placeholder="Date of birth" name="dob"></input>
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
                        <div className="inline-flex items-start justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <textarea  className="w-full h-16 pl-8 pt-2 block rounded text-black focus:outline-blue-400 focus:outline border-b-2" value={formValues?.address} onChange={handleFormChange} placeholder="Address" name="address"></textarea>
                        </div> 

                    </div>
               </div>
  

            </div>

         </form>
    </div>
    // </BuildLayout>
    )
}
 
// Profile.layout = page => <Dashboard children={page}></Dashboard>;
// Profile.layout = (page) =>  <Dashboard><BuildLayout children={ page } saveFunction={page.handleSubmit}></BuildLayout></Dashboard>;
// Profile.layout = page =>  <BuildLayout children={ page }></BuildLayout>;

export default WithHOC(Profile);
// export default Profile;