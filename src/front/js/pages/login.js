import React, { Component } from "react";
import "../../styles/home.css";

export const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> Gmail </h5>
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Correo electronico"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              @gmail.com
            </span>
          </div>
          <h5 class="card-title"> Password </h5>
          <input
            type="text"
            class="form-control"
            placeholder="Ingrese la contraseña"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          ></input>
          <a href="#" class="btn btn-primary">
            {" "}
            Registrarse{" "}
          </a>
        </div>
      </div>
      <p>
        {" "}
        Si no tienes una cuenta, <a href=""> Registrate. </a>
      </p>
    </div>
  );
};
