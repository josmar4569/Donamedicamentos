import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <header className="container">
      <div className="row">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="rigo-baby.jpg" className="d-block" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary">Presentación</h5>
                <p className="text-primary">
                  Some representative placeholder content for the first slide.
                </p>
                <a href="/login" className="btn btn-primary btn-lg">
                  Donar
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src="rigo-baby.jpg" className="d-block" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <div>
                  <h5 className="text-primary">Second slide label</h5>
                  <p className="text-primary">
                    Some representative placeholder content for the second
                    slide.
                  </p>
                  <a href="/login" className="btn btn-primary">
                    LOG IN TO YOUR ACCOUNT
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="rigo-baby.jpg" className="d-block" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary">Third slide label</h5>
                <p className="text-primary">
                  Some representative placeholder content for the third slide.
                </p>
                <a href="/login" className="btn btn-primary">
                  LOG IN TO YOUR ACCOUNT
                </a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </header>
  );
};
console.log(Home);
