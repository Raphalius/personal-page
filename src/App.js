import React, { useRef } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Career from './Career';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

import goblin from './136818778.jpg';
import './App.css';

function App() {

  const navRef = useRef(null);

  return (
    <Router>
      <div className="App"style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div ref={navRef} className='Nav-container'>
          <nav className="App-nav">
            <img src={goblin} alt="goblin" className="Nav-logo" />
            <div className="Tab-container">
              <Link to="/" className='App-tab'>Home</Link>
              <Link to="/career" className='App-tab'>Career</Link>
              <Link to="/experience" className='App-tab'>Experience</Link>
              <Link to="/education" className='App-tab'>Education</Link>
              <Link to="/contact" className='App-tab'>Contact</Link>
            </div>
          </nav>
        </div>
        <div className="App-content" style={{ flex: 1, overflow: 'hidden' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career" element={<Career />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
