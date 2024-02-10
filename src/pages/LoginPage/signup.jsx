import React from 'react';
import './signup.scss';

function Signup() {
  return (
    <div className="signup-wrapper">
      <div className="signup-title">Signup Form</div>
      <form action="#">
        <div className="signup-field">
          <input type="text" required />
          <label>Username</label>
        </div>
        <div className="signup-field">
          <input type="email" required />
          <label>Email Address</label>
        </div>
        <div className="signup-field">
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="signup-field">
          <input type="password" required />
          <label>Confirm Password</label>
        </div>
        <div className="signup-field">
          <input type="submit" value="Signup" />
        </div>
      </form>
    </div>
  );
}

export default Signup;
