import axios from "axios";
import React, { ChangeEvent, FormEvent, FormEventHandler, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { URL_PROFILE_CREATE, URL_PROFILE_GET } from "../../constants/ResumeUrls";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/store";
import Dashboard from "../Dashboard/Index";
import BuildLayout from "./BuildLayout";
import { add } from "./reducers/profileReducer";
import { WithHOC } from "./WithHOC";

// export interface ProfileProps {

//         id?:string,
//         job_title : string,
//         job_description: string,
//         first_name: string, 
//         last_name: string,
//         email: string,
//         phone: string,
//         dob: string,
//         linkedin_url?: string,
//         github_url?: string,
//         twitter_url?: string,
//         address: string,

// }
export interface ProfileProps<T> {

        profile: T[],
        id?: T,

        // id?:string,
        // job_title : string,
        // job_description: string,
        // first_name: string, 
        // last_name: string,
        // email: string,
        // phone: string,
        // dob: string,
        // linkedin_url?: string,
        // github_url?: string,
        // twitter_url?: string,
        // address: string,

}
let formValue =  {

    id:"",
    job_title : "",
    job_description: "",
    first_name: "", 
    last_name: "",
    email: "",
    phone: "",
    dob: "",
    linkedin_url: "",
    github_url: "",
    twitter_url: "",
    address: "",

}

// export interface ProfileProps {
//        id?: string,

//        profile: {
//         id?:string,
//         job_title : string,
//         job_description: string,
//         first_name: string, 
//         last_name: string,
//         email: string,
//         phone: string,
//         dob: string,
//         linkedin_url?: string,
//         github_url?: string,
//         twitter_url?: string,
//         address: string,

//         }
// }


interface WarningProps {
    show: boolean,
    title: string,
    message: string
}

type props= {
    submitForm?: () => void,
}


export const Alert = ( title: string, message: string ) => {
     return(
        <div className="bg-sky-100 border-l-4 border-blue-400 text-indigo-400 p-4" role="alert">
            <p className="font-bold text-left">{title}</p>
            <p className="text-left">{message}</p>
        </div>
     )
}



function Profile<T>({id}: (ProfileProps<T> & WarningProps)){
    const[alert, setAlert] = useState<WarningProps>();
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.profile);
    // let formValue = state.profile ? state.profile : {};
    const[formValues, setFormValues] = useState<ProfileProps<T>>();

    const { register, handleSubmit, formState: {errors}, setValue} = useForm<ProfileProps<T>>({defaultValues: formValue});
    // const { register, handleSubmit, formState: {errors}, setValue} = useForm<ProfileProps>();


    const validationErrors = (key: string, value: string) => {
        return(
            <label className="block text-indigo-600 font-bold text-md">{ errors[key] && value +` is required`}</label>
        )
    }

    useEffect(() => {
        id = "0d8b8b7b-1171-4af1-ada7-b6f4105064cd";
        // id = "";
        if(id){
            const data = axios.get(URL_PROFILE_GET + id)
            .then((res: {}) => {
                dispatch(add(res.data.profile));
                // setFormValues(res.data.profile);
                Object.entries(res.data.profile).map(([k,v]) => {
                    setValue(k,v);
                })
            });
        console.log(state.profile);
        // setFormValues(state.profile)
        }
        

    },[]);




    const handleFormChange = (e: ChangeEvent< HTMLInputElement | HTMLTextAreaElement | undefined>): void => {
        const{name, value} = e.currentTarget;
        // const key  = e.target.key;
        // const value  = e.target.value;
        setFormValues( {...formValues, [name]: value} );
        // console.log(state.profile)
        
    }

    // const submitForm = (e: FormEvent) => {
    const submitForm  = handleSubmit(data => {
        Alert('Success','Data saved');
        const request = axios.post(URL_PROFILE_CREATE, data)
        .then(res => {
            setAlert({...alert, show:true, title:'Alert', message: res.data.message})

        });
        dispatch(add(data));
        setTimeout(() => {
            setAlert({...alert, show: false})

        }, 5000)
    }) 
    
    
    return(
        
        <BuildLayout saveFunction={submitForm}>
               { console.log(state.profile)}

        <div className="items-center gap-y-1">
            <form >
                { alert?.show &&
                <div className="pb-2">
                    {Alert(alert.title, alert.message)}
                </div>
                }
            <div className="grid grid-cols-2 pb-3 shadow-lg bg-white  border border-spacing-0">
                <div className="col-span-2 border-b-2 border-blue-400 bg-white h-10 pr-28 py-2 mb-3 shadow-lg opacity-100">
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
                        <div className="inline-flex items-start justify-start w-full border-b-2">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <input  className="w-full h-8 pl-8 pt-2 block rounded text-black focus:outline-blue-400 focus:outline" value={formValues?.job_title} onChange={handleFormChange} placeholder="Add you job Title e.g. Full Stack Developer" {...register('job_title', { required: true, maxLength: 20 })} name="job_title"></input>
                        </div> 
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <label className="font-bold text-md text-black">Who are you?</label>
                        {validationErrors('job_description', 'Description')}

                        <div className="inline-flex items-start justify-start w-full border-b-2">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <textarea  className="w-full h-32 pl-8 pt-2 block rounded text-black focus:outline-blue-400 focus:outline" value={formValues?.job_description} onChange={handleFormChange} placeholder="Tell about yourself!" {...register('job_description', {required: true, maxLength:100})}  name="job_description"></textarea>
                        </div> 
                    </div>
                </div>

            </div>  
            




            <div className="grid grid-cols-2 justify-items-stretch border shadow-sm opacity-100 bg-white space-y-5">
           
                <div className="col-span-2 border-t-2 border-blue-400 shadow-lg bg-white h-10 pt-2 pr-28">
                        <h4 className="text-blue-800 font-bold text-xl text-right">Basic Information</h4>
                </div>

                <div className="px-10 space-y-2">
                   
                    <div className="flex flex-col items-start justify-center p-1">
                        
                            <label className="block font-bold text-md text-black">First Name</label>
                            {validationErrors('first_name', 'First Name')}
                            {/* <label className="block text-red-600 font-bold text-md">{errors.first_name && "First name is required"}</label> */}
                        

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            <span className="absolute w-8 bg-white roundeD h-8 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" value={formValues?.first_name}  onChange={handleFormChange} placeholder="First Name" {...register('first_name', {required: true, maxLength:20})} name="first_name"></input>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-start p-1 w-full">
                       
                            <label className="block font-bold text-sm text-black">Last Name</label>
                            {validationErrors('last_name', 'Last Name')}

                      

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            <span className="absolute w-8 bg-white rounde h-8 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" value={formValues?.last_name} onChange={handleFormChange} {...register('last_name', {required: true, maxLength:20})} placeholder="Last Name" name="last_name"></input>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Email</label>
                        {validationErrors('email', 'Email')}

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" value={formValues?.email} onChange={handleFormChange}  {...register('email', {required: true, maxLength:50, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} placeholder="Email" name="email"></input>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Phone</label>
                        {validationErrors('phone', 'Phone')}

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-phone" aria-hidden="true"></i> </span>
                            {/* <input type="tel" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" value={formValues?.phone} onChange={handleFormChange} {...register('phone', {required: true, maxLength:20, pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ })}  placeholder="Phone" name="phone"></input> */}
                            <input type="tel" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" value={formValues?.phone} onChange={handleFormChange} {...register('phone', {required: true, minLength:9,maxLength:11})}  placeholder="Phone" name="phone"></input>
                        </div>
                       
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Date of Birth</label>
                        {validationErrors('dob', 'Date of Birth')}

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 pl-2 bg-white rounded h-8 pt-3"><i className="fa fa-calendar" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8 pl-8 rounded text-black focus:outline-blue-400 focus:outline" value={formValues?.dob} onChange={handleFormChange} {...register('dob', {required: true})}  placeholder="Date of birth" name="dob"></input>
                        </div>
                    </div>
                </div> 

                
                <div className="px-10 space-y-2">
                    <div className="flex flex-col justify-start items-start p-1">
                        <label className="basis block font-bold text-sm text-black">LinkedIn</label>
                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa-brands fa-linkedin" aria-hidden="true"></i> </span>
                            <input type="text" className=" w-full h-8 pl-8 block rounded-sm text-black focus:outline-blue-400 focus:outline" value={formValues?.linkedin_url} onChange={handleFormChange} placeholder="LinkedIn URL" name="linkedin_url"></input>
                        </div> 
                        
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                   
                        <label className="block font-bold text-sm text-black">Github</label>
                        
                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa-brands fa-github" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" value={formValues?.github_url} onChange={handleFormChange} placeholder="Github URL" name="github_url"></input>
                        </div> 
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                   
                        <label className="block font-bold text-sm text-black">Twitter</label>
                        
                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa-brands fa-twitter" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-8 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" value={formValues?.twitter_url} onChange={handleFormChange} placeholder="Twitter" name="twitter_url"></input>
                        </div> 
                    </div>

                </div> 

                <div className="col-span-2 px-10 pb-6">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                        <label className="block font-bold text-sm text-black">Address</label>
                        {validationErrors('address', 'Address')}

                        <div className="inline-flex items-start justify-start w-full border-b-2">
                            <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <textarea  className="w-full h-16 pl-8 pt-2 block rounded text-black focus:outline-blue-500 focus:outline" value={formValues?.address} onChange={handleFormChange} {...register('address', {required: true, maxLength:100})}  placeholder="Address" name="address"></textarea>
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