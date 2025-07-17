import React from 'react'
import { BsGeoAltFill, BsTelephoneFill, BsLink45Deg, BsEnvelopeAtFill } from 'react-icons/bs'

function ResumeContacts() {
  return (
    <>
      <div className="flex flex-wrap gap-x-4 text-sm sm:text-base">
        <div className="flex space-x-2 items-center">
          <BsTelephoneFill className="text-blue-500 " /> <span>(+91) 9350272167</span>
        </div>
        <div className="flex space-x-2 items-center">
          <BsEnvelopeAtFill className="text-blue-600" /> <span>mridul_gzp@yahoo.com</span>
        </div>
        <div className="flex space-x-2 items-center">
          <BsLink45Deg className="text-blue-600" />
          <span>linkedin.com/in/mridulsri</span>
        </div>
        <div className="flex space-x-2 items-center">
          <BsGeoAltFill className="text-blue-600" /> <span>Greater Noida, India</span>
        </div>
      </div>
    </>
  )
}

export default ResumeContacts
