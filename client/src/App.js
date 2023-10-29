import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar/sidebar";
import Header from "./pages/Header/header";
import Home from "./pages/Home/home";
import './App.css';
import Test from "./pages/Test/test";
function App() {
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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
