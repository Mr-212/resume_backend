import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./resume_builder/components/App";
import { setProfileId } from "./resume_builder/components/Build/reducers/profileReducer";
import { useAppDispatch } from "./resume_builder/store/hooks";
import store from "./resume_builder/store/store";

const  element  = document.getElementById("app")
const props = element?.dataset;
// console.log(profile_id)
// const dispatch = useAppDispatch();
// dispatch(setProfileId(props.profileId));
render(
  
    // <BrowserRouter>
    <Provider store={store}>
        <App {...props} />
    </Provider>,
    // </BrowserRouter>,

    element
 );
