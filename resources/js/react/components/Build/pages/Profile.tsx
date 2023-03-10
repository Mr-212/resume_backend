import axios from "axios";
import React, { ChangeEvent, FormEvent, FormEventHandler, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { URL_PROFILE_CREATE, URL_PROFILE_GET } from "../../../constants/ResumeUrls";
import { useAppSelector } from "../../../store/hooks";
import { useAppDispatch } from "../../../store/store";
import Dashboard from "../../Dashboard/Index";
import BuildLayout from "../BuildLayout";
import { add } from "../reducers/profileReducer";
import { WithHOC } from "../WithHOC";

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
    const state = useAppSelector(state => state.profile);
    // let formValue = state.profile ? state.profile : {};
    const[formValues, setFormValues] = useState<CombineProps<T>>();

    const { register, handleSubmit, formState: {errors}, setValue} = useForm<CombineProps<string | T>>({defaultValues: formValue});
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
            .then((res) => {
                dispatch(add(res.data.profile));
                Object.entries(res.data.profile).map(([k,v]) => {
                    setValue(k,v);
                })
            });
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
        console.log(data);

        // Alert('Success','Data saved');
        // const request = axios.post(URL_PROFILE_CREATE, data)
        // .then(res => {
        //     setAlert({...alert, show: true, title:'Alert', message: res.data.message})

        // });
        dispatch(add(data));
        // setTimeout(() => {
        //     setAlert({...alert, show: false})

        // }, 5000)
    }) 
    
    
    return(
        
        // <BuildLayout saveFunction={submitForm}>
            //    { console.log(state.profile)}

        <div className="items-center gap-y-2" >
            <form >
                { alert?.show &&
                <div className="pb-2">
                    {Alert(alert.title, alert.message)}
                </div>
                }
            <div className="grid grid-cols-2 justify-items-stretch bg-white space-y-5 pb-2">
                <div className="col-span-2 items-center align-middle justify-items-end border-b-2 opacity-40 bg-blue-300 h-10 pr-28 py-2 mb-3 shadow-md">
                        <h4 className="text-black font-bold text-md text-left px-10">Profile</h4>
                        {/* <button type="button" className="px-4 bg-green-400 text-right align-middle" onClick={submitForm}>Save</button> */}
                </div>
                {/* <div className="px-10">
                    <div className="border border-gray-400 border-dashed h-5/6 w-4/6">
                        <label className="text-left">Upload Profile Photo</label>
                        <input type="file"></input>
                    </div>

                </div>  */}
                <div className="px-10 items-start justify-items-start space-y-3">
                    <div className="flex flex-col justify-start items-start">
                        <label className="font-bold text-sm text-gray-400">Job Title</label>
                        {validationErrors('job_title', 'Title')}
                        <div className="inline-flex items-start justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span> */}
                            <input  className="w-full h-8 pt-2 block  text-black text-sm font-bold focus:outline-none focus:bg-gray" value={formValues?.job_title}  placeholder="E.g. Full Stack Developer" {...register('job_title', { required: false, maxLength: 20 })} name="job_title"></input>
                        </div> 
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <label className="font-bold text-sm text-gray-400">Description</label>
                        {validationErrors('job_description', 'Description')}

                        <div className="inline-flex items-start justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span> */}
                            <textarea  className="w-full h-24  pt-2 block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.job_description}  placeholder="Tell about yourself!" {...register('job_description', {required: false, maxLength:100})}  name="job_description"></textarea>
                        </div> 
                    </div>
                </div>

            </div>  
            


            <div className="col-span-2  border-sky-900 bg-blue-900 h-0 pr-28 shadow-md"> </div>


            <div className="grid grid-cols-2 justify-items-stretch shadow-sm opacity-100 bg-white pt-4">

                {/* <div className="col-span-2 border-t-2 border-blue-900 shadow-md bg-white h-10 pt-2 pr-28">
                        <h4 className="text-blue-800 font-bold text-md text-left">Basic Information</h4>
                </div> */}

                <div className="px-10 space-y-2">       
                    <div className="flex flex-col items-start justify-center p-1">
                        
                            <label className="block font-bold text-sm text-gray-400">Name</label>
                            {validationErrors('first_name', 'First Name')}
                            {/* <label className="block text-red-600 font-bold text-md">{errors.first_name && "First name is required"}</label> */}
                        

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.name}  onMouseOver={submitForm} placeholder="" {...register('name', {required: false, maxLength:20})} name="name"></input>
                        </div>

                    </div>
                    {/* <div className="flex flex-col justify-center items-start p-1 w-full">
                       
                            <label className="block font-bold text-sm text-gray-400">Last Name</label>
                            {validationErrors('last_name', 'Last Name')}

                      

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounde h-8 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span> */}
                            {/* <input type="text" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.last_name}  {...register('last_name', {required: true, maxLength:20})} placeholder="Last Name" name="last_name"></input>
                        </div>

                    </div> */}

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-gray-400">Email</label>
                        {validationErrors('email', 'Email')}

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span> */}
                            <input type="text" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.email}  {...register('email', {required: false, maxLength:100, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} placeholder="" name="email"></input>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-gray-400">City</label>
                        {validationErrors('city', 'city')}

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-phone" aria-hidden="true"></i> </span> */}
                            <input type="tel" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.city}  {...register('city', {required: false, maxLength:20})}  placeholder="" name="city"></input>
                            {/* <input type="tel" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.phone}  {...register('phone', {required: true, minLength:9,maxLength:11})}  placeholder="Phone" name="phone"></input> */}
                        </div>
                       
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-gray-400">Date of Birth</label>
                        {validationErrors('dob', 'Date of Birth')}

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 pl-2 bg-white rounded h-8 pt-3"><i className="fa fa-calendar" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-8  rounded text-black text-sm font-bold focus:outline-none" value={formValues?.dob} {...register('dob', {required: false})}  placeholder="" name="dob"></input>
                        </div>
                    </div>
                </div> 

                
                <div className="px-10 space-y-2">

                   <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-gray-400">Phone</label>
                        {validationErrors('phone', 'Phone')}

                        <div className="inline-flex items-center justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-phone" aria-hidden="true"></i> </span> */}
                            <input type="tel" className="w-full h-8  block rounded text-black text-sm font-bold focus:outline-none" value={formValues?.phone}  {...register('phone', {required: false, maxLength:20, pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ })}  placeholder="" name="phone"></input>
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
                        {validationErrors('address', 'Address')}

                        <div className="inline-flex items-start justify-start w-full border-b-2">
                            {/* <span className="absolute w-8 bg-white rounded h-8 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span> */}
                            <textarea  className="w-full h-16  pt-2 block  text-black text-sm font-bold focus:outline-none" value={formValues?.address}  {...register('address', {required: false, maxLength:100})}  placeholder="" name="address"></textarea>
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

export default (Profile);
// export default Profile;