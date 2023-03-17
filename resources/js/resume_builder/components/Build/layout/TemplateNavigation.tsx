import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUrlPath } from "../../hooks/GetLocation";
import TemplateBasic from "../templates/basic";
import TemplateBasic_1 from "../templates/basic-1";

const Templates = {
    
  'Basic':  <TemplateBasic />,
  'Dark':<TemplateBasic_1 />
}





 const TemplateNavigation = () => {
    const[template, selectTemplate ] = useState(<TemplateBasic/>)

    const url = getUrlPath();
    // const last_index = Templates.length;
    let line = "bg-black h-1 w-full";
    const li_class = "text-black font-bold hover:text-indigo-800 hover:text-xl transition-all ease-in-out delay-150 duration-300 ";
    const active = "active opacity-100 text-green-800 font-bold text-lg transition ease-in-out duration-300";

    return(
        <div className="space-y-4 ">
              <div className="flex flex-row border-b-2 w-full bg-gray-200  opacity-100 text-blue-800 font-bold text-md p-3">
                {/* <div className="flex flex-row justify-center gap-x-3"> */}
                    { Object.entries(Templates).map( ([key, val]) => {
                        // console.log(val, key)
                            return(
                              <div className={"flex flex-row justify-center w-full active "} onClick={()=> selectTemplate(val)}><a>{key}</a></div>
                            )
                            
                        })
                    }
                {/* </div> */}
            </div>
            <div className="w-full h-screen overflow-y-auto overflow-y-auto">
                    {template}

            </div>
        </div>
    )

}


export default TemplateNavigation;