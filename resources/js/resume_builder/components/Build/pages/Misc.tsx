import React, { useEffect, useState } from "react";




const Misc = () => {

}

const URLArray = [
    'Website',
    'Github',
    'LinkedIn',
    'Twitter',
];


const social = { name: 'Website', value: "https::/google.com" }

export const AddURLOrWebsite = () => {

    const [values, setValue] = useState([]);


    const AddNewUrl = () => {
        setValue([...values, social]);
    };

    useEffect(() => {

    }, []);


    const removeUrl = () => {

    }


    return(
        <>
            <div className="flex flex-col w-full justify-between">
                <div>
                    <button className="py-1.5 px-4 bg-gray-600 text-blue-400 shadow" onClick={() => AddNewUrl()}>Add Social/Website</button>
                </div>
                <div className="flex flex-col w-full gap-2">

                { values.map((val, key) => 
                //     <div className="flex flex-row w-full py-2" key={key}>
                //     <div className="flex flex-row gap-3 w-3/4">

                //         <select className="px-3 text-blue-400 text-md font-bold outline-none">
                //             {URLArray.map((v,k) => 
                //                 <option className="text-md font-bold  text-gray-600" value={val['name']}>{v}</option>

                //             )}
                //         </select>
                    
                //         <input className="pl-4 h-8 w-2/3 text-blue-500 outline-none border-b overflow-y-auto" value={val['value']}></input>

                //     </div>
                //     <div className="flex flex-row  justify-center gap-3 px-3 w-1/4">

                //         <button className="text-red-600"><i className="fa fa-minus"></i></button>
                //     </div> 

                // </div>
                <AddURLOrWebsiteComponent data={val} key={key}></AddURLOrWebsiteComponent>
                )
            }
            </div>

                            
            </div>
            
        </>
    )
}


const AddURLOrWebsiteComponent = ({data}) => {
    // console.log(data)

    const [value, setValue] = useState(data.value);

    return(
        <div className="flex flex-row w-full py-2" key={data.name}>
        <div className="flex flex-row gap-3 w-3/4">

            <select className="px-3 text-blue-400 text-md font-bold outline-none">
                {URLArray.map((v,k) => 
                    <option className="text-md font-bold  text-gray-600" value={data.name}>{v}</option>
                )}
            </select>
        
            <input className="pl-4 h-8 w-2/3 text-blue-500 outline-none border-b overflow-y-auto" value={value} onChange={e=>setValue(e.currentTarget.value)}></input>

        </div>
        <div className="flex flex-row  justify-center gap-3 px-3 w-1/4">
            <button className="text-red-600"><i className="fa fa-minus"></i></button>
        </div> 
    </div>
    )
}

