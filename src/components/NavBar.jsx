import React from 'react';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Tienda de Herramientas</a>
      <ul className="navbar-nav ml-auto navbar-list">
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Categoría 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Categoría 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Categoría 3</a>
        </li>
        <li className="nav-item">
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
