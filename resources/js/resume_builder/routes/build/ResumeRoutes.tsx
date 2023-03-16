
import React from "react";
import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import BuildLayout from "../../components/Build/BuildLayout";
import Education from "../../components/Build/pages/Education";
import Experience from "../../components/Build/pages/Experience";
import Profile from "../../components/Build/pages/Profile";
import Skills from "../../components/Build/pages/Skills";
import Dashboard from "../../components/Dashboard/Index";
  
  


export const ResumeRoutes = () => {

     const routes = createBrowserRouter(
         createRoutesFromElements(
          <Route path="/" element={<BuildLayout />}>
            <Route path="/"   element={<Profile />} />
            <Route path="education" element={<Education />} />
            <Route path="skills" element={<Skills />} />
            <Route path="experience" element={<Experience />} />
         </Route>
         )
       );

       return (
        <RouterProvider router={routes}></RouterProvider>
       )

}

