import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import AppRoutes from "./router/Routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
