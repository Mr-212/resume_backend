import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import CreateResumeBtnModal from "../../resumeIndex/pages/createResumeBtnModal";
import { useAppDispatch } from "../../../store/store";
import { newResume } from "../../resumeIndex/reducers/resumeReducer";

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { SelectTemplate } from "../templates/SelectTemplate";



const Header = () => {
    const dispatch = useAppDispatch();

    const {profile_id} = useParams();

    const[isOpen, setIsOpen] = useState(false);


    return(
        <>
            <nav className="flex flex-row w-full justify-start bg-slate-500 align-items-center text-white align-middle h-12">
                {/* <button className="text-left text-2xl px-10"><i className="fa fa-plus"></i></button> */}
                {profile_id && 
                    <Link to={'/resume'} className="text-left text-2xl px-10 text-gray-900"><i className="fa fa-arrow-left"></i></Link>
                }
                 {!profile_id && 
                    // <Link to={'profile'} className="text-left text-2xl px-10 text-green-600"><i className="fa fa-plus"></i></Link>
                    <button onClick={() => dispatch(newResume())} className="text-left text-2xl px-10 text-green-600"><i className="fa fa-plus"></i></button>

                 }

                {/* <button className="text-left text-2xl px-10 text-green-600" onClick={() => setIsOpen(!isOpen)}>Set Template</button> */}

              

                {/* <CreateResumeBtnModal></CreateResumeBtnModal> */}
            </nav>
            <div className="w-full pt-1">
            <SlidingPane
                className="h-screen mt-28 overflow-y-auto"
                // overlayClassName="some-custom-overlay-class"
                isOpen={isOpen}
                title="Select a template"
                width="800px"
                // subtitle="Optional subtitle."
                from="right"
                onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                setIsOpen(false);
                }}
             >
                <div>
                    <SelectTemplate></SelectTemplate>
                </div>
        
            </SlidingPane>
                 <Outlet></Outlet>
            </div>
           
        </>
    )
}

export default Header;