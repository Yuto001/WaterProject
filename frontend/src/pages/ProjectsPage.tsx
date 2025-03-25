import { useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ProjectList from '../components/projectList';
import WelcomeBand from '../components/WelcomeBand';
import CartSummary from '../components/CartSummary';

function ProjectsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <>
      <div className="container mt-4">
        <CartSummary />
        <WelcomeBand />

        <div className="row">
          <div className="col-md-3">
            <CategoryFilter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
          <div className="col-md-9">
            <ProjectList selectedCategories={selectedCategories} />
          </div>
        </div>
      </div>

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

export default ProjectsPage;
