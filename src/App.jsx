import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { About, Skills, Contact, Services, Projects, Home } from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
<<<<<<< HEAD
    <div className="bg-slate-700">
      <Navbar />
=======
    <>
      <div className="bg-slate-300">
        <Navbar />
      </div>
>>>>>>> dda222ceb0defd6cb5cec202ade1ea488fb31212
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
<<<<<<< HEAD
    </div>
=======
      <div className="bg-slate-300">
        <Footer />
      </div>
    </>
>>>>>>> dda222ceb0defd6cb5cec202ade1ea488fb31212
  );
}

export default App;
