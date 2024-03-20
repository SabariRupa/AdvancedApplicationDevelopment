import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
const role=localStorage.getItem('role')
  const userOptions = [
    { path: '/userdashb', name: 'Dashboard' },
    { path: '/loans', name: 'Loans' },
    { path: '/documents', name: 'Documents' },
    { path: '/profile', name: 'Profile' },
    { path: '/', name: 'Logout' },
  ];

  const adminOptions = [
    { path: '/adminDash', name: 'Dashboard' },
    { path: '/loans', name: 'Loans' },
    { path: '/banks', name: 'Banks' },
    { path: '/users', name: 'Users' },
    { path: '/schemes', name: 'Schemes' },
    { path: '/', name: 'Logout' },
  ];

  const options = role === 'admin' ? adminOptions : userOptions;

  return (
    <div className="sidebar">
      <div className="logo">
        <img className='user-icon' src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png" alt="User Icon"/>
        <h5>username</h5>
      </div>
      <div>
        <ul className="sidebar-menu">
          {options.map((option) => (
            <li key={option.path}>
              <Link to={option.path} className={currentPath === option.path ? "selected" : ""}>{option.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
