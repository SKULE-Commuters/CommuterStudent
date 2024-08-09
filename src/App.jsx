import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Home, AboutUs, Resources, Clubs, Footer } from './imports';

function App() {
  return (
    <Router>
      <div className="navbar-spacer" />
      <NavBar />
      <Home />
      <AboutUs />
      <Resources />
      <Clubs />
      <Footer />
    </Router>
  );
}

export default App;

// keeping the router commented out for if we want to add more pages later
    // <Router>
    //   <NavBar />
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/maps" element={<Maps/>} />
    //   </Routes>
    // </Router>