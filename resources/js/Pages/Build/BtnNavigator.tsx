
import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { usePage }  from "@inertiajs/react";


const modules = [
                "/dashboard/profile",
                "/dashboard/education",
            ];
// const urlArr= modules.reverse();            




const BtnNavigator = () => {

    
    const { url } = usePage();
    const [currentIndex, setIndex] = useState(modules.indexOf(url));

    const getLink = (index: number) => {
        console.log(currentIndex);
        // console.log(modules.indexOf(url));
        if(index > -1 && index < modules.length) return modules[index];
        else return modules[currentIndex];

     

    }

    const setLinkIndex = (index: number) => {
        if(index > -1 && index < modules.length) setIndex(index);
        // if(index < modules.length) setIndex(index)
        //if (index > modules.length) setIndex(modules.length -1);
        //if(index < 0) return setIndex(0);

    }

    return(
        <div className="flex flex-row items-center justify-center gap-3">
                <button type="button"  onClick={() => setLinkIndex(currentIndex-1)} className="transition ease-in-out duration-150  hover:bg-blue-500 hover:scale-110 px-6 p-2 bg-black text-white shadow-lg font-bold block focus:outline-blue-400 focus:outline" placeholder="Address" name="last_name"><Link  href={ getLink(currentIndex-1) }>Previous</Link></button>
                <button type="button" onClick={() => setLinkIndex(currentIndex+1)} className="transition ease-in-out duration-150  hover:bg-blue-500 hover:scale-110 px-10 p-2 bg-black text-white shadow-lg font-bold block focus:outline-blue-400 focus:outline" placeholder="Address" name="last_name"><Link href={ getLink(currentIndex+1) }>Next</Link></button>
        </div>
    )
}


export default BtnNavigator;