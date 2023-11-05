import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Teknolojik Yemekler</h1>
      <h2>KOD ACIKTIRIR</h2>
      <h2>PIZZA, DOYURUR</h2>
      <Link id="order-pizza" to="/pizza">
        <button>ACIKTIM</button>
      </Link>
    </>
  );
};
export default Home;
