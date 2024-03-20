import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <i className="fab fa-slack"></i>
          <span className="logo_name"> @ AGROLEND</span>
        </div>
        <div className="footer-links">
          <ul className="footer-box">
            <li className="link_name">WEBSITE</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contactus">Contact us</Link></li>
            <li><Link to="/aboutus">About us</Link></li>
            <li><a href="#">Get started</a></li>
          </ul>
          <ul className="footer-box">
            <li className="link_name">SERVICES</li>
            <li><a>Loan Application</a></li>
            <li><a>Loan Calculator</a></li>
            <li><a>Loan Approval</a></li>
            <li><a>Loan Disbursement</a></li>
            <li><a>Loan Repayment</a></li>
          </ul>
          <ul className="footer-box">
            <li className="link_name">ACCOUNT</li>
            <li><a>Preferences</a></li>
            <li><a>Feedback</a></li>
            <li><a>FAQ</a></li>
          </ul>
          <ul className="footer-box">
            <li className="link_name">TRAINING</li>
            <li><a>Loan Management</a></li>
            <li><a>Financial Planning</a></li>
            <li><a>Agri Business</a></li>
            <li><a>Risk Management</a></li>
          </ul>
         
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom_text">
          <span className="copyright_text">Copyright © 2023 <a>Logo.</a>All rights reserved</span>
          <span className="policy_terms">
            <Link to="/privacy">Privacy policy</Link> &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/terms">Terms & condition</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
