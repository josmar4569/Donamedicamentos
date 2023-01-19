import React, { Component } from "react";
import "../../styles/home.css";

export const Login = () => {
  return (
    <div className="container row d-flex justify-content-center">
      <div className="card col-4">
        <div className="card-body">
          <h5 className="card-title"> Email </h5>
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <h5 class="card-title"> Password </h5>
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          ></input>
          <a href="#" className="btn btn-primary">
            {" "}
            Registrarse{" "}
          </a>
        </div>
        <p>
          {" "}
          Si no tienes una cuenta, <a href="/misionVision"> Registrate. </a>
        </p>
      </div>
    </div>
  );
};
