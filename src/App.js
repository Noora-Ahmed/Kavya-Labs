import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/about";       
import Contact from "./pages/contact";   
import Dashboard from "./pages/dashboard"; // 👈 1. Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* 👈 2. Add the secure routing path entry here */}
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;