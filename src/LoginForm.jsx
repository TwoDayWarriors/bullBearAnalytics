<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css"; // Import the corresponding CSS file

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
=======
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory from React Router
import './LoginForm.css'; // Import the corresponding CSS file

const LoginForm = () => {
  const history = useHistory(); // Get the history object

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
>>>>>>> c22f778923abb2c8466bb089b9076feb41c9c08b
  const [rememberMe, setRememberMe] = useState(false);

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

<<<<<<< HEAD
    axios
      .get("http://localhost:5000/api/users", { email, password })
      .then((result) => {
        console.log(result.data);

        if (result.data === "Success") {
=======
    axios.post('http://localhost:5000/api/users/login', { email, password })
      .then(result => {
        console.log(result.data); // Log the server response

        if (result.data === "Success") {
          // Redirect to StockMarket after successful login
          history.push('/stock-market'); // Replace '/stock-market' with your desired route
>>>>>>> c22f778923abb2c8466bb089b9076feb41c9c08b
        } else if (result.data === "Password is incorrect") {
          console.log("Password is incorrect");
        } else if (result.data === "No record existed") {
          console.log("User not found");
        }
      })
<<<<<<< HEAD

      .catch((err) => {
=======
      .catch(err => {
>>>>>>> c22f778923abb2c8466bb089b9076feb41c9c08b
        console.log("An error occurred while logging in:", err);
      });
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleLoginFormSubmit}>
        <h2>Login</h2>

        <div className="form-group">
<<<<<<< HEAD
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">
            Email address
          </label>

=======
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
>>>>>>> c22f778923abb2c8466bb089b9076feb41c9c08b
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
<<<<<<< HEAD
          <label htmlFor="exampleInputPassword1" className="form-label mt-4">
            Password
          </label>

=======
          <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
>>>>>>> c22f778923abb2c8466bb089b9076feb41c9c08b
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
<<<<<<< HEAD

            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
=======
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
>>>>>>> c22f778923abb2c8466bb089b9076feb41c9c08b
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
