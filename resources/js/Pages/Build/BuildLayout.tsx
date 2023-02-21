import React from "react"
import Dashboard from "../Dashboard/Index";
import BtnNavigator from "./BtnNavigator";
// import Profile from "./Profile";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/react";
import CreatePageUrl from "./Navigation";


interface Props {
    children: React.ReactNode,
    //saveFunction ?: string
}






const BuildLayout = ( { children, saveFunction }: any ) => {

    return(
        // <Dashboard>
            <div className="flex flex-col items-center gap-y-5">
                <div className="pt-3 w-full">
                    {CreatePageUrl()}
                </div>
                <div className="w-4/5">
                    {children}
                </div>
                <div className="w-4/5  static  b-0">
                    <BtnNavigator saveFunction={saveFunction}></BtnNavigator>
                </div>
            
            
            </div>
        // </Dashboard>
    )

}


// BuildLayout.layout = page => <Dashboard children={page}></Dashboard>;


export default BuildLayout;