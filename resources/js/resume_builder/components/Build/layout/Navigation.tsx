import React from "react";
import { Link } from "react-router-dom";
import { getUrlPath } from "../../hooks/GetLocation";

const ResumeUrls = [
    
    {"Profile" :"/"},
    {"Education" :"/education"},
    // {"Soft Skill" :""},
    {"Skill" :"/skills"},
    {"Work History" :"/experience" },
    {"Cirtifications" :"" },
]


 const CreatePageUrl = () => {
    const url = getUrlPath();
    const last_index = ResumeUrls.length;
    let line = "bg-black h-1 w-full";
    const li_class = "text-black font-bold hover:text-indigo-800 hover:text-xl transition-all ease-in-out delay-150 duration-300 ";
    const active = "active opacity-100 text-green-800 font-bold text-lg transition ease-in-out duration-300";

    return(
        <>
              <nav className="flex flex-row items-center justify-start border-b-2 p-2 pl-10 w-full">
                <ul className="inline-flex gap-x-8">
                    
                    { ResumeUrls.map( (val, key) => {
                        //const last_index = Object.keys(val).length;
                        // console.log(last_index, key)
                            return Object.entries(val).map( ([k,v]) => {
                                // url === v ? i = key : 0;

                                // if(i == 0) line ="bg-black h-1 w-full";
                                // if( i !== 0 && key < i+1  )  line = "bg-blue-400 h-1 w-full ";

                                // console.log(i,key, line);
                                return(
                                    <>
                                        <li className="" key={key}>
                                            {/* <span className="text-orange-500 font-bold text-lg pr-1">{val+1}</span> */}
                                            <Link className={ url === v ?  active : li_class } key={k} to={v}>{k}</Link>
                                        </li>
                                        {/* { key !==  last_index -1 ?
                                            // <span className={ key < last_index-1 ?  i < key && i > 0  ? "bg-black h-1 w-full" : "h-1 w-full bg-blue-400" : "bg-black h-1 w-full"}></span> : null
                                            <span  key={k} className={ line }></span> : null
                                        } */}
                                    </>
                                )
                            })
                        })
                    }
                </ul>
               

            </nav>
            <div className="flex flex-row items-center justify-end border-b-2 p-2 w-full">
                    <button type="button"  onClick={null} className="transition ease-in-out duration-150 hover:bg-green-700 hover:text-white hover:scale-110 px-4 p-1 text-blue-900 font-bold block focus:outline-blue-400 focus:outline" name="btn_save">Save</button>

            </div>

        </>
    )

}


export default CreatePageUrl;