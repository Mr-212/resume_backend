import React from "react";
import { useLocation } from "react-router-dom";


export const getUrlPath = () => {

    const location = useLocation();

    return location.pathname;

}
