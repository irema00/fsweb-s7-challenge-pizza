import React from "react";
import "../PizzaForm.css";
function TotalPrice({ basePrice, ingredientsPrice }) {
  const totalPrice = basePrice + ingredientsPrice;

  return (
    <>
      <h4>Sipariş Toplami</h4>
      <p>Seçimler: {ingredientsPrice}₺</p>
      <p>
        <strong>Toplam:</strong> {totalPrice}₺
      </p>
    </>
  );
}

export default TotalPrice;
