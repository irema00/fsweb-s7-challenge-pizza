import React from "react";
import "../PizzaForm.css";
function Dough({ onDoughChange, error }) {
  const handleChange = (e) => {
    onDoughChange(e.target.value);
  };
  return (
    <>
      <label htmlFor="crust-type">
        <h4>
          Crust Type <span style={{ color: "red" }}>*</span>
        </h4>
      </label>
      <select id="crust-type" defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          Choose Crust Type
        </option>
        <option value="Flex-Container-Crunch">Flex-Container Crunch</option>
        <option value="Grid-Layout-Gourmet">Grid Layout Gourmet</option>
        <option value="Bootstrap-Biscuit-Base">Bootstrap Biscuit Base</option>
      </select>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
export default Dough;
