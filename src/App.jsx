import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { About, Skills, Contact, Services, Projects, Home } from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-slate-300">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <div className="bg-slate-300">
        <Footer />
      </div>
    </>
  );
}

export default App;
