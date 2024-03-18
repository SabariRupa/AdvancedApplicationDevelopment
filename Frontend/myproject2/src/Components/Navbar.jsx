import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="nav">
      <header>
        <div className="nav-content">
          <div className='logo'>
            <Link to="/">
              <img className="logo1" alt="logo" src="https://e7.pngegg.com/pngimages/727/712/png-clipart-sustainable-agriculture-research-conservation-agriculture-natural-resource-management-others-leaf-logo-thumbnail.png"/></Link>
          </div>

          <div className="logo-name"> 
            <h2 className="lname">AgroLend</h2>
          </div>

              <div className="top-bar">
                <ul>
                  <li className="li-elements">
                    <Link to="/loans">Loans</Link>
                  </li>
                  <li className="li-elements">
                    <Link to="/about">Lenders</Link>
                  </li>
                  <li className="li-elements">
                    <Link to="/register">Register</Link>
                  </li>
                  <li className="li-elements">
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
          </div>
        </div>

      </header>
    </div>
  );
};

export default Navbar;