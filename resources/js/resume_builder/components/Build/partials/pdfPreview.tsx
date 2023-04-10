import React from 'react'
import { Document, Page, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'



const Preview = ({ children }) => {
    return (
      <div>
        <PDFViewer
          showToolbar={false}
          style={{
            width: '100%',
            height: '95%',
          }}
        >
          {children}
        </PDFViewer>
        {/* <PDFDownloadLink
          document={<Template profile={profile} />}
          fileName='somename.pdf'
        >
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink> */}
      </div>
    )
  }


  export default Preview;


  export const DonwloadPdf = ({pdf}) => {
    
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