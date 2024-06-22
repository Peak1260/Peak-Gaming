import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import logo from './assets/3rd Design.png';

import { Home } from './pages/home.js';
import { News } from './pages/news.js';
import { Reviews } from './pages/reviews.js';
import { Hardware } from './pages/hardware.js';
import { Videos } from './pages/videos.js';
import { About } from './pages/about.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="branding">
            <h1>
              <img src={logo} alt="Peak Gaming Logo" />
            </h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/hardware">Hardware</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="footer">
        <p>Email: peak1260@gmail.com</p>
        <p>Phone: (510)513-5593</p>
        <p>&copy; 2024 Peak Gaming Web. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
