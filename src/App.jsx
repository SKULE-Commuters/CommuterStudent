import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Announcement, NavBar, Home, AboutUs, Resources, Clubs, Footer } from './imports';

function App() {
  return (
    <>
      <NavBar />
      <div className="navbar-spacer" />
      <Announcement />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/clubs" element={<Clubs/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;