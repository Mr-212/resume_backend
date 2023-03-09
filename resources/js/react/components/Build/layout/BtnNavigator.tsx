
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUrlPath } from "../../hooks/GetLocation";


const modules = [
                "/dashboard/profile",
                "/dashboard/education",
            ];
// const urlArr= modules.reverse();   
interface BtnInterface {
    saveFunction: object
}         




const BtnNavigator = ({saveFunction}: any) => {

    
    const  url  = getUrlPath()
    const [currentIndex, setIndex] = useState(modules.indexOf(url));

    const getLink = (index: number) => {
        // console.log(currentIndex);
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
        <div className="flex flex-row items-end justify-end gap-3">
                <button type="button"  onClick={() => setLinkIndex(currentIndex-1)} className="transition ease-in-out duration-150  hover:bg-slate-400 hover:text-white hover:scale-110 px-4 p-1  text-indigo-600 shadow-md font-bold  focus:outline-blue-400 focus:outline" placeholder="Address" name=""><Link  to={ getLink(currentIndex-1) }>Previous</Link></button>
                <button type="button"  onClick={() => setLinkIndex(currentIndex+1)} className="transition ease-in-out duration-150  hover:bg-slate-400 hover:text-white hover:scale-110 px-4 p-1  text-indigo-600 shadow-md font-bold  focus:outline-blue-400 focus:outline" placeholder="Address" name=""><Link to={ getLink(currentIndex+1) }>Next</Link></button>
                <button type="button"  onClick={saveFunction} className="transition ease-in-out duration-150  hover:bg-green-500 hover:text-white hover:scale-110 px-4 p-1 text-black shadow-lg font-bold block focus:outline-blue-400 focus:outline" name="btn_save">Save</button>
        </div>
    )
}


export default BtnNavigator;