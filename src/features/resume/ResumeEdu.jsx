import React from 'react'
import { BsGeoAltFill, BsCalendar3 } from 'react-icons/bs'

function ResumeEdu(props) {
  return (
    <div className="text-start">
      <h1 className="text-lg font-bold text-secondary">{props.degree}</h1>
      <h1 className="text-primary font-bold">{props.university}</h1>
      <div className="flex flex-wrap gap-x-4 text-sm mb-1">
        <div className="flex space-x-1 items-center">
          <BsCalendar3 />
          <span>
            {props.startDate} - {props.endDate}
          </span>
        </div>
        <div className="flex space-x-1 items-center">
          <BsGeoAltFill />
          <span>{props.location}</span>
        </div>
      </div>
    </div>
  )
}

export default ResumeEdu
