import React from "react";
function PizzaInformation({ name, price, description, rating, commentCount }) {
  return (
    <>
      <h1>{name}</h1>
      <p>{price} ₺</p>
      <p>{description}</p>
      <div>
        <span>{rating}</span>
        <span> ({commentCount})</span>
      </div>
    </>
  );
}

export default PizzaInformation;
