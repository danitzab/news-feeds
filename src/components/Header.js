import React from 'react';
import Menu from './Menu';
import SearchHeader from './SearchHeader';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar bg-primary text-white">
        <NavLink to="/">
          <h4 className="navbar-brand mt-2 pl" style={{ color: '#ffff' }}>
            {'News Feeds'}
          </h4>
        </NavLink>
        <SearchHeader />
      </nav>
      <Menu />
    </>
  );
};

export default Header;
