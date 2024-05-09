import './App.css';
import React from 'react';
import Nav from "./Components/Nav.jsx";
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import Waarom from './Components/Waarom.jsx';
import WordKlank from './Components/WordKlant.jsx';
import Kennisbank from './Components/Kennisbank.jsx';
import Contact from './Components/Contact.jsx';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav/>
        <Routes>    
        <Route exact path="/" element={<Home/>} />
          <Route exact path="/waarom" element={<Waarom />} />
          <Route exact path="/wordklank" element={<WordKlank />} />
          <Route exact path="/kennisbank" element={<Kennisbank />} />
          <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;