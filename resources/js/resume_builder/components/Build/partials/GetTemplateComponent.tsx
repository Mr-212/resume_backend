import React, { Suspense } from "react";
import PdfTemplate from "../templates/pdf";


export const getComponent = (comp, pdf: boolean) => {

    const components = {
        'PdfTemplate': PdfTemplate,
    };
    
    const Component = components[comp];

    return (
        <Suspense fallback={<div className="text-green-600">Loading...</div>}>
            <Component pdf={pdf}></Component>
        </Suspense>
    )

}