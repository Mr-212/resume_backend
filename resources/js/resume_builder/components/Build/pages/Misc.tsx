import React, { useEffect, useState } from "react";




const Misc = () => {

}

const URLArray = [
    'Website',
    'Github',
    'LinkedIn',
    'Twitter',
];

export const AddURLOrWebsite = () => {

    const [values, setValue] = useState([]);


    const AddNewUrl = () => {

    };

    useEffect(() => {

    },[]);





    return(
        <>

            <div className="flex flex-col w-full justify-between">
                <div>
                    <button className="py-1.5 px-4 bg-gray-600 text-blue-400 shadow">Add Sociala/Website</button>
                </div>
                <div className="flex flex-row w-full gap-3">
                    <div className="flex flex-row shadow gap-3 w-3/4">

                        <select className="px-3 text-blue-400 text-md font-bold outline-none">
                            {URLArray.map((v,k) => 
                                <option className="text-md font-bold  text-gray-600" value={v}>{v}</option>

                        ) }
                        </select>
                    
                        <input className="h-8 w-2/3 text-blue-500 outline-none border-b overflow-y-auto"></input>
                        </div>
                    <div className="flex flex-row shadow justify-center gap-3 px-3 w-1/4">

                        <button className=" text-red-600"><i className="fa fa-minus"></i></button>
                        {/* <button className=" text-blue-900"><i className="fa fa-plus"></i></button> */}
                    </div> 

                </div>
                 
                  
            </div>
            
        </>
    )
}

