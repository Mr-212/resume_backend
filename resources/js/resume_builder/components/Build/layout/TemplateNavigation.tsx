import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getUrlPath } from "../../hooks/GetLocation";
import TemplateBasic from "../templates/basic";
import TemplateBasic_1 from "../templates/basic-1";
import Html from 'react-pdf-html';
import ReactDOMServer, { renderToString } from 'react-dom/server';
import {PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { jsPDF } from "jspdf";
import { ViewPDF } from "../partials/ViewPDF";
import { ResumeStore } from "../partials/useResumeStore";
import html2canvas from "html2canvas";
import { WithResumeProps } from "../partials/WithResumeProps";
// import * as html2canvas from "html2canvas";
// import * as _html2canvas from "html2canvas";
// const html2canvas: any = _html2canvas;
// declare const html2canvas: (element: HTMLElement, options?: Partial<Options>) => Promise<HTMLCanvasElement>;
// import * as html2canvasWrong from "html2canvas"
// var html2canvas = html2canvasWrong as any as (element: HTMLElement, options?: Partial<html2canvasWrong.Options>) => Promise<HTMLCanvasElement>;










 const TemplateNavigation = () => {

    const pdfTemplate = useRef("");
    const resumeStoreObject = ResumeStore();
    const Templates = {
    
        'Basic':  <TemplateBasic />,
        'Dark':<TemplateBasic_1 />
      }
      const[template, selectTemplate ] = useState(<TemplateBasic resumeProps={resumeStoreObject} />);

    // const tmp = <TemplateBasic resumeProps={resumeStoreObject} />;

    const [temp, setTemp] = useState();

    useEffect(() => {
        // temp == pdfTemplate.current;
        // console.log(resumeStoreObject.profile);
        // selectTemplate(template);


    },[resumeStoreObject, template])

    const handleDonwlodPDF = async() => {
        // const pdf = new jsPDF("portrait", "pt", "a4");        // const html = ReactDOMServer.renderToStaticMarkup(pdfTemplate.current);
        const h = pdfTemplate.current;
        // console.log(html)
        // setTemp(html);
        // console.log(temp);
        // pdf.text(html);
        const html = html2canvas(h)
        .then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("portrait", "pt", "a4");  
            pdf.addImage(imgData, "JPEG", 10, 10);
            pdf.save(`tmp.pdf`);
          });
    }


   

//  const html = ReactDOMServer.renderToStaticMarkup((<TemplateBasic resumeProps={resumeStoreObject} />);
//  const html = renderToString(<TemplateBasic resumeProps={resumeStoreObject} />);

    const url = getUrlPath();
    // const last_index = Templates.length;
    let line = "bg-black h-1 w-full";
    const li_class = "text-black font-bold hover:text-indigo-800 hover:text-xl transition-all ease-in-out delay-150 duration-300 ";
    const active = "active opacity-100 text-green-800 font-bold text-lg transition ease-in-out duration-300";

    return(
        
        <div className="flex flex-col">
              <div className="flex flex-row align-middle justify-items-center border-b-2 w-full bg-white opacity-100 text-blue-800 font-bold p-2">
                    { Object.entries(Templates).map( ([key, val]) => {
                        // console.log(val, key)
                            return(
                              
                              <div className={"flex flex-row justify-center w-full active"} key={key} onClick={()=> selectTemplate(val)}><a>{key}</a></div>
                            )                      
                        })
                      
                    }
                <div className="">
                    <button className="text-blue-400 px-4 py-1" onClick={handleDonwlodPDF}>Download</button>
                </div>
            </div>
            <div className="w-full [&::-webkit-scrollbar]:hidden overflow-y-auto">
            <div >
                {/* <div > */}

               <div ref={pdfTemplate}>
                {template}
               </div>

                    
            </div>

            </div>
        </div>
    )

}


export default TemplateNavigation;

