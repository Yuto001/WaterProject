//import CookieConsent from 'react-cookie-consent';
import './App.css';
//import Fingerprint from './Fingerprint';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import PrivacyPolicy from './PrivacyPolicy';

//import { useState } from 'react';
import ProjectsPage from './pages/ProjectsPage';
import DonatePage from './pages/DonatePage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import AdminProjectsPage from './pages/AdminProjectsPage';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProjectsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/donate/:projectName/:projectId"
              element={<DonatePage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/adminprojects" element={<AdminProjectsPage />} />
          </Routes>
        </Router>
      </CartProvider>

      {/*
      <CookieConsent>
        This website uses cookies to enhance the user expereience.
      </CookieConsent>
      <br />
      <Fingerprint />
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
      */}
    </>
  );
}

export default App;
