import React, { useEffect } from "react";
import { ResumeRoutes } from "../routes/build/ResumeRoutes";
import { useAppDispatch } from "../store/store";
import { setProfileId } from "./Build/reducers/profileReducer";
// import { DashboardRoutes } from "../routes/build/Dashboard";
import Dashboard from "./Dashboard/Index";
// import Popup from 'react-popup';




const App = (props) => {

    // const dispatch = useAppDispatch();
    // useEffect(()=> {
    //     dispatch(setProfileId(props.profileId));
    // },[])


    // console.log(props);

    return(
    //  <DashboardRoutes></DashboardRoutes>
    <>

        <ResumeRoutes {...props}></ResumeRoutes>
    </>

    );

}


export default App;
