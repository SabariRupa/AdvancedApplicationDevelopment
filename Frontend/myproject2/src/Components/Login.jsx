import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav=useNavigate();
  const navreg=()=>{
    nav("/register")
  }
  return (
    <div className="mylog">
    <div className="log-container">
      <div className="login">
         <div className="log-container">
              <h1>LOGIN</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" /><br />
              <input type="checkbox" /><span>Remember me</span>
              <a href="#">Forgot password?</a>
              <button>Sign in</button>
              <p>Enter your personal details and start journey with us..</p>  
              <br/>
            
         </div>
      </div>
      <div className="register">
          <div className="log-container">
              <h2>Welcome Back!!</h2>
              <p> Log in now to explore our range of services and secure funding for your farming needs.</p>
              <button onClick={navreg}>Register</button>     
          </div>
      </div>  
    </div>
    </div>
  );
};

export default Login;
