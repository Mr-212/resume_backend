import React from "react";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react"
import { Sidebar } from "./Sidebar";
import { JsxElement } from "typescript";



interface Props {
    children: React.ReactNode,
}


const Dashboard:  React.FC<Props> = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // const d = router.get('/dashboard');

    },[]);

    return(
        <div className="">
            <nav className="flex flex-row shadow-lg bg-black h-16 items-center justify-end">
                
                <div className="basis-1/5 items-center justify-center  h-8 bg-white border-2 border-x-blue-400">
                    <h3 className="pl-14 font-bold italic text-left text-lg">+ResumePlus</h3>
                </div>

                <div className="basis-4/5 items-end justify-end justify-items-end float-right">
                    <button className="float-right mr-10 bg-slate-500 px-4 py-1 shadow-sm text-white font-bold transition ease-linear duration-300 hover:scale-110 hover:bg-blue-500">Create+</button>
                </div>

            </nav>
            <div className="flex flex-row">
                <div className="w-1/5 max-h-screen h-screen">
                    <Sidebar></Sidebar>
                </div>

                <div className="w-4/5 bg-gray h-screen">
                    { children }
                </div>

            </div>
        </div>
    )

}


export default Dashboard;