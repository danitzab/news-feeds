import React from 'react';
import logo from '../assets/logo1b.png';

export const Footer = () => {
  return (
    <div className="footer ">
      <img className="img mx-auto d-block mt-5 pt-2" src={logo} alt="logo-latina" />
      <h6 className="mt-auto mb-2 text-center mt-5" style={{ color: '#ffff' }}>
        By Danitza Bonilla
      </h6>
    </div>
  );
};
