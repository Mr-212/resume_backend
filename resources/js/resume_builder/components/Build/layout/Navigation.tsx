import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { getUrlPath } from "../../hooks/GetLocation";
// import { profile_id } from "../reducers/profileReducer";

// const ResumeUrls = [
    
//     {"Profile" :"/"},
//     {"Education" :"/education"},
//     // {"Soft Skill" :""},
//     {"Skill" :"/skills"},
//     {"Work History" :"/experience" },
//     {"Cirtifications" :"" },
// ]
const ResumeUrls = {
    
    "Profile" : "/profile",
    "Personality Traits" :"/softskills",

    "Education" :"/education",
    // {"Soft Skill" :""},

    "Skill" :"/skills",
    "Work History" :"/experience" ,
    // "Cirtifications" :"" ,
}


 const ResumeMenuBar = (props) => {
    const profile_id = useAppSelector(state=>state.profile.profile_id)

    const url = getUrlPath();
    // console.log(props.match);
    // const last_index = ResumeUrls.length;
    let line = "bg-black h-1 w-full";
    const li_class = "text-white font-bold hover:text-green-800 hover:text-sm transition-all ease-in-out delay-150 duration-150 ";
    const active = "active opacity-100 px-3 py-2.5 bg-gray-200 text-green-600 font-bold text-md transition-all ease-in-out duration-150";

    return(
        <div className="flex flex-row justify-between p-2 w-full items-center">
              <nav className="flex flex-row items-center justify-between px-10 w-full">
                <ul className="inline-flex justify-between gap-8 text-sm">
                    
                    { 
                        //const last_index = Object.keys(val).length;
                        // console.log(last_index, key)
                            Object.entries(ResumeUrls).map( ([k,v]) => {
                                // url === v ? i = key : 0;

                                // if(i == 0) line ="bg-black h-1 w-full";
                                // if( i !== 0 && key < i+1  )  line = "bg-blue-400 h-1 w-full ";

                                // console.log(k, v);
                                const urlPath = '/resume/'+ profile_id + v ;
                                // console.log(urlPath)

                                return(
                                    <div key={k}>
                                        <li className="" key={k}>
                                            {/* <span className="text-orange-500 font-bold text-lg pr-1">{val+1}</span> */}
                                            <Link className={ url === urlPath?  active : li_class }  to={profile_id+v}>{k}</Link>
                                            {/* <Link className={ url === v ?  active : li_class }  to={v}>{k}</Link> */}
                                        </li>
                                        {/* { key !==  last_index -1 ?
                                            // <span className={ key < last_index-1 ?  i < key && i > 0  ? "bg-black h-1 w-full" : "h-1 w-full bg-blue-400" : "bg-black h-1 w-full"}></span> : null
                                            <span  key={k} className={ line }></span> : null
                                        } */}
                                    </div>
                                )
                            })
                    }
                </ul>
               

            </nav>
            {/* <div className="flex flex-row items-center justify-end  w-1/3">
                    <button type="button"  onClick={null} className="transition ease-in-out duration-150 hover:bg-blue-700 font-bold text-green-400 hover:text-white hover:scale-110 px-4 p-1font-bold block focus:outline-blue-400 focus:outline" name="btn_save">Save</button>

            </div> */}

        </div>
    )

}


export default ResumeMenuBar;