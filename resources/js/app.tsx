
import './bootstrap';
import React from 'react';
// import ReactDom, { createRoot } from "react-dom/client";
import ReactDom  from "react-dom";

// import { createRoot } from 'react/jsx-runtime';
// import { unstable_createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./resume_builder/components/App";
import store from "./resume_builder/store/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const  element  = document.getElementById("app");
const props = element?.dataset;
// const root =  ReactDom.createRoot(element);
// Modal.setAppElement('#app');

ReactDom.render(
    <Provider store={store}>
        <App {...props}>

        </App>
        <ToastContainer></ToastContainer>

    </Provider>,
    document.getElementById("app")
);
