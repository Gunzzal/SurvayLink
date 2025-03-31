import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import HomePage from './component/pages/HomPage';
import Header from './component/layout/Header';


function App() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <BrowserRouter>
       <Header userInfo={userInfo}  />
      <Routes>
        {/* <Route path="/login" element={<LoginPage setUserInfo={handleLogin}/>}></Route> */}
        {/* <Route path="/" element={<HomePage />} /> */}
        
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
