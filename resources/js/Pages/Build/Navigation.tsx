import React from "react";
import { usePage }  from "@inertiajs/react";
import { Link } from "@inertiajs/react";





const ResumeUrls = [
    
    {"Profile" :"/dashboard/profile"},
    {"Education" :"/dashboard/education"},
    {"Soft Skill" :""},
    {"Technical Skill" :""},
    {"Work History" :"" },
    {"Cirtifications" :"" },
]


 const CreatePageUrl = () => {
    const { url } = usePage();
    const last_index = ResumeUrls.length;
    let i = 0;
    let line = "bg-black h-1 w-full";

    const li_class = "shadow:sm font-sans text-black font-bold hover:text-sm transition ease-in-out duration-300 hover:scale-125 hover:scale-x-110";
    const active = "active shadow-lg opacity-500 text-blue-500 font-bold text-lg  border-blue-500 scalle-100 transition ease-in-out duration-300";

    return(
        // <div className="">
              <nav className="flex flex-row pl-10 bg-gray-200 border-b-2 border-t-black p-2">
                <ul className="inline-flex items-center justify-evenly gap-x-8 w-full">
                    
                    { ResumeUrls.map( (val ,key) => {
                        //const last_index = Object.keys(val).length;
                        // console.log(last_index, key)
                            return Object.entries(val).map( ([k,v]) => {
                                url === v ? i = key : 0;

                                // if(i == 0) line ="bg-black h-1 w-full";
                                // if( i !== 0 && key < i+1  )  line = "bg-blue-400 h-1 w-full ";

                                console.log(i,key, line);
                                return(
                                    <>
                                        <li className="">
                                            {/* <span className="text-orange-500 font-bold text-lg pr-1">{val+1}</span> */}
                                            <Link className={url === v ?  active : li_class } href={v}>{k}</Link>
                                        </li>
                                        { key !==  last_index -1 ?

                                            // <span className={ key < last_index-1 ?  i < key && i > 0  ? "bg-black h-1 w-full" : "h-1 w-full bg-blue-400" : "bg-black h-1 w-full"}></span> : null
                                            <span className={ line }></span> : null
                                        }
                                    </>
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