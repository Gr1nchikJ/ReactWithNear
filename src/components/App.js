import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, HashRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import { getCertificate, sendTransaction } from "./NearConnect";
import { Home } from "./Home";
import { CertificateForm } from "./CertificateForm";
import { CertificatesLibrary } from "./CertificatesLibrary";
import Header from "./Header";
import { Footer } from "./Footer";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header /> 
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/create-certificate" element={<CertificateForm />} />
            <Route path="/library" element={<CertificatesLibrary />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
