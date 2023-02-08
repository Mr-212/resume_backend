import React from "react";
import Dashboard from "../Dashboard/Index";

const Input = () => {
    
    return(
        
        <div className="shadow:lg border bg-gray pb-20">
            <div className="bg-slate-500 h-16 text-left pt-4 pl-20">
                <h4 className="text-white font-bold text-sm">Add</h4>
            </div>


            <div className="">


            </div>

            <div className="pt-10 pl-5 space-y-10 text-center">
                <div className="flex flex-row space-x-2">
                    <div className="flex flex-col items-start">
                        <label className="block font-bold text-sm text-black">Name</label>
                        <input className="h-8 bg-gray p-5 rounded text-black focus:outline-red-400 focus:outline border-separate" name="first_name"></input>
                    </div>
                    
                     {/* <div className="flex flex-col items-start w-full">
                        <label className="block font-bold text-sm text-black">Last Name</label>
                        <input className="h-10 bg-gray w-3/4 p-5 rounded text-black focus:outline-red-400 focus:outline" name="last_name"></input>
                    </div> */}

                    <div className="flex flex-col items-start">
                        <label className="block font-bold text-sm text-black">Email</label>
                        <input className="h-8 bg-gray p-5 rounded text-black focus:outline-red-400 focus:outline" name="last_name"></input>
                    </div>

                    <div className="flex flex-col items-start">
                        <label className="block font-bold text-sm text-black">Phone</label>
                        <input className="h-8 bg-gray p-5 rounded text-black focus:outline-red-400 focus:outline" name="last_name"></input>
                    </div>

                </div>    

                <div className="flex flex-row justify-center space-x-3">

                  

                    <div className="flex flex-col items-start w-full">
                        <label className="block font-bold text-sm text-black">Objectivs</label>
                        <textarea className="h-28 bg-gray w-3/4 p-5 rounded text-black focus:outline-red-400 focus:outline" name="last_name"></textarea>
                    </div>
                </div>

            </div>

        </div>
    )
}

Input.layout = page =>  <Dashboard children={ page }></Dashboard>;

export default Input;