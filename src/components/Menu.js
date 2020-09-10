import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const categories = [
    {
      id: 1,
      name: 'Política',
    },
    {
      id: 2,
      name: 'Internacionales',
    },
    {
      id: 3,
      name: 'Tecnología',
    },
    {
      id: 4,
      name: 'Espectáculos',
    },
    {
      id: 5,
      name: 'Deportes',
    },
    {
      id: 6,
      name: 'Diseño',
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} exact className="nav-link" activeClassName="active">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            {categories.map((element, i) => (
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
