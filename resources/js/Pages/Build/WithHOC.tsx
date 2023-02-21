import React, { ComponentProps } from "react";
import Dashboard from "../Dashboard/Index";
import BuildLayout from "./BuildLayout";

interface Props {
    handleSubmit?: () => void
}


 export const WithHOC = <T extends object>(Component: React.ComponentType): React.FC<T> => (  props : any) => {

    console.log(props)

    return (
        <Dashboard>
            <BuildLayout saveFunction={props.handleSubmit}>
                <Component {...props}></Component>
            </BuildLayout>
        </Dashboard>
    )

}

