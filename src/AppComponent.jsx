import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage"; // Import LandingPage
import SoftwareEngineerPage from "./Pages/SoftwareEngineerPage/SoftwareEngineerPage"; // Import SoftwareEngineerPage
import About from "./Pages/About/About"; // Import About page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/software-engineer" element={<SoftwareEngineerPage />} />
      <Route path="/about" element={<About />} /> {/* Add About Route */}
    </Routes>
  );
};

export default App;
