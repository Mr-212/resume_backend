import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import CreateResumeBtnModal from "../../resumeIndex/pages/createResumeBtnModal";



const Header = () => {

    const {profile_id} = useParams();


    return(
        <>
            <nav className="flex flex-row w-full justify-start bg-slate-400 align-items-center opacity-70 text-white align-middle h-12">
                {/* <button className="text-left text-2xl px-10"><i className="fa fa-plus"></i></button> */}
                {profile_id && 
                    <Link to={'/resume'} className="text-left text-2xl px-10 text-gray-900"><i className="fa fa-arrow-left"></i></Link>
                }
                 {!profile_id && 
                    <Link to={'profile'} className="text-left text-2xl px-10 text-green-600"><i className="fa fa-plus"></i></Link>
                 }
              

                {/* <CreateResumeBtnModal></CreateResumeBtnModal> */}
            </nav>
            <div className="w-full pt-1">
                 <Outlet></Outlet>
            </div>
           
        </>
    )
}

export default Header;