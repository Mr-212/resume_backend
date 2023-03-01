
import React from "react";
import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import BuildLayout from "../../components/Build/BuildLayout";
import Education from "../../components/Build/Education";
import Profile from "../../components/Build/Profile";
import Dashboard from "../../components/Dashboard/Index";
  
  


export const DashboardRoutes = () => {

     const routes = createBrowserRouter(
         createRoutesFromElements(
          <Route path="/" element={<BuildLayout />}>
            <Route path="/"   element={<Profile />} />
            <Route path="education" element={<Education />} />
         </Route>
         )
       );

       return (
        <RouterProvider router={routes}></RouterProvider>
       )

}

