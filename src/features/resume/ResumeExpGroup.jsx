import React from 'react'
import ResumeExp from './ResumeExp'
import experiences from '../../data/experiences.json'

function ResumeExpGroup() {
  return (
    <div className="mb-6">
      <h2 className="text-start text-2xl uppercase font-bold mb-4 border-b-4">Experience</h2>
      <ul className="list-none">
        {experiences.map((experience, index) => (
          <li key={`exp_${index}`}>
            <ResumeExp {...experience} />
            {index !== experiences.length - 1 && (
              <hr className="border-dashed border-gray-400 my-2" />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResumeExpGroup
