import React from 'react'
import { BsCircleFill, BsCircle, BsCircleHalf } from 'react-icons/bs'

const languages = [
  {
    name: 'English',
    level: 'Proficient',
    rating: 4.0,
  },
  {
    name: 'Hindi',
    level: 'Native',
    rating: 4.5,
  },
]

function renderRating(rating) {
  const circles = []

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      circles.push(<BsCircleFill key={i} className="text-primary" />)
    } else if (i - rating < 1 && rating % 1 !== 0) {
      circles.push(<BsCircleHalf key={i} className="text-primary" />)
    } else {
      circles.push(<BsCircle key={i} className="text-primary" />)
    }
  }

  return <div className="flex col-span-6 space-x-2 items-start text-end pt-2">{circles}</div>
}

function ResumeLanguage() {
  return (
    <div className="mb-4">
      <h2 className="text-start text-2xl uppercase font-bold mb-2 border-b-4">Languages</h2>
      <div>
        {languages.map((lang, index) => (
          <div key={index} className="grid grid-cols-12 my-4">
            <div className="col-span-6 text-start">
              <div className="text-lg font-bold">{lang.name}</div>
              <div>{lang.level}</div>
            </div>
            {renderRating(lang.rating)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResumeLanguage
