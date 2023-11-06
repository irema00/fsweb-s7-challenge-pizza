import React from "react";
import "../PizzaForm.css";
function Dough({ onDoughChange, error }) {
  const handleChange = (e) => {
    onDoughChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="dough-select">
        <h4>Hamur Seç *</h4>
      </label>
      <select id="dough-select" defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          Hamur Kalinliği
        </option>
        <option value="ince">İnce</option>
        <option value="orta">Orta</option>
        <option value="kalın">Kalın</option>
      </select>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default Dough;
