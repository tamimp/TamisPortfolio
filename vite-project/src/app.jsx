import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage"; // Import LandingPage
import SoftwareEngineerPage from "./Pages/SoftwareEngineerPage/SoftwareEngineerPage"; // Import SoftwareEngineerPage

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/software-engineer"
        element={<SoftwareEngineerPage />}
      />{" "}
    </Routes>
  );
};

export default App;
