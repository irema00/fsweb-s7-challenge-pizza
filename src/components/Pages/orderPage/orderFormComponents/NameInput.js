import React from "react";

const NameInput = ({ onNameChange, error }) => {
  return (
    <div>
      <label htmlFor="name">İsminizi Yazın</label>
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
