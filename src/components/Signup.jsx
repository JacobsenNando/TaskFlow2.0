import { useState } from 'react';

import logo from '../img/Task Flow.png';

const Signup = ({ handleSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Você pode adicionar validação adicional aqui
    if (password !== confirmPassword) {
      alert("As senhas não correspondem");
      return;
    }
    handleSignup(email, password);
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
            placeholder="Senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            type="password" 
            className="input" 
            placeholder="Repita a senha" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="page-link">
            <span className="page-link-label">Esqueci a senha</span>
          </p>
          <button className="form-btn" type="submit">Cadastre-se</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
