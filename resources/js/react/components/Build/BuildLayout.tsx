import React from "react"
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Index";
import BtnNavigator from "./layout/BtnNavigator";
import Education from "./pages/Education";
// import Profile from "./Profile";
import CreatePageUrl from "./layout/Navigation";
import Profile from "./pages/Profile";


interface Props {
    children: React.ReactNode,
    //saveFunction ?: string
}






const BuildLayout = ( { children, saveFunction }: any )  => {

    return(
        // <Dashboard>
            <div className="grid grid-cols-2 justify-center gap-y-2 px-10 overflow-auto">
                <div className="gap-y-4 space-y-2">
                    <CreatePageUrl />
                    <BtnNavigator saveFunction={saveFunction}></BtnNavigator>  
                    <div className="border border-slate-400 shadow-sm">
                        <Profile></Profile>
                        <Education></Education>
                         {/* <Outlet /> */}
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