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
import { useAppSelector } from "../../store/hooks";


interface Props {
    children: React.ReactNode,
    //saveFunction ?: string
}









const BuildLayout = ( { children, saveFunction }: any )  => {
    const dispatch = useAppDispatch();
    const profile_id =  useAppSelector(state => state.profile.profile_id);

    useEffect(() => {
        // console.log(profile_id)
        // const profile_id = "100466e4-0388-4f35-bfad-42b31c616416";

        if(profile_id){
            dispatch(getProfile(profile_id));
            dispatch(getEducation(profile_id));
            dispatch(getProfileSkills(profile_id));
            dispatch(getExperience(profile_id));
        }
    });

    return(
        <>

            {/* <div className="flex flex-row  items-center shadow-md bg-slate-200 justify-center w-full">
                <div className="flex flex-row w-full border-r-2">
                    <ResumeMenuBar />
                </div>
                <div className="flex flex-row w-full">

                </div>
            
            </div> */}

            <div className="grid grid-cols-2 justify-center space-x-4 w-full pt-10">
                    {/* <BtnNavigator saveFunction={saveFunction}></BtnNavigator>   */}
                <div className="col-span-1">
                        <BuilderNavigation></BuilderNavigation>
                </div>
               
                <div className="col-span-1">
                        <TemplateNavigation></TemplateNavigation>
                   
                </div>
              
            </div>
        </>
    )

}

export default BuildLayout;