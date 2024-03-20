import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('role', 'admin');
      navigate("/adminDash");
    } else if(username==='user'&& password==='user123') {
      localStorage.setItem('role', 'user');
      navigate("/userdashb");
    }
    else if(username.length>0&&password.length>0){
      alert("Wrong Credentials")
    }
    else{
      alert("Enter All Details")
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="mylog">
      <div className="log-container">
        <div className="login">
          <div className="log-container">
            <h1>LOGIN</h1>
            <input type="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <input type="checkbox" /><span>Remember me</span>
            <a href="#">Forgot password?</a>
            <button onClick={handleLogin}>Sign in</button>
            <p>Enter your personal details and start journey with us..</p>
            <br />
          </div>
        </div>
        <div className="register">
          <div className="log-container">
            <h2>Welcome Back!!</h2>
            <p> Log in now to explore our range of services and secure funding for your farming needs.</p>
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;