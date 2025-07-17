import React from 'react'
import ResumeEdu from './ResumeEdu'
import educations from '../../data/educations.json'

function ResumeEduGroup() {
  return (
    <div className="mb-4">
      <h2 className="text-start text-2xl uppercase font-bold mb-4 border-b-4">Education</h2>
      <div className="list-none">
        {educations.map((education, index) => (
          <div key={`exp_${index}`}>
            <ResumeEdu {...education} />
            {index !== educations.length - 1 && (
              <hr className="border-dashed border-gray-400 my-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResumeEduGroup
