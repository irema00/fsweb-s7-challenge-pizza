import React from "react";
import "../PizzaForm.css";

const Counter = ({ count, onCountChange }) => {
  const handleIncrement = (e) => {
    e.preventDefault();
    onCountChange(count + 1);
  };
  const handleDecrement = (e) => {
    e.preventDefault();
    onCountChange(count > 1 ? count - 1 : 1);
  };

  return (
    <div className="counter-container">
      <button
        aria-label="decrease count"
        id="counter-left"
        type="button"
        onClick={handleDecrement}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="increase count"
        id="counter-right"
        type="button"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
