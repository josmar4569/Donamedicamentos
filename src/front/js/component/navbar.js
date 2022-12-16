import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">INICIO</span>
        </Link>
        <Link to="/login">
          <span className="navbar-brand mb-0 h1">login</span>
        </Link>
        <Link to="/quienesSomos">
          <span className="navbar-brand mb-0 h1">Quienes somos</span>
        </Link>
        <Link to="/politicas">
          <span className="navbar-brand mb-0 h1">Politicas</span>
        </Link>
        <Link to="/catalogo">
          <span className="navbar-brand mb-0 h1">Catalogo</span>
        </Link>
        <Link to="/donaciones">
          <span className="navbar-brand mb-0 h1">Donaciones</span>
        </Link>
        <Link to="/patrocinantes">
          <span className="navbar-brand mb-0 h1">Patrocinantes</span>
        </Link>
        <Link to="/misionVision">
          <span className="navbar-brand mb-0 h1">Mision y Vision</span>
        </Link>
        <Link to="/contacto">
          <span className="navbar-brand mb-0 h1">Contacto</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">Ingresar</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
