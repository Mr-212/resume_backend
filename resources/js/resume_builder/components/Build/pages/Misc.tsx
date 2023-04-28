import React from "react";




const Misc = () => {

}

const URLArray = [
    'Website',
    'Github',
    'LinkedIn',
    'Twitter',
]

export const AddURLOrWebsite = () => {



    return(
        <>

            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row w-full gap-3">
                    <select className="shadow px-3 text-blue-400 text-md font-bold">
                        {URLArray.map((v,k) => 
                            <option className="text-blue-400" value={v}>{v}</option>

                       ) }
                    </select>
                    
                    <input className="shadow h-8  w-full text-blue-500 outline-none border-b"></input>
                    <div className="flex flex-row shadow justify-center gap-3 px-3">

                        <button className=" text-red-600"><i className="fa fa-minus"></i></button>
                        <button className=" text-blue-900"><i className="fa fa-plus"></i></button>
                    </div> 

                </div>
                 
                  
            </div>
            
        </>
    )
}

