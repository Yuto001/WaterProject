import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>© 2025 [Your Website Name]. All rights reserved.</p>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
