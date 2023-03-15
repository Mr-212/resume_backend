import React, { useEffect, useState } from "react";


interface Props {

}


export default function useHideShowComponent(show: boolean){
    const[hide, setHide] = useState(show);
    const[hidden, setHidden] = useState("");

    useEffect(() => {
        setHideShow(show);
    },[]);

    const setHideShow = (show: boolean) => {
            setHide(show);
            const h =  hide? "hidden transition transition-opacity ease-in-out delay-700 duration-700":"transition transition-opacity ease-in-out delay-700 duration-700";
            setHidden(h);   
    }

    return {hidden, setHideShow};


}