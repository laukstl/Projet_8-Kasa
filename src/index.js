// Styles globaux
import './index.scss';

// Modules React et React-router
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/home';
import About from './pages/about';
import Logement from './pages/logement';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

// Encrage de l'application dans le html de base
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                {/* route de secours pour les url non valides */}
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
