import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Home = () => {
  return (
    <>
      <div className="home-body">
        <div className="home-content">
          <h3>Teknolojik Yemekler</h3>
          <h2>
            KOD ACIKTIRIR <br />
            PIZZA, DOYURUR
          </h2>
          <Link id="order-pizza" to="/pizza">
            <button>
              <p>ACIKTIM</p>
            </button>
          </Link>{" "}
        </div>
      </div>
    </>
  );
};
export default Home;
