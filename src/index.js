import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.scss';
import Home from './pages/Home';
// import reportWebVitals from './reportWebVitals';
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

// fetch("/logements.json")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // Convertis d'abord en texte pour déboguer
//   })
//   .then(data => {

//     for ( const k in data ) { console.log(k.id); }

//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });



// reportWebVitals(console.log);
