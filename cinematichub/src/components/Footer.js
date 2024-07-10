import React from 'react';
import '../styles/index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={'/wtvblack.png'} alt="CinematicHub Logo" />
        </div>
        <FooterSection title="MPILO" />
        <FooterSection title="THABISO" />
      </div>
      <FooterBottom />
    </footer>
  );
}



const FooterSection = ({ title }) => (
  <div className="footer-section">
    <h4>{title}</h4>
    <ul className="social-icons">
      <li><a href="https://www.linkedin.com/in/mpilo-mthiyane-532621213/"><i className="fab fa-linkedin-in"></i></a></li>
      <li><a href="https://github.com/thabiso-makolana"><i className="fab fa-github"></i></a></li>
      
    </ul>
  </div>
);






const FooterBottom = () => (
  <div className="footer-bottom">
    <p>&copy; 2024 MPILO & THABISO</p>
    <ul>
      <li><a href="#">Manage Cookies</a></li>
      <li><a href="#">Language: English (US)</a></li>
    </ul>
  </div>
);

export default Footer;
