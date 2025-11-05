import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import BooksResources from "./pages/BooksResources";
import Education from "./pages/Education";
import Membership from "./pages/Membership";
import Blog from "./pages/Blog";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/books-resources" element={<BooksResources />} />
        <Route path="/education" element={<Education />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
