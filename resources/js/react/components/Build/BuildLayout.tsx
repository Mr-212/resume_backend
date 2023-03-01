import React from "react"
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Index";
import BtnNavigator from "./BtnNavigator";
import Education from "./Education";
// import Profile from "./Profile";
import CreatePageUrl from "./Navigation";
import Profile from "./Profile";


interface Props {
    children: React.ReactNode,
    //saveFunction ?: string
}






const BuildLayout = ( { children, saveFunction }: any )  => {

    return(
        // <Dashboard>
            <div className="grid grid-cols-2 justify-center gap-y-2 px-10">
                <div className="">
                    <CreatePageUrl />
                    <BtnNavigator saveFunction={saveFunction}></BtnNavigator>  
                    <div className="">
                        {/* <Profile></Profile> */}
                        {/* <Education></Education> */}
                         <Outlet />
                        { children } 
                </div>
                </div>
                {/* <div className="w-full items-end text-right static  b-0">
                    <BtnNavigator saveFunction={saveFunction}></BtnNavigator>
                </div> */}
               
                <div className="w-full">

                </div>
              
            </div>
        // </Dashboard>
    )

}

export default BuildLayout;