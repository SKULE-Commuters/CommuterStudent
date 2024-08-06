import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AboutUs, Resources, NavBar, Footer } from './imports';

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <AboutUs />
      <Resources />
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