import React from "react";
import "../PizzaForm.css";
const NameInput = ({ onNameChange, error }) => {
  return (
    <div>
      <label htmlFor="name-input">
        <h4>Name</h4>
      </label>
      <input
        type="text"
        id="name-input"
        autoComplete="name"
        onChange={(e) => onNameChange(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default NameInput;
