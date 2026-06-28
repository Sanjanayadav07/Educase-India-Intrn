import React from 'react';
import './Input.css';

const Input = ({ label, required, className = '', ...props }) => {
  return (
    <div className={`popx-input-container ${className}`}>
      <div className="popx-input-wrapper">
        <label className="popx-input-label">
          {label}
          {required && <span className="popx-input-required">*</span>}
        </label>
        <input className="popx-input-field" {...props} />
      </div>
    </div>
  );
};

export default Input;