import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';
import footerimg from '../assets/secure-payment-stripe.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Us */}
          <div className="footer-section about-section">
            <h3 className="footer-title">ABOUT US</h3>
            <p className="footer-description">
              AssentGlobal was founded to enhance and assist the quality and compliance professionals, government agencies and regulators to help the world by ensuring the quality, safety and continuous improvement of global operations, and its laws and policies.
            </p>
            <button className="read-more-btn">READ MORE</button>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">QUICK LINKS</h3>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/subscribe">Subscribe</Link></li>
            </ul>
          </div>

          {/* Support Information */}
          <div className="footer-section">
            <h3 className="footer-title">SUPPORT INFORMATION</h3>
            <div className="support-info">
              <div className="support-item">
                <span className="support-label">Tel:</span>
                <span className="support-value">+1 (727) 474 1465</span>
              </div>
              <div className="support-item">
                <span className="support-label">Fax:</span>
                <span className="support-value">+1 (941) 761 5822</span>
              </div>
              <div className="support-item">
                <span className="support-label">Email:</span>
                <span className="support-value">support@assentglobal.us</span>
              </div>
              <div className="support-item">
                <span className="support-label">Location:</span>
                <span className="support-value">4283 Express Lane<br />Suite 3557-170<br />Sarasota, FL 34249</span>
              </div>
              <div className="support-item">
                <span className="support-label">Location:</span>
                <span className="support-value">304 S. Jones Blvd #957<br />Las Vegas, NV 89107</span>
              </div>
            </div>
          </div>

          {/* Safe & Secure */}
          <div className="footer-section">
            <h3 className="footer-title">SAFE & SECURE</h3>
            <div className="payment-info">
              <img src={footerimg} alt="Rect Image"></img>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>Copyright © 2021 <span className="company-name">Assentglobal</span> All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;