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
            <nav className="flex flex-row shadow-lg bg-black h-16">
                
                <div className="basis-1/2 h-full">
                    <h3 className="bg-white">LOGO</h3>
                </div>

                <div className="basis-1/2 items-end justify-end align-bottom">
                    <button className="bg-slate-500 px-4 py-1 shadow-sm text-white font-bold transition ease-linear duration-300 hover:scale-110">Create+</button>
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