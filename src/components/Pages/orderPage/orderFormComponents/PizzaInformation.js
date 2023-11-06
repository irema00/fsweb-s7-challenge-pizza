import React from "react";
import css from "../PizzaForm.css";

function PizzaInformation({ name, price, description, rating, commentCount }) {
  return (
    <>
      <h4>{name}</h4>
      <div className="base-price-line">
        <h2>{price} ₺</h2>
        <span>{rating}</span>
        <span> ({commentCount})</span>
      </div>
      <p>{description}</p>
    </>
  );
}

export default PizzaInformation;
