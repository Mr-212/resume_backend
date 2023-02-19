import React from "react";
import Dashboard from "../Dashboard/Index";
import BuildLayout from "./BuildLayout";

const Profile = () => {
    
    return(
        
        <div className="border columns-1 bg-gray pb-20 p-5 text-center">
            <div className="border-y-2 border-blue-400 shadow:lg bg-white h-16 pt-4">
                <h4 className="pl-10 text-left text-black font-bold text-lg">Basic Info</h4>
            </div>


            <div className="pt-10 pl-20 grid grid-cols-2 w-full justify-items-stretch">

                <div className="flex flex-col grow justify-center space-y-4">
                   
                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <div className="">
                        <label className="block font-bold text-sm text-black">Name</label>


                        </div>

                        <div className="inline-flex items-center justify-start w-5/6">
                            <span className="absolute w-8 bg-white rounde h-10 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-10 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Name" name="last_name"></input>
                        </div>

                    </div>
                    
                     {/* <div className="flex flex-col justify-center items-start p-1 w-full w-full">
                        <label className="block font-bold text-sm text-black">Last Name</label>
                        <input className="w-full h-10 bg-gray w-5/6 p-5 rounded text-black focus:outline-blue-400 focus:outline" name="last_name"></input>
                    </div> */}

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Email</label>
                        <div className="inline-flex items-center justify-start w-5/6">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-10 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Email" name="last_name"></input>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Phone</label>
                        <div className="inline-flex items-center justify-start w-5/6">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa fa-phone" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-10 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Phone" name="last_name"></input>
                        </div>
                       
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">Date of Birth</label>
                        <div className="inline-flex items-center justify-start w-5/6">
                            {/* <span className="absolute w-8 pl-2 bg-white rounded h-10 pt-3"><i className="fa fa-calendar" aria-hidden="true"></i> </span> */}
                            <input type="date" className="w-full h-10 pl-8 rounded text-black focus:outline-blue-400 focus:outline"  placeholder="Date of birth" name="last_name"></input>
                        </div>
                    </div>
                </div> 

                
                <div className="flex flex-col grow  gap-y-4">

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                        <label className="block font-bold text-sm text-black">LinkedIn</label>
                        <div className="inline-flex items-center justify-start w-5/6">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa-brands fa-linkedin" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-10 pl-8 block rounded-sm text-black focus:outline-blue-400 focus:outline" placeholder="LinkedIn URL" name="last_name"></input>
                        </div> 
                        
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                   
                        <label className="block font-bold text-sm text-black">Github</label>
                        
                        <div className="inline-flex items-center justify-start w-5/6">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa-brands fa-github" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-10 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Github URL" name="last_name"></input>
                        </div> 
                    </div>

                    <div className="flex flex-col justify-center items-start p-1 w-full">
                   
                        <label className="block font-bold text-sm text-black">Twitter</label>
                        
                        <div className="inline-flex items-center justify-start w-5/6">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa-brands fa-twitter" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-10 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Twitter" name="last_name"></input>
                        </div> 
                    </div>

                </div> 

                <div className="col-span-2 pr-24 p-1">
                {/* <div className="flex flex-row items-center justify-center w-full"> */}
                    <div className="flex flex-col items-start w-full gap-2">
                        <label className="block font-bold text-sm text-black">Address</label>
                        <div className="inline-flex items-start justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <textarea  className="w-full h-24 pl-8 pt-2 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Address" name="last_name"></textarea>
                        </div> 

                    </div>
                {/* </div>   */}
               </div>

                            

               <div className="col-span-2 pr-24 p-1 pt-5">
               <div className="border-b-2  pr-24 border-blue-200"></div>

                    <div className="flex flex-col items-start w-full gap-2 pt-5">
                        <label className="block font-bold text-xl italic text-blue-700">Objectives ? / Goals </label>
                        <div className="inline-flex items-start justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <textarea  className="w-full h-24 pl-8 pt-2 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Address" name="last_name"></textarea>
                        </div> 
                    </div>
                </div>

            </div>


            

           

          

        </div>
    )
}

Profile.layout = page =>  <Dashboard><BuildLayout children={ page }></BuildLayout></Dashboard>;

export default Profile;