
import './bootstrap';
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./resume_builder/components/App";
import store from "./resume_builder/store/store";

const  element  = document.getElementById("app")
const props = element?.dataset;
const root =  createRoot(element);

root.render(
    <Provider store={store}>
        <App {...props} />
    </Provider>,
);
