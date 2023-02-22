import React from "react"
import { Link } from "react-router-dom";
// import { usePage }  from "@inertiajs/react";

const li_class = "shadow:sm font-sans text-white font-bold hover:text-lg transition ease-in-out duration-300 hover:scale-125 hover:scale-x-110";
const active = "active shadow-lg opacity-100 text-gray-500 font-bold text-xl border-b-2 border-blue-500 scalle-110 transition ease-in-out duration-300";

export const Sidebar = () => {

    // const  { url, component} = usePage();
    let url ="/dashboard/profile";
    { console.log('active '+li_class)}


    return(
        <div className="flex flex-row shadow-lg border-gray-700 bg-black p-10 text-left pl-14 h-screen max-h-screen ">
                
                <ul className="space-y-6 pl-3 ">
                    <li className={url === '/dashboard'? active: li_class}><Link to="/dashboard">Dashboard</Link></li>
                    <li className={url === '/dashboard/profile'? active: li_class}><Link to="/dashboard/profile">Basic Profile</Link></li>
                    <li className={url === '/dashboard/education'? active: li_class}><Link to="/dashboard/education">Education</Link></li>
                    <li className={url === '/dashboard/work_history'? active: li_class}><Link to="/dashboard/work_history">Work History</Link></li>
                    {/* <li className={li_class}><a> Cat</a></li> */}
                    {/* <li className={li_class}><a> Menu</a></li> */}
                </ul>
            
        </div>
    )

}


