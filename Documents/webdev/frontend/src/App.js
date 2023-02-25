import React from "react";

import { Routes, Route } from "react-router-dom";

import WelcomePage from "pages/auth/WelcomePage";
import LoginPage from "pages/auth/LoginPage";
import RegisterPage from "pages/auth/RegisterPage";
import StudentProfileRoutes from "routes/StudentProfileRoutes";
import AgencyProfileRoutes from "routes/AgencyProfileRoutes";
import StudentHomeRoutes from "routes/StudentHomeRoutes";
import AgencyHomeRoutes from "routes/AgencyHomeRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/studenthome/*" element={<StudentHomeRoutes />} />
      <Route path="/agencyhome/*" element={<AgencyHomeRoutes />} />
      <Route
        path="/studentprofile/:userId/*"
        element={<StudentProfileRoutes />}
      />
      <Route
        path="/agencyprofile/:userId/*"
        element={<AgencyProfileRoutes />}
      />
    </Routes>
  );
};

export default App;
