import axios from "axios";
import React, { ChangeEvent, FormEvent, FormEventHandler, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { URL_PROFILE_CREATE, URL_PROFILE_GET } from "../../../constants/ResumeUrls";
import { useAppSelector } from "../../../store/hooks";
import { useAppDispatch } from "../../../store/store";
import Dashboard from "../../Dashboard/Index";
import BuildLayout from "../BuildLayout";
import { getEducation } from "../reducers/educationReducer";
import { add, getProfile, postProfile, profile } from "../reducers/profileReducer";
import { WithHOC } from "../WithPDFPreview";

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

        profile?: T,
        id?: string,
        errors?: T[]

        // id?:string,
        // job_title : string,
        // job_description: string,
        // first_name?: string, 
        // last_name?: string,
        // name: string,
        // email: string,
        // phone: string,
        // dob: string,
        // linkedin_url?: string,
        // github_url?: string,
        // twitter_url?: string,
        // address: string,

}
const formValue =  {

    // id:"",
   
    
    job_title : "",
    job_description: "",
    name: "", 
    first_name: "", 
    // last_name: "",
    email: "",
    phone: "",
    dob: "",
    city:"",
    linkedin_url: "",
    github_url: "",
    twitter_url: "",
    address: "",

}
type profile = ProfileProps<typeof formValue>;



// type Profile = ProfileProps<formValue>;

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

type CombineProps<T> = ProfileProps<T> & WarningProps & typeof formValue;

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



// function Profile<T , U extends WarningProps<U>> ( { id }: (ProfileProps<T>)){

