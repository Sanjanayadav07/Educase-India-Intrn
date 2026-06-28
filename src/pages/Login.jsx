import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/account');
    }
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="page-container auth-page">
      <h1>Signin to your<br/>PopX account</h1>
      <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>

      <form className="auth-form" onSubmit={handleLogin}>
        <Input 
          label="Email Address" 
          type="email" 
          placeholder="Enter email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="Enter password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <Button 
          type="submit" 
          variant={isFormValid ? 'primary' : 'muted'} 
          disabled={!isFormValid}
          className="login-btn"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;