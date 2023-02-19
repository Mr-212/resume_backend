import React from "react";
import { usePage }  from "@inertiajs/react";
import { Link } from "@inertiajs/react";





const ResumeUrls = [
    {"Profile" :"/dashboard/profile"},
    {"Education" :"/dashboard/education"},
    {"Work History" :"" },
]


 const CreatePageUrl = () => {
    const { url } = usePage();


    const li_class = "shadow:sm font-sans text-white font-bold hover:text-sm transition ease-in-out duration-300 hover:scale-125 hover:scale-x-110";
    const active = "active shadow-md opacity-100 text-blue-500 font-bold text-lg  border-blue-500 scalle-100 transition ease-in-out duration-300";

    return(
        // <div className="">
              <nav className="flex justify-start pl-3 bg-black border-b-2 border-t-black ">
                <ul className="inline-flex items-center p-2 gap-x-5 ">
                    { ResumeUrls.map( (key,val) => {
                            return Object.entries(key).map( ([k,v]) => {
                                return(
                            
                                    <li className=""><span className="text-orange-500 font-bold text-lg pr-1">{val+1}</span><Link className={url === v ? active : li_class } href={v}>{k}</Link></li>
                                )
                            })
                        })
                    }
                </ul>

            </nav>

        // </div>
    )

}


export default CreatePageUrl;