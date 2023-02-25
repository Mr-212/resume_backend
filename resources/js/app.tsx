import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./react/components/App";
import store from "./react/store/store";


render(
    // <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>,
    // </BrowserRouter>,

    document.getElementById("app")
 );
