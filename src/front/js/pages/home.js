import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">LIFE FOR ALL</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacto">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/catalogo">
                  CATALOGUE
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LOGIN
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/login">
                      LOGIN
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/misionVision">
                      REGISTER
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
