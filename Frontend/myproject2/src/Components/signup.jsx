import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role:'user'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/createUser', formData);
      console.log(response.data); 
      nav("/login");
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="mylog">
      <div className="log-container">
        <br />
        <div className="login">
          <div className="log-container">
            <h1>SIGNUP</h1>
            <form>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" /><br />
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" /><br />
              <button onClick={handleSubmit}>Register</button>
            </form>
            <p>Already have an Account &gt;&gt;&gt;</p>
          </div>
        </div>

        <div className="register">
          <div className="log-container">
            <h2>Start your journey..</h2>
            <p>"Planting prosperity, one loan at a time. Join us today and cultivate success with tailored loan solutions. Harvest your dreams with our agricultural financing. Get started now."
            </p>
            <button onClick={() => nav("/login")}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
