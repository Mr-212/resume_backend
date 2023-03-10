import React from "react"
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Index";
import BtnNavigator from "./layout/BtnNavigator";
import Education from "./pages/Education";
// import Profile from "./Profile";
import CreatePageUrl from "./layout/Navigation";
import Profile from "./pages/Profile";
import TemplateBasic from "./templates/basic";


interface Props {
    children: React.ReactNode,
    //saveFunction ?: string
}






const BuildLayout = ( { children, saveFunction }: any )  => {

    return(
        // <Dashboard>
            <div className="grid grid-cols-2 justify-center  space-x-2 overflow-y-auto p-5">
                <div className="gap-y-4 space-y-2">
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
               
                <div className="w-full h-screen  px-5 py-10">
                    <TemplateBasic></TemplateBasic>
                </div>
              
            </div>
        // </Dashboard>
    )

}

export default BuildLayout;