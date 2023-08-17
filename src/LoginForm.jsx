import React, { useState } from 'react';

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <form>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete="off" />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit" className="btn btn-primary mt-4">Login</button>
    </form>
  );
};

export default LoginForm;
