import React, { Suspense, lazy } from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
const HomePage = lazy(() => import('../pages/HomePage'))
const ResumePage = lazy(() => import('../pages/ResumePage'))

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/portfolio-app/">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Add more routes as needed */}
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes
