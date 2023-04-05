import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getUrlPath } from "../../hooks/GetLocation";
import TemplateBasic from "../templates/basic";
import TemplateBasic_1 from "../templates/basic-1";
import ResumeMenuBar from "./Navigation";







 const BuilderNavigation = () => {




    return(
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="flex flex-row border-b-2 w-full bg-slate-200 shadow-md opacity-100 text-blue-800 font-bold p-1">
                        <ResumeMenuBar />
                </div>
            </div>
            <div className="w-full">
                    <Outlet />
            </div>
        </div>
    )

}


export default BuilderNavigation;