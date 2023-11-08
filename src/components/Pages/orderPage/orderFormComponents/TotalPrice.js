import React from "react";
import "../PizzaForm.css";
function TotalPrice({ basePrice, ingredientsPrice }) {
  const totalPrice = basePrice + ingredientsPrice;

  return (
    <>
      <h4>Order Total</h4>
      <div id="extra-total">
        <p>Selections:</p> <p>{ingredientsPrice}₺ </p>
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
