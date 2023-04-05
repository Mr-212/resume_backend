import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getUrlPath } from "../../hooks/GetLocation";
import TemplateBasic from "../templates/basic";
import TemplateBasic_1 from "../templates/basic-1";
import ResumeMenuBar from "./Navigation";







 const BuilderNavigation = () => {




    return(
        <div className="flex flex-col space-y-2">
            <div className="flex flex-col">
                <div className="flex flex-row w-full bg-slate-600 shadow-lg rounded-full opacity-100 text-gray-900 font-bold">
                        <ResumeMenuBar />
                </div>
            </div>
            <div className="w-full rounded-full">
                    <Outlet />
            </div>
        </div>
    )

}


export default BuilderNavigation;