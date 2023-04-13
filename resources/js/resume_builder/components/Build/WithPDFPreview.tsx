import React, { ComponentProps, useEffect } from "react";
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
            //console.log(resumeStoreObject);
            useEffect(() => {

            },[resumeStoreObject])
            // console.log(props.pdf)
            return (
                <div>
                    {props.download &&
                        <div>
                    <PDFDownloadLink
                        document={ <Component {...resumeStoreObject}></Component>}
                        fileName='somename.pdf'
                    >
                    {({ loading }) => (loading ? 'Loading document...' :<button>Download</button>)}
                    </PDFDownloadLink>
                    </div>
                    }
                    {props.pdf &&
                    <div>
                        <PDFViewer
                            showToolbar={false}
                            style={{
                                width: '100%',
                                height: '95%',
                            }}
                        > 
                            <Component {...props} { ...resumeStoreObject}></Component>
                        </PDFViewer>
                    </div>
                    }

               
                </div>
            )


}

// export const WithDonwloadPDF = ({pdf}) => {
    
//     return(

//         <div>
//             <PDFDownloadLink
//                 document={pdf}
//                 fileName='somename.pdf'
//             >
//             {({ loading }) => (loading ? 'Loading document...' :<button>Download</button>)}
//             </PDFDownloadLink>
//         </div>
//     )
// }

