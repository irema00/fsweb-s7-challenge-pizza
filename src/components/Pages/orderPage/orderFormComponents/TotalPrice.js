import React from "react";

function TotalPrice({ basePrice, selectedIngredients }) {
  const ingredientsPrice = selectedIngredients.length * 5;
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
