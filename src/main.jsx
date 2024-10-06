import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./AppComponent.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App /> {/* Use the App component that contains your routes */}
    </Router>
  </StrictMode>
);
