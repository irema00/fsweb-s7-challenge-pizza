import React from "react";

const NameInput = ({ onNameChange, error }) => {
  return (
    <div>
      <label htmlFor="name">
        <h4>İsminizi Yazın</h4>
      </label>
      <input
        type="text"
        id="name"
        autoComplete="name"
        onChange={(e) => onNameChange(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default NameInput;
