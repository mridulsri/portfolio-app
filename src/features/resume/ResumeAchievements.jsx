import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'

function ResumeSummary() {
  return (
    <div className="mb-4">
      <h2 className="text-start text-2xl uppercase font-bold mb-4 border-b-4">Key Achievements</h2>
      <div className="text-justify">
        <div className="font-bold text-primary">Customer Choice</div>
        <div>Customer Choice(Rewarded in Coforge)</div>
      </div>
      <hr className="border-dashed border-gray-400 my-2" />
      <div className="text-justify">
        <div className="font-bold text-primary">Customer Choice</div>
        <div>Customer Choice(Rewarded in Iris)</div>
      </div>
      <hr className="border-dashed border-gray-400 my-2" />
      <div className="text-justify">
        <div className="font-bold text-primary">GEM 2014</div>
        <div>Going Extra Miles 2014 (Rewarded in Exzeo)</div>
      </div>
      <hr className="border-dashed my-2" />
      <div className="text-justify">
        <div className="font-bold text-primary">M101N</div>
        <div>M101N: MongoDB For.Net Developers</div>
      </div>
      <hr className="border-dashed border-gray-400 my-2" />
      <div className="text-justify">
        <div className="font-bold text-primary">M102</div>
        <div>M101N: MongoDB For.Net Developers</div>
      </div>
    </div>
  )
}

export default ResumeSummary
