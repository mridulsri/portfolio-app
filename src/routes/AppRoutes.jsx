import React, { Suspense, lazy } from 'react'

import { Routes, Route, HashRouter } from 'react-router-dom'
// BrowserRouter
const HomePage = lazy(() => import('../pages/HomePage'))
const ResumePage = lazy(() => import('../pages/ResumePage'))

const AppRoutes = () => {
  return (
        // <BrowserRouter basename="/portfolio-app/">
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes basename="/portfolio-app/">
          {/* Add more routes as needed */}
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Suspense>
    </HashRouter>
    //</BrowserRouter>
  )
}

export default AppRoutes