function Profile<T> ( { id }: CombineProps<T>){
    const[alert, setAlert] = useState();
    const dispatch = useAppDispatch();
    // const profile = profile;
    const profile = useAppSelector(state => state.profile.profile);
    // let formValue = state.profile ? state.profile : {};
    const[formValues, setFormValues] = useState<CombineProps<T>>({});

    const { register, handleSubmit, formState: {errors}, setValue} = useForm({defaultValues: formValue});
    // const { register, handleSubmit, formState: {errors}, setValue} = useForm<ProfileProps>();


    const validationErrors = (key: string, value: string) => {
        return(
            null
            // <label className="block text-indigo-600 font-bold text-md">{ errors[key] && value +` is required`}</label>
        )
    }

    useEffect(() => {
        // const profile_id = "11aa6084-a71c-4602-98db-bc4617704979";
        // dispatch(getProfile(profile_id));
        // dispatch(getEducation());
    },[]);

    useEffect(() => {
        Object.entries(profile).map(([k,v]) => {
            setValue(k,v);
        })

    },[profile]);




    const handleFormChange = (e: ChangeEvent< HTMLInputElement | HTMLTextAreaElement | undefined>): void => {
        const{name, value} = e.currentTarget;
        // const key  = e.target.key;
        // const value  = e.target.value;
        setFormValues( {...formValues, [name]: value} );
        // console.log(state.profile)
        
    }

    // const submitForm = (e: FormEvent) => {
    const submitForm  = handleSubmit(data => {

        // Object.entries(profile).map(([k,v]) => {
        //     setValue(k,v);
        // })
        console.log(data);
        dispatch(postProfile(data));
        // Alert('Success','Data saved');
        // const request = axios.post(URL_PROFILE_CREATE, data)
        // .then(res => {
        //     setAlert({...alert, show: true, title:'Alert', message: res.data.message})

        // });
        // dispatch(add(data));
        // setTimeout(() => {
        //     setAlert({...alert, show: false})

        // }, 5000)
    }) 
    
    
    return(
        
        // <BuildLayout saveFunction={submitForm}>

        <div className="items-center gap-y-2" >
                {/* { alert?.show &&
                    <div className="pb-2">
                        {Alert(alert.title, alert.message)}
                    </div>
                } */}
            <div className="grid grid-flow-row bg-white space-y-5 pb-2">
                <div className="flex flex-row items-center justify-between border-b-2  bg-blue-200 opacity-100 h-10 pr-28 py-2 mb-3 shadow-md">
                        <h4 className="text-black font-bold text-md text-left px-10">Profile</h4>
                        <button type="button" className="px-4 py-1 shadow-md text-black font-bold" onClick={submitForm} name="save_btn">Save</button>
                </div>
                {/* <div className="px-10">
                    <div className="border border-gray-400 border-dashed h-5/6 w-4/6">
                        <label className="text-left">Upload Profile Photo</label>
                        <input type="file"></input>
                    </div>

                </div>  */}
                <div className="flex flex-row px-10 items-star w-full">
                    <div className="text-center w-1/4 ">
                        <div className="bg-cover bg-no-repeat rounded-md h-40 w-40 border">

                        </div>
                        

                    </div>

                    <div className="w-3/4 space-y-3">
                        <div className="flex flex-row">

                        
                        <div className="flex flex-col justify-start items-start w-full">
                            <label className="font-bold text-sm text-gray-400">Job Title</label>
                            {/* {validationErrors('job_title', 'Title')} */}
                            <div className="inline-flex items-start justify-start w-full">
                                <input  className="h-8 block text-black text-sm border-b-2 font-bold focus:outline-none focus:bg-gray" value={formValues?.job_title}  placeholder="E.g. Full Stack Developer" {...register('job_title', { required: false, maxLength: 100 })} name="job_title"></input>
                            </div> 
                        </div>
                        <div className="flex flex-col items-start justify-center p-1">
                        
                            <label className="block font-bold text-sm text-gray-400">Name</label>

                            <div className="inline-flex items-center justify-start w-full ">
                                <input type="text" className=" h-8  block rounded border-b-2 text-black text-sm font-bold focus:outline-none" value={formValues?.first_name}  onMouseOver={submitForm} placeholder="" {...register('first_name', {required: false, maxLength:20})} name="first_name"></input>
                            </div>

                        </div>

                        </div>

                        <div className="flex flex-col justify-start items-start w-full">
                            <label className="font-bold text-md text-gray-400">Description</label>
                            {/* {validationErrors('job_description', 'Description')} */}

                            <div className="inline-flex items-start justify-start w-full border-b-2">
                                {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span> */}
                                <textarea  className="w-full h-32 block rounded text-black text-sm focus:outline-none" value={formValues?.job_description}  placeholder="Tell about yourself!" {...register('job_description', {required: false, maxLength:500})}  name="job_description"></textarea>
                            </div> 
                        </div>
                    </div>
                   
                </div>

            </div>  
            


            <div className="col-span-2  border-sky-900 bg-blue-900 h-0 pr-28 shadow-md"> 
            </div>


            <div className="grid grid-cols-2 justify-items-stretch shadow-sm opacity-100 bg-white pt-4">

                {/* <div className="col-span-2 border-t-2 border-blue-900 shadow-md bg-white h-10 pt-2 pr-28">
                        <h4 className="text-blue-800 font-bold text-md text-left">Basic Information</h4>
                </div> */}

                <div className="px-10 space-y-2">       
                    <div className="flex flex-col items-start justify-center p-1">
                        
                            <label className="block font-bold text-sm text-gray-400">Name</label>
                            {/* {validationErrors('first_name', 'First Name')} */}
                            {/* <label className="block text-red-600 font-bold text-md">{errors.first_name && "First name is required"}</label> */}
                        

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.first_name}  onMouseOver={submitForm} placeholder="" {...register('first_name', {required: false, maxLength:20})} name="first_name"></input>
                        </div>

                    </div>
                    {/* <div className="flex flex-col justify-center items-start p-1 w-full">
                       
                            <label className="block font-bold text-sm text-gray-400">Last Name</label>
                            // {validationErrors('last_name', 'Last Name')}

                      

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounde h-8 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span> */}
                            {/* <input type="text" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.last_name}  {...register('last_name', {required: true, maxLength:20})} placeholder="Last Name" name="last_name"></input>
                        </div>

                    </div> */}

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-gray-400">Email</label>
                        {/* {validationErrors('email', 'Email')} */}

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            {/* <input type="text" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.email}  {...register('email', {required: false, maxLength:100, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} placeholder="" name="email"></input> */}
                            <input type="text" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.email}  {...register('email', {required: false, maxLength:100})} placeholder="" name="email"></input>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-gray-400">City</label>
                        {/* {validationErrors('city', 'city')} */}

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-phone" aria-hidden="true"></i> </span> */}
                            <input type="tel" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.city}  {...register('city', {required: false, maxLength:20})}  placeholder="" name="city"></input>
                            {/* <input type="tel" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.phone}  {...register('phone', {required: true, minLength:9,maxLength:11})}  placeholder="Phone" name="phone"></input> */}
                        </div>
                       
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-gray-400">Date of Birth</label>
                        {/* {validationErrors('dob', 'Date of Birth')} */}

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 pl-2 bg-white rounded h-8 pt-3"><i className="fa fa-calendar" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8  rounded text-black text-sm font-bold focus:outline-none" value={formValues?.dob} {...register('dob', {required: false})}  placeholder="" name="dob"></input>
                        </div>
                    </div>
                </div> 

                
                <div className="px-10 space-y-2">

                   <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-gray-400">Phone</label>
                        {/* {validationErrors('phone', 'Phone')} */}

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-phone" aria-hidden="true"></i> </span> */}
                            <input type="tel" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.phone}  {...register('phone', {required: false, maxLength:20})}  placeholder="" name="phone"></input>
                            {/* <input type="tel" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.phone}  {...register('phone', {required: true, minLength:9,maxLength:11})}  placeholder="Phone" name="phone"></input> */}
                        </div>
                       
                    </div>

                    <div className="flex flex-col justify-start items-start p-1">
                        <label className="basis block font-bold text-sm text-gray-400">LinkedIn URL</label>
                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa-brands fa-linkedin" aria-hidden="true"></i> </span> */}
                            <input type="text" className=" w-full h-8  block rounded-sm text-black focus:outline-none" value={formValues?.linkedin_url}  placeholder="" name="linkedin_url"></input>
                        </div>        
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                   
                        <label className="block font-bold text-sm text-gray-400">Github URL</label>
                        
                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa-brands fa-github" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.github_url}  placeholder="" name="github_url"></input>
                        </div> 
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                   
                        <label className="block font-bold text-sm text-gray-400">Twitter</label>
                        
                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa-brands fa-twitter" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8  block  text-black text-sm font-bold focus:outline-none" value={formValues?.twitter_url}  placeholder="" name="twitter_url"></input>
                        </div> 
                    </div>

                </div> 

                <div className="col-span-2 px-10 pb-6">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                        <label className="block font-bold text-sm text-gray-400">Address</label>
                        {/* {validationErrors('address', 'Address')} */}

                        <div className="inline-flex items-start justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span> */}
                            <textarea  className="w-full h-16  pt-2 block  text-black text-sm font-bold focus:outline-none" value={formValues?.address}  {...register('address', {required: false, maxLength:100})}  placeholder="" name="address"></textarea>
                        </div> 

                    </div>
               </div>
  

            </div>
        </div>
    )
}
 

export default Profile;