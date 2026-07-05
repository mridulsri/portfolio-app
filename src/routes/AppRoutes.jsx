import React, { Suspense, lazy } from 'react'

import {  Routes, Route } from 'react-router-dom'
// BrowserRouter
const HomePage = lazy(() => import('../pages/HomePage'))
const ResumePage = lazy(() => import('../pages/ResumePage'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <BrowserRouter basename="/portfolio-app/"> */}
        <Routes basename="/portfolio-app/">
          {/* Add more routes as needed */}
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      {/* </BrowserRouter> */}
    </Suspense>
  )
}

export default AppRoutes
