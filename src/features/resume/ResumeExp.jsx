import React from 'react'
import { BsGeoAltFill, BsCalendar3 } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'

function ResumeExp(props) {
  return (
    <div className="text-start">
      <h1 className="text-xl font-bold  text-secondary">{props.title}</h1>
      <h1 className="text-primary text-lg font-bold">{props.company}</h1>
      <div className="flex flex-wrap gap-x-5 text-secondary mb-1">
        <div className="flex space-x-2 items-center">
          <BsCalendar3 />
          <span>
            {props.startDate} - {props.endDate}
          </span>
        </div>
        <div className="flex space-x-2 items-center">
          <BsGeoAltFill />
          <span>{props.location}</span>
        </div>
      </div>
      <div className="text-base mb-1">{props.description}</div>
      <div className="pl-5">
        <ul className="list-disc">
          <li className="mb-1">
            <div className="flex space-x-4">
              <div className="font-bold w-auto whitespace-nowrap">Role:</div>
              <ul>
                {props.responsibilities.map((role, index) => (
                  <li key={`role_${index}`} className="flex mb-0.5">
                    <BsCheckCircle size={12} className="text-primary w-auto" />
                    <div className="flex-1 ml-2 text-justify">{role}</div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <div>
              <span className="font-bold mr-2">Technology Used:</span>
              {props.technologies.map((tech, index) => (
                <span key={`tech_item_${index}`}>{tech} </span>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ResumeExp
