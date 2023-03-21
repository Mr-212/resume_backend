import React, { useEffect } from "react"
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Index";
import BtnNavigator from "./layout/BtnNavigator";
import Education from "./pages/Education";
// import Profile from "./Profile";
import ResumeMenuBar from "./layout/Navigation";
import Profile from "./pages/Profile";
import TemplateBasic from "./templates/basic";
import { getProfile } from "./reducers/profileReducer";
import { getEducation } from "./reducers/educationReducer";
import { useAppDispatch } from "../../store/store";
import { getProfileSkills } from "./reducers/skillReducer";
import { getExperience } from "./reducers/experienceReducer";
import TemplateBasic_1 from "./templates/basic-1";
import TemplateNavigation from "./layout/TemplateNavigation";
import BuilderNavigation from "./layout/BuilderNavigation";


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

            {/* <div className="flex flex-row  items-center shadow-md bg-slate-200 justify-center w-full">
                <div className="flex flex-row w-full border-r-2">
                    <ResumeMenuBar />
                </div>
                <div className="flex flex-row w-full">

                </div>
            
            </div> */}

            <div className="ralative grid grid-cols-2 justify-center space-x-2 px-10 ">
                    {/* <BtnNavigator saveFunction={saveFunction}></BtnNavigator>   */}
                <div className="w-full sticky top-0">
                    {/* <Profile></Profile> */}
                    {/* <Education></Education> */}
                        {/* <Outlet /> */}
                        <BuilderNavigation></BuilderNavigation>
                        {/* { children }  */}
                </div>
                {/* <div className="w-full items-end text-right static  b-0">
                    <BtnNavigator saveFunction={saveFunction}></BtnNavigator>
                </div> */}
               
                <div className="w-full flex-row">
                        <TemplateNavigation></TemplateNavigation>
                   
                </div>
              
            </div>
        </>
    )

}

export default BuildLayout;