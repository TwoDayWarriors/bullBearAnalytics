import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'; 

import { useNavigate } from 'react-router-dom';

const LoginForm = ({setIsAuthenticated}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  let navigate = useNavigate()

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/users/login", { email, password }) 
      .then((result) => {
        console.log(result.data);
        if (result.data === "Success") {
          // Handle successful login hereling 
          setIsAuthenticated(true);
          console.log("Login successful");
        } else if (result.data === "Password is incorrect") {
          console.log("Password is incorrect");
        } else if (result.data === "No record existed") {
          console.log("User not found");
        }
      })
      .catch((err) => {
        console.log("An error occurred while logging in:", err);
      });
      navigate('/dashboard')
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleLoginFormSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">
            Email address
          </label>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="form-label mt-4">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group form-check remember-me-container">
          <div className="remember-me-inner">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />

            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
