import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Use React.lazy to dynamically import the components
const BreedList = lazy(() => import("../pages/Breed/List"));
const BreedDetail = lazy(() => import("../pages/Breed/Detail"));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<BreedList />} />
          <Route path="detail/:id" element={<BreedDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
