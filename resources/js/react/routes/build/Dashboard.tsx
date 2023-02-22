
import React from "react";
import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import Education from "../../components/Build/Education";
import Profile from "../../components/Build/Profile";
import Dashboard from "../../components/Dashboard/Index";
  
  


export const DashboardRoutes = () => {

     const routes = createBrowserRouter(
         createRoutesFromElements(
          <Route path="/dashboard"  element={<Dashboard />}>
            <Route path="profile"   element={<Profile />} />
            <Route path="education" element={<Education />} />
         </Route>
         )
       );

       return (
        <RouterProvider router={routes}></RouterProvider>
       )

}

