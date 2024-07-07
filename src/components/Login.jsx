import React, { useState } from 'react';
import logo from '../img/Task Flow.png';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="container">
      <div>
        <img src={logo} alt="Task Flow Logo" className="logo" />
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            className="input" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            className="input" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="page-link">
            <span className="page-link-label">Esqueci a senha</span>
          </p>
          <button className="form-btn" type="submit">Log in</button>
        </form>
        <p className="sign-up-label">
          Não tem conta?<span className="sign-up-link">Cadastre-se</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
