import React from "react";
import "../PizzaForm.css";
function TotalPrice({ basePrice, toppingsPrice }) {
  const totalPrice = (basePrice + toppingsPrice).toFixed(2);

  return (
    <>
      <h4>Order Total</h4>
      <div id="extra-total">
        <p>Selections:</p> <p>{toppingsPrice}₺ </p>
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
