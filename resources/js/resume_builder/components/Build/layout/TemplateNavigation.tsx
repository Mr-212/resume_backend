import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getUrlPath } from "../../hooks/GetLocation";
import TemplateBasic from "../templates/basic";
import TemplateBasic_1 from "../templates/basic-1";
import ReactDOMServer, { renderToString } from 'react-dom/server';
import {PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ViewPDF } from "../partials/ViewPDF";
import { ResumeStore } from "../partials/useResumeStore";
import { WithResumeProps } from "../partials/WithResumeProps";
import { WithPDFPreview, WithPreview } from "../WithPDFPreview";
import { getComponent } from "../partials/GetTemplateComponent";

 const TemplateNavigation = () => {

    const pdfTemplate = useRef("");
    const resumeStoreObject = ResumeStore();
    const Templates = {
    
        'Basic':  <TemplateBasic />,
        'Dark': <TemplateBasic_1 />
      }


    const [temp, setTemp] = useState();

    useEffect(() => {
        // temp == pdfTemplate.current;
        // console.log(resumeStoreObject,'here');
        // selectTemplate(<PdfTemplate props={resumeStoreObject}></PdfTemplate>);


    },[resumeStoreObject])
    // const[Template, selectTemplate ] = useState(PdfTemplate);
    const[template, selectTemplate ] = useState('PdfTemplate');



    useEffect(() => {
        // console.log(resumeStoreObject.profile)
        // selectTemplate(<PdfTemplate props={resumeStoreObject}></PdfTemplate>);

    },[])

    const handleDonwlodPDF = async() => {
      
    }

    // selectTemplate(<PdfTemplate props={resumeStoreObject}></PdfTemplate>);


   
    // console.log(resumeStoreObject,'here');
//  const html = ReactDOMServer.renderToStaticMarkup((<TemplateBasic resumeProps={resumeStoreObject} />);
//  const html = renderToString(<TemplateBasic resumeProps={resumeStoreObject} />);

    // const last_index = Templates.length;
    let line = "bg-black h-full w-full";
    const li_class = "text-black font-bold hover:text-indigo-800 hover:text-xl transition-all ease-in-out delay-150 duration-300 ";
    const active = "active opacity-100 text-green-800 font-bold text-lg transition ease-in-out duration-300";

     function WithDownloadPdf(template: JSX.Element): React.ReactNode {
         throw new Error("Function not implemented.");
     }

    return(
        <div className="h-full bg-gray-400">
              <div className="flex flex-row w-full align-middle items-center bg-slate-600 shadow-lg opacity-100 text-gray-900 font-bold p-1">
                    {/* { Object.entries(Templates).map( ([key, val]) => {
                        // console.log(val, key)
                            return(
                              
                              <div className={"flex flex-row text-gray-100 justify-evenly w-full active"} key={key} onClick={()=> selectTemplate(val)}><a>{key}</a></div>
                            )                      
                        })
                    } */}
                <div className="">
                    {/* <button className="text-black text-lg rounded-full bg-white px-4 hover:bg-slate-400" onClick={handleDonwlodPDF}>Download</button> */}
                    {getComponent(template,false)}
                </div>
            </div>
            {/* <div className="h-full [&::-webkit-scrollbar]:hidden overflow-y-scroll"  ref={pdfTemplate}> */}
            <div className="w-full h-screen">
                { getComponent(template,true) }
            </div>
        </div>
    )

}


export default TemplateNavigation;




