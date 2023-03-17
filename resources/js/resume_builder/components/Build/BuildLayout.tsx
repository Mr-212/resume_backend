import React, { useEffect } from "react"
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Index";
import BtnNavigator from "./layout/BtnNavigator";
import Education from "./pages/Education";
// import Profile from "./Profile";
import CreatePageUrl from "./layout/Navigation";
import Profile from "./pages/Profile";
import TemplateBasic from "./templates/basic";
import { getProfile } from "./reducers/profileReducer";
import { getEducation } from "./reducers/educationReducer";
import { useAppDispatch } from "../../store/store";
import { getProfileSkills } from "./reducers/skillReducer";
import { getExperience } from "./reducers/experienceReducer";
import TemplateBasic_1 from "./templates/basic-1";
import TemplateNavigation from "./layout/TemplateNavigation";


interface Props {
    children: React.ReactNode,
    //saveFunction ?: string
}









const BuildLayout = ( { children, saveFunction }: any )  => {
    const dispatch = useAppDispatch();

    useEffect(()=>{

        const profile_id = "11aa6084-a71c-4602-98db-bc4617704979";
        dispatch(getProfile(profile_id));
        dispatch(getEducation());
        dispatch(getProfileSkills(profile_id));
        dispatch(getExperience(profile_id));
    },[]);

    return(
        <>

        <div className="fixed justify-center space-x-2 px-5 w-full pr-5">
            <div className="grid grid-cols-2">
                <CreatePageUrl />
            </div>
            <div className="grid grid-cols-2">

            </div>
           

        </div>
            <div className="grid grid-cols-2 justify-center space-x-2 overflow-y-auto px-5 py-16">
                
                <div className="">
                   
                    {/* <BtnNavigator saveFunction={saveFunction}></BtnNavigator>   */}
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
               
                <div className="flex flex-col w-full ">
                    <div className="w-full flex-row">
                        <TemplateNavigation></TemplateNavigation>

                        {/* <div className="w-40 h-56">
                        <TemplateBasic_1></TemplateBasic_1>
                        </div> */}

                    </div>
                    <div className="h-screen overflow-y-auto">
                          {/* <TemplateBasic_1></TemplateBasic_1> */}

                    </div>
                    {/* <TemplateBasic></TemplateBasic> */}
                   
                </div>
              
            </div>
        </>
    )

}

export default BuildLayout;