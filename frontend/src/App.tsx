import CookieConsent from 'react-cookie-consent';
import './App.css';
import ProjectList from './projectList';
import Fingerprint from './Fingerprint';

function App() {
  return (
    <>
      <ProjectList />
      <CookieConsent>
        This website uses cookies to enhance the user expereience.
      </CookieConsent>
      <br />
      <Fingerprint />
    </>
  );
}

export default App;
