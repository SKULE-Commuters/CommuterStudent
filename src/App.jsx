import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AboutUs, JoinUs, Resources, NavBar } from './imports';

function App() {
  return (
    <Router>      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/join-us" element={<JoinUs/>} />
        <Route path="/resources" element={<Resources/>} />
      </Routes>
    </Router>
  );
}

export default App;