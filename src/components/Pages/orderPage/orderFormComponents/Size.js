import React from "react";
import "../PizzaForm.css";
function Size({ onSizeChange, error }) {
  const handleChange = (e) => {
    onSizeChange(e.target.value);
  };

  return (
    <div className="size-container">
      <label htmlFor="size-select">
        <h4>Boyut Seç</h4>
      </label>
      <ul>
        <li>
          <label htmlFor="size-small">Küçük</label>
          <input
            type="radio"
            id="size-small"
            name="size"
            value="kucuk"
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="size-medium">Orta</label>
          <input
            type="radio"
            id="size-medium"
            name="size"
            value="orta"
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="size-large">Büyük</label>
          <input
            type="radio"
            id="size-large"
            name="size"
            value="buyuk"
            onChange={handleChange}
          />
        </li>
      </ul>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
export default Size;
