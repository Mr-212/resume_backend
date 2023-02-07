import React from "react"

const li_class = "text-black font-bold hover:text-lg transition ease-in-out duration-150 hover:scale-110 hover:underline hover:text-white";


export const Sidebar = () => {

    return(
        <div className="flex flex-row shadow-lg bg-gray-300 p-10 text-left h-screen max-h-screen">
            <div className="bg-black ml-5 w-1"></div>
            <ul className="space-y-6 pl-3">
                <li className={li_class}><a> Leads</a></li>
                <li className={li_class}><a> Cat</a></li>
                <li className={li_class}><a> Menu</a></li>
            </ul>
            
        </div>
    )

}


