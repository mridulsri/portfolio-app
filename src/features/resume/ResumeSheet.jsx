import React from 'react'

const ResumeSheet = ({ children }) => {
  return (
    <div className="w-[794px] h-[1123px] bg-white shadow-lg mx-auto p-8 mb-8 print:shadow-none print:m-0 print:p-0">
      {children}
    </div>
  )
}

export default ResumeSheet
