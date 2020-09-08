import React, { Component } from 'react';
import Menu from './Menu';
import SearchHeader from './SearchHeader';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-primary text-white">
          <NavLink to="/">
            <h4 className="navbar-brand mt-2 pl" style={{color:'#ffff'}}>{'News Feeds'}</h4>
          </NavLink>
          <SearchHeader user="hola" />
        </nav>
        <Menu />
      </div>
    );
  }
}

export default Header;
