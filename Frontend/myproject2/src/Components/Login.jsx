import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault()
    console.log(username);
    console.log(password);
      try{
        const response=await axios.post('http://localhost:8080/api/auth/authenticate',{email:username,password});
        console.log(response.data)
        const decode=jwtDecode(response.data);
        console.log(decode)
        localStorage.setItem("role",decode.role)
        localStorage.setItem("userId",decode.id)
        localStorage.setItem("exp",decode.exp)
        localStorage.setItem("email",decode.sub)
        localStorage.setItem("isLoggedIn",true)
        if(localStorage.getItem("role")==="user"){
          navigate("/userdashb")
        }
       else if(localStorage.getItem("role")==="admin"){
          navigate("/adminDash")
        }
        else {
          alert("Something went wrong")
        }
      }
      catch(error){
        alert("Wrong Credentials....Please Try again")
        console.log(error)
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