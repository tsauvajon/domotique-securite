import React from 'react';
import './style.css';
import '../../style/animations.css';

const Logo = () => (
  <div className="prism-logo">
    <div className="logo animated rollIn">
      <div className="logo-shadow" />
      <div className="logo-circle-background" />
      <div className="logo-container">
        <div className="logo-center" />
        <div className="logo-left" />
        <div className="logo-bottom" />
        <div className="logo-right" />
      </div>
    </div>
  </div>
);

export default Logo;
