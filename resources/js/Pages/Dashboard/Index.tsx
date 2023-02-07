import React from "react";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react"
import { Sidebar } from "./Sidebar";



const Dashboard:  React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // const d = router.get('/dashboard');

    },[]);



    return(
        <div>
            <nav className="w-full shadow-lg bg-black h-16">

            </nav>
            <div className="flex flex-row">
                <div className="w-1/5 max-h-screen h-screen">
                    <Sidebar></Sidebar>
                </div>

                <div className="w-/4/5 bg-white h-screen"></div>

            </div>
        </div>
    )

}


export default Dashboard;