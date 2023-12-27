import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import APropos from './pages/APropos';
import Logements from './pages/Logements';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Logements" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals(console.log);
