import React, { ComponentProps } from "react";
import Dashboard from "../Dashboard/Index";
import BtnNavigator from "./BtnNavigator";
import BuildLayout from "./BuildLayout";
import CreatePageUrl from "./Navigation";

interface Props {
    handleSubmit?: () => void
}


 export const WithHOC = (Component: any) => { 
    
    return  (props) => {
            console.log(props)
            return (
                // <Dashboard>
                <>
                    {/* <BuildLayout {...props}>
                        <Component {...props}></Component>
                    </BuildLayout> */}


            {/* <div className="flex flex-col items-center gap-y-5">
                <div className="pt-3 w-full">
                    <CreatePageUrl />
                </div>
                <div className="w-4/5">
                   <Component {...props}></Component>
                </div>
                <div className="w-4/5  static  b-0">
                    <BtnNavigator saveFunction={props?.handleSubmit}></BtnNavigator>
                </div>
            </div> */}
                </>    
                // </Dashboard>
            )
    }

}

