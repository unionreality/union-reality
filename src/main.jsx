import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext";

import HomePage from "./components/Home";
import AboutPage from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import Project from "./pages/Project";
import Constructions from "./components/Constructions";
import Receipt from "./pages/Receipt";
import Enquiries from "./pages/Enquiries";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/constructions" element={<Constructions />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/enquiries" element={<Enquiries />} />
      </Routes>
      </ContactProvider>
    </BrowserRouter>
  </React.StrictMode>
);