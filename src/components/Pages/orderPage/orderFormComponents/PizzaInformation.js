import React from "react";
import "../PizzaForm.css";

function PizzaInformation({ name, price, description, rating, commentCount }) {
  return (
    <>
      <div className="info">
        <h4>{name}</h4>
        <div className="base-price-line">
          <h2>{price} ₺</h2>
          <div className="rating-comment">
            <span>{rating}</span>
            <span> ({commentCount})</span>
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
    </>
  );
}

export default PizzaInformation;
