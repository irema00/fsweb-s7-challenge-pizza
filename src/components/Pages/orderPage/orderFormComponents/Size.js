import React from "react";
import "../PizzaForm.css";
function Size({ onSizeChange, error }) {
  const handleChange = (e) => {
    onSizeChange(e.target.value);
  };

  return (
    <div className="size-container">
      <label>
        <h4>Boyut Sec</h4>
      </label>
      <li>
        <input type="radio" name="size" value="kucuk" onChange={handleChange} />
        Küçük
      </li>
      <li>
        <input type="radio" name="size" value="orta" onChange={handleChange} />
        Orta
      </li>
      <li>
        <input type="radio" name="size" value="buyuk" onChange={handleChange} />
        Büyük
      </li>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
export default Size;
