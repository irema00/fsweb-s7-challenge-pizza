import React from "react";
import "../PizzaForm.css";
const NameInput = ({ onNameChange, error }) => {
  return (
    <div>
      <label htmlFor="name">
        <h4>Name</h4>
      </label>
      <input
        type="text"
        id="name-input"
        autoComplete="name-input"
        onChange={(e) => onNameChange(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default NameInput;
