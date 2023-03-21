import React, { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";


export const WithResumeProps =   (Component, props) => {
    const profile = useAppSelector(state => state.profile.profile);
    const skills = useAppSelector(state => state.skills.skills);
    const education = useAppSelector(state => state.education.education);
    const experience = useAppSelector(state => state.experience.experience);



    return(
        // <Component resumeProps={profile, skills,education, experience} />
        <Component {...props}/>
    )

}