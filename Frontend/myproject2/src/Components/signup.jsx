import React from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
  const nav=useNavigate();
  const navlog=()=>{
    nav("/login")
  }
  return (
    <div className="mylog">
    <div className="log-container">
    <br/>
      <div className="login">
         <div className="log-container">
              <h1>SIGNUP</h1>
              <input type="text" placeholder="Name" /><br />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" /><br/>
              <input type="text" placeholder="Mobile Number" /><br/>
             <button onClick={navlog}>Register</button>
              <p>Already have an Account &gt;&gt;&gt;</p>
              
         </div>
      </div>
     
      <div className="register">
          <div className="log-container">
            <h2>Start your journey..</h2>
              <p>"Planting prosperity, one loan at a time. Join us today and cultivate success with tailored loan solutions. Harvest your dreams with our agricultural financing. Get started now."
              </p>
              <button  onClick={navlog}>Login</button>
              </div>
      </div>  
    </div>
    </div>
  );
};

export default Signup;
