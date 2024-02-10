import React from 'react';
import './login.scss'; // Import the CSS file

function Login() {
  return (
    <div className="wrapper">
      <h2>Login</h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter your password" required />
        </div>
        <div className="input-box button">
          <input type="submit" value="Login Now" />
        </div>
        <div className="text">
          <h3>Don't have an account? <a href="#">Sign Up now</a></h3>
        </div>
      </form>
    </div>
  );
}

export default Login;
