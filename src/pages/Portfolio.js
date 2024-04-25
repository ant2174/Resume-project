// Portfolio.js

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdffile from '../pdf/Ananth_Resume.pdf';
import '../App.css'; // Move this import to the top

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Portfolio = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  const handleDownloadPdf = () => {
    const anchor = document.createElement('a');
    anchor.href = pdffile;
    anchor.download = 'Ananth_Resume.pdf';
    anchor.click(); 
  };

  return (
    <>
      <div className='container4'>
        <div className='d-flex align-items-center justify-content-center flex-column'>
          <div className="download-button mt-3">
            <button className="btn btn-primary" onClick={handleDownloadPdf}>Click here to download PDF</button>
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <div className="pdf-container">
              <Document file={pdffile} onLoadSuccess={onDocumentSuccess}>
                <Page pageNumber={pageNumber}></Page>
              </Document>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
