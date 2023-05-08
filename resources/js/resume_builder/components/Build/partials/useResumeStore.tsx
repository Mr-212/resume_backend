import React, { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";
import { education } from "../reducers/educationReducer";



 export const ResumeStore = () => {

    const profile = useAppSelector(state => state.profile.profile);
    const skills = useAppSelector(state => state.skills.skills);
    const education = useAppSelector(state => state.education.education);
    const experience = useAppSelector(state => state.experience.experience);
    const softskills = useAppSelector(state => state.softskills.softskills);

    
    useEffect(() => {

        // console.log("profile props ::" + skills)
    },[profile, skills, education, experience, softskills]);


    // console.log(profile);
    return {
        profile, skills, education, experience, softskills
    }

}



