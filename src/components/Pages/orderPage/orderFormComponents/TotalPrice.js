import React from "react";
import "../PizzaForm.css";
function TotalPrice({ basePrice, toppingsPrice, count }) {
  const totalPrice = (count * (basePrice + toppingsPrice)).toFixed(2);

  return (
    <>
      <h4>Order Total</h4>
      <div id="extra-total">
        <p>Selections:</p> <p>{toppingsPrice * count}₺ </p>
      </div>

      <div id="total">
        <p>
          <strong>Total:</strong>
        </p>
        <p>{totalPrice}₺ </p>
      </div>
    </>
  );
}

export default TotalPrice;
