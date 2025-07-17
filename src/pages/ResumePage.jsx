// create a react component for the resume page
import React, { useRef, useState } from 'react'
import html2pdf from 'html2pdf.js'
import ResumeHeader from '../features/resume/ResumeHeader'
import ResumeExpGroup from '../features/resume/ResumeExpGroup'
import ResumeEduGroup from '../features/resume/ResumeEduGroup'
import ResumeSummary from '../features/resume/ResumeSummary'
import ResumeStrength from '../features/resume/ResumeStrength'
import ResumeAchievements from '../features/resume/ResumeAchievements'
import ResumeSkills from '../features/resume/ResumeSkills'
import ResumeLanguage from '../features/resume/ResumeLanguage'
import ResumeSheet from '../features/resume/ResumeSheet'
// import FabButton from '../components/FabButton'

function ResumePage() {
  const contentRef = useRef()
  const [pdfUrl, setPdfUrl] = useState(null)

  const generatePdf = () => {
    const element = contentRef.current
    if (!element) {
      console.error('PDF element not found!')
      return
    }

    const opt = {
      margin: 0,
      filename: 'my-document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] },
    }

    html2pdf()
      .set(opt)
      .from(element)
      .outputPdf('blob')
      .then(blob => {
        // Clean up the previous URL ONLY after blob is generated
        if (pdfUrl) URL.revokeObjectURL(pdfUrl)

        const url = URL.createObjectURL(blob)
        setPdfUrl(url)
      })
      .catch(err => {
        console.error('PDF generation failed:', err)
      })
  }

  return (
    <div className="bg-gray-200 print:bg-white">
      {/* <FabButton onClick={() => generatePdf()} className="hidden" /> */}
      {/* Page 1: Profile & Experience */}
      <div ref={contentRef}>
        <ResumeSheet>
          <div className="grid md:grid-cols-12 gap-x-10 gap-y-5 print:grid-cols-12 print:gap-x-10 print:gap-y-5">
            <div className="md:col-span-12 print:col-span-12">
              <ResumeHeader />
            </div>
            <div className="md:col-span-8 print:col-span-8">
              <ResumeExpGroup />
            </div>
            <div className="md:col-span-4 print:col-span-4">
              <ResumeSummary />
              <ResumeStrength />
              <ResumeSkills />
            </div>
          </div>
        </ResumeSheet>

        {/* Page 2: Education & Skills */}
        <div className="page-break"></div>

        <ResumeSheet>
          <div className="grid md:grid-cols-12 gap-x-10 gap-y-5 mt-10 print:grid-cols-12 print:gap-x-10 print:gap-y-5 print:mt-10">
            <div className="md:col-span-8 print:col-span-8">
              <ResumeEduGroup />
            </div>
            <div className="md:col-span-4 print:col-span-4">
              <ResumeAchievements />
              <ResumeLanguage />
            </div>
          </div>
        </ResumeSheet>
      </div>
    </div>
  )
}

export default ResumePage
