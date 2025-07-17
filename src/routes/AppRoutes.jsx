import React, {Suspense, lazy} from "react";

import { Routes, Route } from "react-router-dom";


const HomePage = lazy(() => import("../pages/HomePage"));
const ResumePage = lazy(() => import("../pages/ResumePage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;