import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Announcement, NavBar, Home, AboutUs, Resources, TransitTips, TransitMaps, FaresInfo, MiscInfo, Clubs, ScrollPointer, Footer } from './imports';

function App() {
  return (
    <>
      <NavBar />
      <div className="navbar-spacer" />
      <Announcement />
      <div id="site-content">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/resources" element={<Resources/>} />
            <Route path="/resources-tips" element={<TransitTips/>} />
            <Route path="/resources-maps" element={<TransitMaps/>} />
            <Route path="/resources-fares" element={<FaresInfo/>} />
            {/* TODO lockers */}
            <Route path="/resources-misc" element={<MiscInfo/>} />
            <Route path="/clubs" element={<Clubs/>} />
          </Routes>
        </Router>
      </div>
      <ScrollPointer />
      <Footer />
    </>
  );
}

export default App;