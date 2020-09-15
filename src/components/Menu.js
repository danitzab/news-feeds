import React from 'react';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../services/category.service';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} exact className="nav-link" activeClassName="active">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            {getCategories().map((element, i) => (
              <li className="nav-item" key={i}>
                <NavLink to={`/category/${element.id}`} className="nav-link" activeClassName="active">
                  {element.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
