import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.scss';
import Home from './pages/Home';
// import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Properties from './pages/Properties';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// reportWebVitals(console.log);
