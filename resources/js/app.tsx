import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./resume_builder/components/App";
import store from "./resume_builder/store/store";


render(
    // <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>,
    // </BrowserRouter>,

    document.getElementById("app")
 );
