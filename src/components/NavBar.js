import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          D-Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/accesorios.js">
                Accesorios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/coleccionables.js">
                Coleccionables
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/vestimentas.js">
                Vestimentas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/nosotros.js">
                Nosotros
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <a className="nav-link" href="/">
              <CartWidget />
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
