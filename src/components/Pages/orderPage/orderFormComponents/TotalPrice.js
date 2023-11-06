import React from "react";
import "../PizzaForm.css";
function TotalPrice({ basePrice, ingredientsPrice }) {
  const totalPrice = basePrice + ingredientsPrice;

  return (
    <>
      <h4>Sipariş Toplami</h4>
      <div id="extra-total">
        <p>Seçimler:</p> <p>{ingredientsPrice}₺ </p>
      </div>

      <div id="total">
        <p>
          <strong>Toplam:</strong>
        </p>
        <p>{totalPrice}₺ </p>
      </div>
    </>
  );
}

export default TotalPrice;
