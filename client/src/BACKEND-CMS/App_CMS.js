import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import "./App_CMS.css";
import Test from "./pages/Test/test";
import AllUser from "./pages/All-User/AllUser";
function App_CMS() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Sidebar />
          <div className="child-content">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hello" element={<Test />} />
              <Route path="/all-user" element={<AllUser/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App_CMS;
