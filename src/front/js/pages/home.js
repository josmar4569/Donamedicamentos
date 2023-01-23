import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="row">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card text-bg-dark">
              <img src="rigo-baby.jpg" className="card-img d-block"></img>
              <div className="card-img-overlay">
                <h5 className="card-title text-primary">Card title</h5>
                <p className="card-text text-primary">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text text-primary">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card text-bg-dark">
              <img src="rigo-baby.jpg" className="card-img d-block"></img>
              <div className="card-img-overlay">
                <h5 className="card-title text-primary">Card title</h5>
                <p className="card-text text-primary">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text text-primary">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card text-bg-dark">
              <img src="rigo-baby.jpg" className="card-img d-block"></img>
              <div className="card-img-overlay">
                <h5 className="card-title text-primary">Card title</h5>
                <p className="card-text text-primary">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text text-primary">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
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
          data-bs-target="#carouselExample"
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
  );
};
console.log(Home);
