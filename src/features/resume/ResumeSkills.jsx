import React from 'react'
import skills from '../../data/skills.json'

function ResumeSkills() {
  return (
    <div className="mb-4">
      <h2 className="text-start text-2xl uppercase font-bold mb-2 border-b-4">Skills</h2>
      <ul className="list-none">
        {skills.map((skill, index) => (
          <li key={`skill_${skill.type}_${index}`}>
            <div className="text-justify">
              <div className="font-bold text-primary mb-1">{skill.type}</div>
              <div className="flex flex-wrap space-x-4">
                {skill.skills.map((item, index) => (
                  <span key={`skill_item_${index}`} className="font-medium border-b-1 mb-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResumeSkills
