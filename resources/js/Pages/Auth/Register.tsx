import React from "react";

const Register = () => {


    return(
        
        <div className="container mx-auto flex flex-row gap-3 p-4 h-3/4">
            {/* <div className="w-2/3 bg-white shadow-md rounded-tr-lg border-r-4 border-b-4 ">
                <div></div>

            </div> */}
            <div className="w-full shadow:md bg-gray rounded-tr-lg border-b-4 border-x-4 max-h-min">
                <div className="h-16 w-full bg-slate-400 pt-5">
                    <h3 className="font-bold text-xl text-white hover:text-sky-500">Register</h3>
                </div>

                <div className="flex flex-col py-10 px-20 justify-center align-middle space-y-5">
                    <div className="flex flex-col">
                            <label className="block text-left font-bold">First Name</label>
                            <input type="text" className="p-3 bg-gray-200 shadow-sm h-10 focus:outline-none"></input>
                    </div>
                    <div className="flex flex-col">
                            <label className="block text-left font-bold">Last Name</label>
                            <input type="text" className="p-3 bg-gray-200 shadow-sm h-10 focus:outline-none"></input>
                    </div>
                    <div className="flex flex-col">
                            <label className="block text-left font-bold">Email</label>
                            <input type="text" className="p-3 bg-gray-200 shadow-sm h-10 focus:outline-none"></input>
                    </div>

                    <div className="flex flex-col">
                            <label className="block text-left font-bold">Password</label>
                            <input type="text" className="p-3 leading-tight  bg-gray-200 shadow-sm h-10 focus:outline-none focus:border-indigo-500"></input>
                    </div>
                    <div className="flex flex-col space-y-5 ">
                            <button type="button" className="py-2 px-8  text-center align-middle bg-blue-500 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150  text-white font-bold shadow-lg h-10">Register</button>
                    </div>

                    {/* <div className="flex flex-row justify-between border-t-slate-200 border-t-2 pt-10 space-x-5">
                            <button type="button" className="py-2 px-8 w-full  text-center align-middle bg-gray-400 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150  text-white font-bold shadow-lg h-10">Github</button>
                            <button type="button" className="py-2 px-8 w-full  text-center align-middle bg-red-400 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150  text-white font-bold shadow-lg h-10">Google</button>
                    </div> */}
                </div>

            </div>
        </div>
    )

}

export default Register;