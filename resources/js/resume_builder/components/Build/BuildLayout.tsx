import React, { useEffect } from "react"
import { Outlet, useParams } from "react-router-dom";
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
    let _profile_id =  useAppSelector(state => state.profile.profile_id);
    let { profile_id } =  useParams();
    

    useEffect(() => {
        profile_id = profile_id ? profile_id : _profile_id;
        if(profile_id){
            dispatch(getProfile(profile_id));
            dispatch(getEducation(profile_id));
            dispatch(getProfileSkills(profile_id));
            dispatch(getExperience(profile_id));
        }
    });

    return(

            <div className="grid grid-cols-2 space-x-4">
                    {/* <BtnNavigator saveFunction={saveFunction}></BtnNavigator>   */}
                    {/* <div className=" col-span-2">
                        <Headers></Headers>
                    </div> */}
                <div className="col-span-1 h-full">
                        <BuilderNavigation></BuilderNavigation>
                </div>
               
                <div className="col-span-1 h-full">
                        <TemplateNavigation></TemplateNavigation>
                   
                </div>
              
            </div>
    )

}

export default BuildLayout;