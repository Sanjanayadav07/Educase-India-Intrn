import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container welcome-page">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
      </div>

      <div className="welcome-bottom-actions">
        <Button variant="primary" onClick={() => navigate('/signup')}>
          Create Account
        </Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
