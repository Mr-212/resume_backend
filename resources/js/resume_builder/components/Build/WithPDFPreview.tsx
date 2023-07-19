import React, { ComponentProps, Suspense, useEffect } from "react";
import Dashboard from "../Dashboard/Index";
import BtnNavigator from "./layout/BtnNavigator";
import BuildLayout from "./BuildLayout";
import CreatePageUrl from "./layout/Navigation";
import { ResumeStore } from "./partials/useResumeStore";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useAppSelector } from "../../store/hooks";

interface Props {
    handleSubmit?: () => void
}


 export const WithPDFPreview = (Component: any)  => props =>  { 

    
            const resumeStoreObject = ResumeStore();
            // console.log(resumeStoreObject);
            useEffect(() => {

            },[resumeStoreObject])
            return (
                <div>
                    {!props.pdf &&
                        <div>
                    <PDFDownloadLink
                        document={ <Component {...resumeStoreObject}></Component>}
                        fileName='somename.pdf'
                    >
                    {({ loading }) => (loading ? <div className="text-white text-center">Loading document...</div> :<button className="text-white">Download</button>)}
                    </PDFDownloadLink>
                    </div>
                    }

                    {props.pdf &&
                    <div>
                        <Suspense fallback={<h1>Loading profile...</h1>}>
                        <PDFViewer
                            showToolbar={false}
                            style={{
                                width: '100%',
                                height: '95%',
                            }}
                        >  
                            <Component {...props} { ...resumeStoreObject}></Component>
                         </PDFViewer>
                         </Suspense>
                    </div>
                    }

               
                </div>
        )
}

export const WithDonwloadPDF = ({pdf}) => {
    
    return(

        <div>
            <PDFDownloadLink
                document={pdf}
                fileName='somename.pdf'
            >
            {({ loading }) => (loading ? 'Loading document...' :<button>Download</button>)}
            </PDFDownloadLink>
        </div>
    )
}
export const WithPreview = (pdf) => {
    
    return(

        <PDFViewer
            showToolbar={false}
            style={{
                width: '70%',
                height: '70%',
            }}
        >  
           {pdf}
        </PDFViewer>
    )
}


