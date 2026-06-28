import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import './Auth.css';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phoneNumber: 'Marry Doe',
    email: 'Marry Doe',
    password: 'Marry Doe',
    companyName: 'Marry Doe',
    isAgency: 'yes'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="page-container auth-page">
      <h1>Create your<br/>PopX account</h1>

      <form className="auth-form signup-form" onSubmit={handleSignUp}>
        <Input 
          label="Full Name" 
          required 
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <Input 
          label="Phone number" 
          required 
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <Input 
          label="Email address" 
          required 
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input 
          label="Password" 
          required 
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Input 
          label="Company name" 
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />

        <div className="radio-group-container">
          <label className="radio-group-label">Are you an Agency?<span className="popx-input-required">*</span></label>
          <div className="radio-options">
            <label className="radio-option">
              <input 
                type="radio" 
                name="isAgency" 
                value="yes" 
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              <span className="radio-custom"></span>
              Yes
            </label>
            <label className="radio-option">
              <input 
                type="radio" 
                name="isAgency" 
                value="no" 
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
              <span className="radio-custom"></span>
              No
            </label>
          </div>
        </div>

        <div className="signup-bottom">
          <Button type="submit" variant="primary">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;