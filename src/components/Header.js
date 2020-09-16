import React from 'react';
import Menu from './Menu';
import SearchHeader from './SearchHeader';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo1b.png';

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-primary text-white">
        <NavLink to="/">
          <img className="navbar-brand mt-2 pl img" src={logo} alt="logo-latina" />
        </NavLink>
        <SearchHeader />
      </nav>
      <Menu />
    </div>
  );
};

export default Header;
