import React from "react"
import Dashboard from "../Dashboard/Index";
import BtnNavigator from "./BtnNavigator";
// import Profile from "./Profile";
import CreatePageUrl from "./Navigation";


interface Props {
    children: React.ReactNode,
    //saveFunction ?: string
}






const BuildLayout = ( { children, saveFunction }: any )  => {

    return(
        // <Dashboard>
            <div className="flex flex-col justify-center gap-y-2">
                <div className="pt-3 w-full">
                    <CreatePageUrl />
                </div>
                <div className="w-full items-end text-right static  b-0">
                    <BtnNavigator saveFunction={saveFunction}></BtnNavigator>
                </div>
                <div className="w-full">
                    { children }
                </div>
              
            </div>
        // </Dashboard>
    )

}

export default BuildLayout;