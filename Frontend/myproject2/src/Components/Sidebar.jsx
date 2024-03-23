import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const role = localStorage.getItem('role');
  const email = localStorage.getItem("email");
const nav=useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    if(window.confirm("Are you sure ?")){
      localStorage.clear();
      nav("/login");
    }
    else{

    }
  };

  const userOptions = [
    { path: '/userdashb', name: 'Dashboard' },
    { path: '/loans', name: 'Loans' },
    { path: '/documents', name: 'Documents' },
    { path: '/profile', name: 'Profile' },
    { path: '/', name: 'Logout', onClick: handleLogout }, // Added onClick handler for Logout
  ];

  const adminOptions = [
    { path: '/adminDash', name: 'Dashboard' },
    { path: '/loans', name: 'Loans' },
    { path: '/banks', name: 'Banks' },
    { path: '/users', name: 'Users' },
    { path: '/schemes', name: 'Schemes' },
    { path: '/', name: 'Logout', onClick: handleLogout }, // Added onClick handler for Logout
  ];

  const options = role === 'admin' ? adminOptions : userOptions;

  return (
    <div className="sidebar">
      <div className="logo">
        <img className='user-icon' src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png" alt="User Icon"/>
        <h5>{email}</h5>
      </div>
      <div>
        <ul className="sidebar-menu">
          {options.map((option) => (
            <li key={option.path}>
              {/* Use onClick handler if provided */}
              <Link to={option.path} onClick={option.onClick} className={currentPath === option.path ? "selected" : ""}>{option.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
