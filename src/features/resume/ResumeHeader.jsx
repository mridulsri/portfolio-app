import React from 'react'
import ResumeProfileImage from './ResumeProfileImage'
import ResumeContacts from './ResumeContacts'

function ResumeHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12">
      <div className="md:col-span-10 print:col-span-10">
        <div className="text-left">
          <h1 className="text-4xl font-bold">MRIDUL SRIVASTAVA</h1>
          <h1 className="text-primary text-xl">Full-Stack Developer & Technical Architect</h1>
          <ResumeContacts />
        </div>
      </div>
      <div className="md:col-span-2 print:col-span-2">
        <div className="text-right">
          <ResumeProfileImage />
        </div>
      </div>
    </div>
  )
}

export default ResumeHeader
