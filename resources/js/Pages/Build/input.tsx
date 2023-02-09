import React from "react";
import Dashboard from "../Dashboard/Index";

const Input = () => {
    
    return(
        
        <div className="shadow:lg border bg-gray pb-20 p-4">
            <div className="bg-slate-500 h-16 text-left pt-4 pl-20">
                <h4 className="text-white font-bold text-sm">Add</h4>
            </div>


            <div className="">


            </div>

            <div className="pt-10 pl-5 grid grid-cols-2 justify-conter-start items-start gap-y-5">



                <div className="flex flex-col items-start justify-center w-full gap-y-5">
                   
                    <div className="flex flex-col items-start">
                        <label className="block font-bold text-sm text-black">Name</label>

                        <div className="inline-flex items-center justify-start">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa fa-user-circle" aria-hidden="true"></i> </span>
                            <input type="text" className="h-10 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Name" name="last_name"></input>
                        </div>

                    </div>
                    
                     {/* <div className="flex flex-col items-start w-full">
                        <label className="block font-bold text-sm text-black">Last Name</label>
                        <input className="h-10 bg-gray w-3/4 p-5 rounded text-black focus:outline-blue-400 focus:outline" name="last_name"></input>
                    </div> */}

                    <div className="flex flex-col items-start">
                        <label className="block font-bold text-sm text-black">Email</label>
                        <div className="inline-flex items-center justify-start">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa fa-envelope" aria-hidden="true"></i> </span>
                            <input type="text" className="h-10 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Email" name="last_name"></input>
                        </div>
                    </div>

                    <div className="flex flex-col items-start">
                        <label className="block font-bold text-sm text-black">Phone</label>
                        <div className="inline-flex items-center justify-start">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa fa-phone" aria-hidden="true"></i> </span>
                            <input type="text" className="h-10 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Phone" name="last_name"></input>
                        </div>
                       
                    </div>
                </div> 

                
                <div className="flex flex-col items-start justify-center w-full gap-y-4">

                    <div className="flex flex-col items-start">
                        <label className="block font-bold text-sm text-black">LinkedIn</label>
                        <div className="inline-flex items-center justify-start">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa-brands fa-linkedin" aria-hidden="true"></i> </span>
                            <input type="text" className="h-10 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="LinkedIn URL" name="last_name"></input>
                        </div> 
                        
                    </div>

                    <div className="flex flex-col items-start">
                   
                        <label className="block font-bold text-sm text-black">Github</label>
                        
                        <div className="inline-flex items-center justify-start">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa-brands fa-github" aria-hidden="true"></i> </span>
                            <input type="text" className="h-10 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Github URL" name="last_name"></input>
                        </div> 
                    </div>

                    <div className="flex flex-col items-start">
                   
                        <label className="block font-bold text-sm text-black">Twitter</label>
                        
                        <div className="inline-flex items-center justify-start">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa-brands fa-twitter" aria-hidden="true"></i> </span>
                            <input type="text" className="h-10 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Twitter" name="last_name"></input>
                        </div> 
                    </div>

                </div> 



                <div className="col-span-2 items-start justify-start">
                    <div className="flex flex-col items-start w-full">
                        
                        <label className="block font-bold text-sm text-black">Address</label>
                        <div className="inline-flex items-center justify-start w-full">
                            <span className="absolute w-8 bg-white rounded h-10 pt-3"><i className="fa fa-address-book" aria-hidden="true"></i> </span>
                            <input type="text" className="w-full h-24 pl-8 block rounded text-black focus:outline-blue-400 focus:outline" placeholder="Address" name="last_name"></input>
                        </div> 

                    </div>
                </div>    


             {/* <div className="flex flex-row w-full">
                    <div className="flex flex-col items-start w-full">
                        <label className="block font-bold text-sm text-black">Objectivs</label>
                        <textarea className="h-28 bg-gray w-3/4 p-5 rounded text-black focus:outline-blue-400 focus:outline" name="last_name"></textarea>
                    </div>
             </div> */}

            </div>

          

        </div>
    )
}

Input.layout = page =>  <Dashboard children={ page }></Dashboard>;

export default Input;