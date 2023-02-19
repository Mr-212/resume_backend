import React from "react"
import Dashboard from "../Dashboard/Index";
import BtnNavigator from "./BtnNavigator";
import Profile from "./Profile";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/react";
import CreatePageUrl from "./Navigation";


interface Props {
    children: React.ReactNode,
}






const BuildLayout = ( { children }: Props ) => {

    return(
        <div className="flex flex-col items-center gap-y-5">
            <div className="pt-3 w-full">
                {CreatePageUrl()}
            </div>
            <div className="w-4/5">
                {children}
            </div>
            <div className="w-4/5  static  b-0">
                 <BtnNavigator></BtnNavigator>
            </div>
           
          
        </div>
    )

}


// BuildLayout.layout = p => <Dashboard children={p}></Dashboard>


export default BuildLayout;