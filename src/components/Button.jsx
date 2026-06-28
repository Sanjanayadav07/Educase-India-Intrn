import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button className={`popx-btn popx-btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;