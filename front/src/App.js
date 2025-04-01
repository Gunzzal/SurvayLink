import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./component/pages/HomPage";
import CertificationPage from "./component/pages/auth/CertificationPage";
import VerifyCodePage from "./component/pages/auth/VerifyCodePage";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login/Certification" element={<CertificationPage />}
                />
              </Routes>
              <Footer />
            </>
          }
        />
        <Route path="/VerifyCode" element={<VerifyCodePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
