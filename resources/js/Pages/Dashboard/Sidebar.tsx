import { Link } from "@inertiajs/react";
import React from "react"

const li_class = "text-black font-bold hover:text-lg transition ease-in-out duration-300 hover:scale-125 hover:scale-x-100 hover:text-slate-900 border-b-2 border-slate-500";


export const Sidebar = () => {

    return(
        <div className="flex flex-row shadow-lg bg-slate-100 p-10 text-left h-screen max-h-screen ">
            {/* <div className="bg-black ml-5 w-1"></div> */}
                
                <ul className="space-y-6 pl-3 ">
                    <li className={li_class}><Link href="/dashboard">Dashboard</Link></li>
                    <li className={li_class}><Link href="/input">Input</Link></li>
                    <li className={li_class}><Link href="/login">Login</Link></li>
                    <li className={li_class}><a> Cat</a></li>
                    <li className={li_class}><a> Menu</a></li>
                </ul>
            
        </div>
    )

}


