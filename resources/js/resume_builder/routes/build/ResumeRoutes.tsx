
import React from "react";
import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider,

  } from "react-router-dom";
import BuildLayout from "../../components/Build/BuildLayout";
import Education from "../../components/Build/pages/Education";
import Experience from "../../components/Build/pages/Experience";
import Profile from "../../components/Build/pages/Profile";
import Skills from "../../components/Build/pages/Skills";
import Dashboard from "../../components/Dashboard/Index";
import ResumeIndex from "../../components/resumeIndex/pages";
import Header from "../../components/Build/partials/commonHeader";
  
  


export const ResumeRoutes = (props) => {
  // console.log(props)
  const profile_id = props.profileId;
      

     const routes = createBrowserRouter(
         createRoutesFromElements(
          // <Route path="/resume/:profile_id" element={<BuildLayout />}>
          <>
           <Route path="resume" element={<Header />}>
              <Route path="*" element={<BuildLayout />}>
                {/* <Route index path=":profile_id" element={<Navigate to=":profile_id/profile" replace={true} />} /> */}
                <Route index path=":profile_id" element={<Profile />} />
                <Route path=":profile_id/profile" element={<Profile />} />
                <Route path=":profile_id/education" element={<Education />} />
                <Route path=":profile_id/skills" element={<Skills />} />
                <Route path=":profile_id/experience" element={<Experience />} />
              </Route>
              <Route path="" element={<ResumeIndex />}> </Route>
            </Route>
         </>
         )
       );

      //  const routes1 = createBrowserRouter(
      //   createRoutesFromElements(
      //    // <Route path="/resume/:profile_id" element={<BuildLayout />}>
      //   )
      // );

       return (
          <RouterProvider router={routes}></RouterProvider>
       )

}

