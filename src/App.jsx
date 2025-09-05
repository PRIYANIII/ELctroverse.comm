import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";


function App() {
  return (
    <Router className='flex h-screen'>
      <Navbar />
      <div className="flex-1">
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/team' element={<Team />} />
              <Route path='/event' element={<Events />} />
              
             
            </Routes>
      </div>
    </Router>
  );
}

export default App