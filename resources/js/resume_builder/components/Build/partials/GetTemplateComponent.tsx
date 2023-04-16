import React, { Suspense, lazy } from "react";
// import PdfTemplate from "../templates/PdfTemplate";


export const getComponent = (componentName, pdf: boolean) => {

    // const components = {
    //     'PdfTemplate': PdfTemplate,
    // };
    
    // const DynamicComponent = components[componentName];
    const DynamicComponent = lazy(() => import(`../templates/${componentName}`));

    return (
        <Suspense fallback={<div className="text-green-600">Loading...</div>}>
            <DynamicComponent pdf={pdf}></DynamicComponent>
        </Suspense>
    )

}