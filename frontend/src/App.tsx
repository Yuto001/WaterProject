import CookieConsent from 'react-cookie-consent';
import './App.css';
import ProjectList from './projectList';
import Fingerprint from './Fingerprint';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  return (
    <>
      <ProjectList />
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
    </>
  );
}

export default App;
