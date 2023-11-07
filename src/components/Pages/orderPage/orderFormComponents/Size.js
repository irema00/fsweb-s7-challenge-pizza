import React from "react";

function Size({ onSizeChange, error }) {
  const handleChange = (e) => {
    onSizeChange(e.target.value);
  };
  return (
    <div className="size-container">
      <h4>
        Pizza Size <span style={{ color: "red" }}>*</span>
      </h4>
      <ul>
        <li>
          <input
            type="radio"
            id="size-small"
            name="size"
            value="small"
            onChange={handleChange}
          />
          <label htmlFor="size-small"> Small</label>
        </li>
        <li>
          <input
            id="size-medium"
            type="radio"
            name="size"
            value="medium"
            onChange={handleChange}
          />
          <label htmlFor="size-medium"> Medium </label>
        </li>
        <li>
          <input
            id="size-large"
            type="radio"
            name="size"
            value="buyuk"
            onChange={handleChange}
          />
          <label htmlFor="size-large"> Large</label>
        </li>
      </ul>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
export default Size;
