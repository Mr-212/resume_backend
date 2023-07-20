import React from "react";
import { WithPDFPreview, WithPreview } from "../WithPDFPreview";
import TemplateBasic from "./basic";
import { getComponent } from "../partials/GetTemplateComponent";



export const SelectTemplate = ( ) =>{

    const templates = ['PdfTemplateBasic','PdfTemplate'];



    return(
        <div>

            { templates.map((val, key) => {
                  console.log(val);
                return <div>
                           { getComponent(val,true)  }
                       </div>
            })

            }

        </div>
    )
} 